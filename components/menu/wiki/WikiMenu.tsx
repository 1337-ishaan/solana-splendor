import React from "react";
import {IMenuWikiItem} from "./types";
import WikiMenuButton from "../../buttons/menu/WikiMenuButton/MenuButton";

const WikiMenu = () => {
    const menuItems:IMenuWikiItem[] = [
        {
            id: 1,
            name: "Overview",
            selected: false,
            link: "/overview",
        },
        {
            id: 2,
            name: "Wallets and Keys",
            selected: false,
            link: "/wallets_and_key",
        }
    ]

    return(
        <div className={"flex flex-col justify-between bg-white mt-[70px] " +
            "fixed h-full w-[270px] z-[5000] drop-shadow-2xl max-[800px]:hidden"}>
            <div className={"flex flex-col mt-[30px] mx-[25px]"}>
                <p className={"px-[25px] text-black text-[15px] mb-[10px]"}>SPLENDOR navigate</p>
                {
                    menuItems.map(item => <WikiMenuButton {...item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default WikiMenu;
