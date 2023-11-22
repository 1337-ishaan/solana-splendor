import React from "react";
import {NextPage} from "next";
import {ILayoutWiki} from "./types";
import Head from "next/head";
import HeaderWiki from "../../header/HeaderWiki/HeaderOne";

const LayoutWiki: NextPage<ILayoutWiki> = ({children, title, description,hideHeader,openMobileMenu,closeMobileMenu}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className={"h-full"}>
            {!hideHeader&&<HeaderWiki openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu}/>}

            {children}
        </div>
    </>
  );
};

export default LayoutWiki;
