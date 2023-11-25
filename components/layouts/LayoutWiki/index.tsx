import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import {ILayoutWiki} from "./types";
import Head from "next/head";
import HeaderWiki from "../../header/HeaderWiki/HeaderOne";
import WikiMenu from "../../menu/wiki/WikiMenu";
import OnThisPage from "../../widgets/onThisPage";

const LayoutWiki: NextPage<ILayoutWiki> = ({children, title, description,hideHeader,menuElements}) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const openMobileMenu = ()=>setShowMobileMenu(true);
    const closeMobileMenu = ()=>setShowMobileMenu(false);
    const [fixedMenu, setFixedMenu] = useState(false);

    const stickNavbar = () => {
        if (window !== undefined) {
            if(!menuElements.length)
                return false;

            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight < 200
                ? setFixedMenu(false)
                : setFixedMenu(true);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => window.removeEventListener("scroll", stickNavbar);
    }, []);

    return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className={"h-full"}>
            {!hideHeader&&<HeaderWiki openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu}/>}
            <div className={"h-full flex flex-row"}>
                <WikiMenu showMobileMenu={showMobileMenu} />
                <div className={"c:w-full ml-[330px] h-full " +
                    "mt-[70px] max-[1200px]:ml-[20%] max-[800px]:ml-0"}>
                    <OnThisPage
                        menuElements={menuElements}
                        fixedMenu={fixedMenu}
                    />
                    <div className={`w-[calc(100% - 400px)] py-[50px] mr-[200px] ml-[200px]
                    ${fixedMenu?'max-[900px]:mx-[100px] max-[1400px]:min-[900px]:ml-[100px] max-[1400px]:min-[900px]:w-[calc(100% - 300px)]':
                        'max-[1400px]:mx-[150px] max-[900px]:mx-[100px]'}
                     max-[800px]:w-full max-[800px]:px-[10px] max-[800px]:mx-0`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default LayoutWiki;
