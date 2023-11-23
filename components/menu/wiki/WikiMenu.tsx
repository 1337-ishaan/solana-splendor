import React, {useMemo} from "react";
import {IMenuWikiElement, IMenuWikiSubItem, IWikiMenu} from "./types";
import WikiMenuButton from "../../buttons/menu/WikiMenuButton/MenuButton";
import {useRouter} from "next/router";
import {useIsMounted} from "../../../hooks/useIsMounted/useIsMounted";
import {NextPage} from "next";

const WikiMenu: NextPage<IWikiMenu> = ({showMobileMenu}) => {
    const { asPath } = useRouter();
    const isMounted = useIsMounted();
    const menuItems:IMenuWikiElement[] = useMemo(()=>{
        if(!isMounted)
            return [];

        const patchBeforeSeparator = asPath.split('#')[0];
        const defaultMenuArr:IMenuWikiElement[] = [
            {
                label: "Splendor 101",
                elements: [
                    {
                        id: 1,
                        name: "Q&A",
                        link: "/wiki/qa",
                    },
                    {
                        id: 2,
                        name: "What is SDR?",
                        link: "/wiki/unveiling",
                    },
                    {
                        id: 3,
                        name: "Security",
                        link: "/wiki/security",
                    },
                    {
                        id: 4,
                        name: "Splendor Blokchain Tokens",
                        link: "/wiki/transactions",
                    },
                    {
                        id: 5,
                        name: "SDR Interest Payment Mechanism",
                        link: "/wiki/sdr"
                    }
                ]
            },
        ]

        const isOpenedElement = (elements:IMenuWikiSubItem[]) => !!elements.find(elem => elem.link === patchBeforeSeparator)

        return defaultMenuArr.map(element=>({
                label:element.label,
                elements:
                    element.elements
                        .map(({elements,...menu})=>(
                            {
                                selected:patchBeforeSeparator===menu.link,
                                isOpen: elements&&isOpenedElement(elements),
                                elements: elements?.map(subMenu=>{
                                    return ({
                                        selected:patchBeforeSeparator===subMenu.link,
                                        ...subMenu
                                    })
                                }),
                                ...menu
                            }
                        ))
            }
        ))
    }, [asPath,  isMounted])

    return(
        <div className={"flex flex-col justify-between bg-white mt-[70px] " +
            `fixed h-full w-[330px] z-[5000] drop-shadow-2xl max-[1200px]:min-[801px]:w-[20%] max-[800px]:${showMobileMenu?"w-[330px]":"hidden"}`}>
            <div className={"flex flex-col mt-[30px] mx-[25px] max-[1200px]:mx-[5px]"}>
                {
                    menuItems.map(
                        (menu,id) => (
                            <div key={id} className={"mt-[20px]"}>
                                <p className={"px-[20px] text-black text-[15px] mb-[10px]"}>{menu.label}</p>
                                {
                                    menu.elements.map(item => <WikiMenuButton {...item} key={item.id} />)
                                }
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default WikiMenu;
