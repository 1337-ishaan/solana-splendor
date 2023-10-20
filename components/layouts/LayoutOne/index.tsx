import React from "react";
import FooterOne from "../../footer/FooterOne";
import HeaderOne from "../../header/HeaderOne";
import cn from "classnames";
import {NextPage} from "next";
import {ILayoutOne} from "./types";
import Head from "next/head";

const LayoutOne: NextPage<ILayoutOne> = ({children, title, description,hideFooter}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className={cn("")}>
            {!hideFooter&&<HeaderOne/>}

            {children}

            {!hideFooter&&<FooterOne />}
        </div>
    </>
  );
};

export default LayoutOne;
