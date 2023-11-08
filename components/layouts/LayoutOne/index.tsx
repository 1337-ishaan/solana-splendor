import React from "react";
import FooterOne from "../../footer/FooterOne";
import HeaderOne from "../../header/HeaderOne";
import {NextPage} from "next";
import {ILayoutOne} from "./types";
import Head from "next/head";

const LayoutOne: NextPage<ILayoutOne> = ({children, title, description,hideFooter,hideHeader}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className={"h-full"}>
            {!hideHeader&&<HeaderOne/>}

            {children}

            {!hideFooter&&<FooterOne />}
        </div>
    </>
  );
};

export default LayoutOne;
