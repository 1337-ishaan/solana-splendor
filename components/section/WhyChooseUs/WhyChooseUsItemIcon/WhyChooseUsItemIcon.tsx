import React from "react";
import Link from 'next/link';
import Image from "next/image";
import {NextPage} from "next";
import {IWhyChooseUsItemIcon} from "./types";

const WhyChooseUsItemIcon: NextPage<IWhyChooseUsItemIcon> = ({src, link, title}) => (
    <div className={"min-w-[400px] w-[400px] p-[20px] flex items-center justify-center max-[800px]:min-w-auto cursor-pointer"}>
        <Link href={link}>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"h-[100px] flex flex-col justify-center"}>
                    <Image className={"pb-[10px]"} src={src} height={100} alt={"whyChooseUsItem"}/>
                </div>
                <h5 className={"text-[#073B4C] text-center"}>
                    {title}
                </h5>
            </div>
        </Link>
    </div>
)

export default WhyChooseUsItemIcon
