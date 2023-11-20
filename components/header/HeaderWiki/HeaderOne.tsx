import React from "react";
import Image from "next/image";
import logo from "../../../assets/icons/wiki/logo.svg";
import Link from "next/link";

export default function HeaderWiki() {

  return (
      <header className={`flex fixed justify-between h-[70px] z-[5000] items-center bg-[#181C1F] w-full`}>
          <Link href={"/"}>
              <div className={"ml-[50px] cursor-pointer"}>
                  <Image src={logo} width={110} height={50} alt="logo" />
              </div>
          </Link>
      </header>
  );
}
