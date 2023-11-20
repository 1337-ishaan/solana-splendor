import Image from "next/image";
import React from "react";
import {NextPage} from "next";
import {IDualItem} from "./types";

const DualItem:NextPage<IDualItem> = (props) =>
    <div className={"flex flex-col  mt-[20px]"}>
        <Image height={70} width={70} src={props.img} alt={"dualItemImg"} />
        <p className={"mt-[10px] max-[800px]:text-center"}>{props.text}</p>
    </div>

export default DualItem
