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
                        name: "Overview",
                        link: "/wiki",
                    },
                    {
                        id: 2,
                        name: "Unveiling SDR",
                        link: "/wiki/unveiling",
                    },
                    {
                        id: 3,
                        name: "Elevating Crypto Transactions",
                        link: "/wiki/transactions",
                    },
                    {
                        id: 4,
                        name: "Enhancing Security in the Splendor Blockchain Ecosystem",
                        link: "/wiki/security"
                    },
                    {
                        id: 5,
                        name: "The Significance of Repelent for Splendor Blockchain",
                        link: "/wiki/significance"
                    },
                    {
                        id: 5,
                        name: "SDR Interest Payment Mechanism",
                        link: "/wiki/sdr"
                    },
                    {
                        id: 6,
                        name: "QA",
                        link: "/wiki/qa"
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
            `fixed h-full w-[330px] z-[5000] drop-shadow-2xl  max-[1200px]:w-[20%] max-[800px]:${showMobileMenu?"w-[330px]":"hidden"}`}>
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
