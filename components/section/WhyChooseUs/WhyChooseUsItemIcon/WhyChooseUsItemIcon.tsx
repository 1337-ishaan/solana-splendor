import React from "react";
import Link from 'next/link';
import classes from "./styles.module.css"
import Image from "next/image";
import {NextPage} from "next";
import {IWhyChooseUsItemIcon} from "./types";

const WhyChooseUsItemIcon: NextPage<IWhyChooseUsItemIcon> = ({src, link, title}) => (
    <div className={classes.whyChooseUsItemIcon}>
        <Link href={link} className={classes.whyChooseUsItemIconLink}>
            <Image src={src} alt={"whyChooseUsItem"}/>
            <h5 className={"text-[#073B4C]"}>
                {title}
            </h5>
        </Link>
    </div>
)

export default WhyChooseUsItemIcon
