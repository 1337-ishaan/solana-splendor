import React, { useState } from 'react'
import Link from 'next/link';
import {MenuItem} from "../../HeaderOne";

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <button
                    className="text-black hover:text-blue-400"
                    onClick={toggle}
                >{item.title}</button>
                <div className={`absolute top-8 z-30 w-[250px] h-auto flex flex-col py-4 bg-white rounded-md ${transClass}`}>
                    {
                        menuItems.map((item,key) =>
                            <div key={key} onClick={toggle}>
                                <Link
                                    href={item?.route || ''}
                                >
                                    <p className="pl-[10px] text-black hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1">
                                        {item.title}
                                    </p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 "
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}
