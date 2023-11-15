import React, { useState } from 'react'
import Link from 'next/link';
import {MenuItem} from "../../HeaderOne";

interface Props {
    item: MenuItem;
    closeMobileMenu():void;
}

export default function DropdownMobile(props: Props) {
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
            </div>
            <div className={`relative w-auto h-auto flex flex-col py-4 bg-white rounded-md ${transClass}`}>
                {
                    menuItems.map((item,key) =>
                        <div key={key} onClick={()=>{toggle();}}>
                            <Link
                                onClick={(event)=>{event.stopPropagation()}}
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
        </>
    )
}
