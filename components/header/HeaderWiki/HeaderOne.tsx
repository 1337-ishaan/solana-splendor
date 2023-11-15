import React from "react";
import Image from "next/image";
import logo from "../../../assets/icons/wiki/logo.svg";

export default function HeaderWiki() {

  return (
      <header className={`flex fixed justify-between h-[70px] z-[5000] items-center bg-[#181C1F] w-full`}>
        <div className={"ml-[50px]"}>
          <Image src={logo} width={110} height={50} alt="logo" />
        </div>
      </header>
  );
}
