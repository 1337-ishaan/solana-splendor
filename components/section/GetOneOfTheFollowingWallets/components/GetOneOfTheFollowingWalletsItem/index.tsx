import React from "react";
import Link from 'next/link'
import classes from "./styles.module.css";
import Image from "next/image";
import {NextPage} from "next";
import {IGetOneOfTheFollowingWalletsItem} from "./types";

const GetOneOfTheFollowingWalletsItem: NextPage<IGetOneOfTheFollowingWalletsItem> = ({title,icon, link}) => {
    return (
        <Link href={link} className={classes.getOneOfTheFollowingWalletsItem}>
            <Image src={icon} alt={"GetOneOfTheFollowingWalletsItemImg"} />
            <p>{title}</p>
        </Link>
    );
};

export default GetOneOfTheFollowingWalletsItem;
