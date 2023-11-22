import React, {useEffect, useState} from "react";
import Image from "next/image";
import logo from "../../../assets/icons/wiki/logo.svg";
import Link from "next/link";
import {NextPage} from "next";
import {IHeaderWiki} from "./types";
import Hamburger from "hamburger-react";

const HeaderWiki: NextPage<IHeaderWiki> = ({openMobileMenu, closeMobileMenu}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        if(isOpen){
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    }, [isOpen])

    return (
      <header className={`flex fixed justify-between h-[70px] z-[5000] items-center bg-[#181C1F] w-full`}>
          <Link href={"/"}>
              <div className={"ml-[50px] cursor-pointer"}>
                  <Image src={logo} width={110} height={50} alt="logo" />
              </div>
          </Link>
          <div className={"hidden max-[800px]:block"}>
              <Hamburger color={"white"} toggled={isOpen} toggle={setIsOpen} />
          </div>
      </header>
    );
}

export default HeaderWiki
