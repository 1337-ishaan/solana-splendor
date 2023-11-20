import React, {useMemo} from "react";
import {IMenuWikiItem} from "./types";
import WikiMenuButton from "../../buttons/menu/WikiMenuButton/MenuButton";
import {useRouter} from "next/router";
import {useIsMounted} from "../../../hooks/useIsMounted/useIsMounted";

const WikiMenu = () => {
    const { asPath } = useRouter();
    const isMounted = useIsMounted();
    const menuItems:IMenuWikiItem[] = useMemo(()=>{
        if(!isMounted)
            return [];

        const patchBeforeSeparator = asPath.split('#')[0];
        const defaultMenuArr = [
            {
                id: 1,
                name: "Overview",
                link: "/wiki",
            },
            {
                id: 2,
                name: "Wallets and Keys",
                link: "/wiki/wallets_and_key",
            }
        ]

        return defaultMenuArr.map(menu=>({selected:patchBeforeSeparator===menu.link,...menu}))
    }, [asPath,  isMounted])

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
