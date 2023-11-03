import logo from "../../../assets/icons/common/splendor_core_logo.svg";
import logoSmall from "../../../assets/icons/common/splendor_logo_only.svg";
import splitLine from "../../../assets/icons/dashboard/splitLine.svg";
import Image from "next/image";
import React, {useMemo} from "react";
import homeIcon from "../../../assets/icons/dashboard/home.svg";
import tokenomicsIcon from "../../../assets/icons/tokenomics/tokenomics.svg";
import MenuButton from "../../buttons/menu/MenuButton";
import {IMenuItem} from "./types";
import backgroundBottomMenuWidget from "../../../assets/icons/dashboard/backgroundBottomMenuWidget.svg";
import {useRouter} from "next/router";

const Menu = () => {
    const {pathname} = useRouter();
    const menuDefaultItems:IMenuItem[] = [
        {
            id: 1,
            name: "Dashboard",
            icon: homeIcon,
            selected: false,
            link: "/dashboard",
        },
        {
            id: 2,
            name: "Tokenomics",
            icon: tokenomicsIcon,
            selected: false,
            link: "/tokenomics",
        }
    ]
    const additionsButtons:IMenuItem[] = []
    const menuItems = useMemo(()=>[...menuDefaultItems, ...additionsButtons].map(
        (menu)=>menu.link!==pathname?menu:{...menu,selected: true}
    ), []);

    return(
        <div className={"flex flex-col justify-between bg-gradient-to-r from-[#050b25] max-w-[264px] " +
            "to-[#0d1022] rounded-[15px] m-[10px] fixed h-[98%] w-[300px] z-[5000] " +
            "max-[1100px]:w-[200px] max-[800px]:w-[100px]"}>
            <div className={"flex flex-col"}>
                <div className={"flex flex-col items-center"}>
                    <div className={"mt-[50px] block max-[800px]:hidden"}>
                        <Image  src={logo} alt={"logo"} />
                    </div>
                    <div className={"mt-[50px] hidden max-[800px]:block"}>
                        <Image src={logoSmall} alt={"logoSmall"} />
                    </div>
                    <div className={"mt-[20px]"}>
                        <Image src={splitLine} alt={"splitLine"} />
                    </div>
                </div>
                <div className={"flex flex-col mt-[20px]"}>
                    {
                        menuItems.slice(0, 2).map(item => <MenuButton {...item} key={item.id} />)
                    }
                </div>

                {/*<div
                    className={
                        `flex flex-row items-start px-[20px] py-[10px] max-[800px]:px-2`
                    }
                >
                    <p className={"text-left text-[15px] text-white ml-5 max-[800px]:ml-0 max-[800px]:text-center"}>ACCOUNT PAGES</p>
                </div>
                {
                    menuItems.slice(2, 4).map(item => <MenuButton {...item} key={item.id} />)
                }*/}
            </div>
            <div className={"flex items-center justify-center mb-[20px]"}>
                <Image src={backgroundBottomMenuWidget} alt={"backgroundBottomMenuWidget"} />
            </div>
        </div>
    )
}

export default Menu;
