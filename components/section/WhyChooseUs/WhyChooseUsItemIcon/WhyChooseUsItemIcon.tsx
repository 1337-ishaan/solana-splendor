import React from "react";
import Link from 'next/link';
import Image from "next/image";
import {NextPage} from "next";
import {IWhyChooseUsItemIcon} from "./types";

const WhyChooseUsItemIcon: NextPage<IWhyChooseUsItemIcon> = ({src, link, title}) => (
    <div className={"min-w-[33%] w-[20%] p-[20px] flex items-center justify-center max-[800px]:min-w-auto cursor-pointer"}>
        <Link href={link}>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"min-h-[100px] min-w-[100px] flex flex-col justify-center pb-[10px] " +
                    "max-[800px]:min-h-[60px] max-[800px]:min-w-[60px] max-[800px]:w-[60px] max-[800px]:h-[60px]"}>
                    <Image width={80} src={src} height={80} alt={"whyChooseUsItem"}/>
                </div>
                <h5 className={"text-[#073B4C] text-center"}>
                    {title}
                </h5>
            </div>
        </Link>
    </div>
)

export default WhyChooseUsItemIcon
