import React from "react";
import Link from 'next/link';
import classes from "./styles.module.css";
import Image from "next/image";
import {NextPage} from "next";
import {ISocialItem} from "./types";

const SocialItem: NextPage<ISocialItem> = ({src, link, alt, title}) => {
    return (
        <div className={classes.socialItem}>
            <div className={classes.chooseIconContainer}>
                <Image src={src} alt={alt} />
            </div>
            <div className={"socialItemContent"}>
                <h5 className="title">
                    <Link href={link}>{title}</Link>
                </h5>
            </div>
        </div>
    );
};

export default SocialItem;
