import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./components/Dropdown";
import {useRouter} from "next/router";
import Hamburger from 'hamburger-react'
import DropdownMobile from "./components/DropdownMobile";
import logo from "../../assets/icons/home/logo.svg";

export interface MenuItem {
  title: string;
  route?: string;
  hash?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "DOCUMENTATIONS",
    route: "https://splendor-network.gitbook.io/",
  },
  {
    title: "ECOSYSTEM",
    route: "/explore-ecosystem",
  },
  {
    title: "TOKENS",
    route: "https://splendor-network.gitbook.io/splendor-protocol/splendor-basics/main-concepts/tokens",
  },
  {
    title: "COMMUNITY",
    route: "/#",
  },
  {
    title: "PROJECT UPDATES",
    route: "/#",
  },
  {
    title: "WHITEPAPER",
    route: "/#",
  },
  {
    title: "RUN A NODE",
    route: "/#",
  }
];

export default function HeaderOne() {
  const [fixedMenu, setFixedMenu] = useState(false);
  const { asPath } = useRouter();
  const hash = useMemo(()=>asPath.split('#')[1],[asPath]);
  const [isOpen, setIsOpen] = useState(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
          ? setFixedMenu(false)
          : setFixedMenu(true);
    }
  };

  const isActiveLink = (id:string) => {
    return id === asPath || id === `#${hash}` ? "active" : "";
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const closeMobileMenu = ()=>setIsOpen(false)

  return (
      <header className={`flex gap-10 z-[99999] items-center drop-shadow-2xl bg-white py-[30px] px-2 w-full 
      max-[800px]:fixed ${fixedMenu?'min-[800px]:fixed':''} max-[800px]:justify-end`}>
        <div className={"ml-[50px] max-[800px]:hidden"}>
          <a>
            <Image src={logo} width={200} height={20} alt="logo" />
          </a>
        </div>
        <div className={"hidden max-[800px]:block"}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          {isOpen&&
              <div onClick={closeMobileMenu} className={`h-[11000px] fixed z-[99999] top-0 left-0 w-full`}>
                <div onClick={(event)=>{event.stopPropagation();}}
                     className={"relative h-full drop-shadow-2xl bg-white w-[75%] pt-[100px] px-[20px]"}>
                  {menuItems.map((item, key) => {
                    return item.hasOwnProperty("children") ? (
                        <DropdownMobile closeMobileMenu={closeMobileMenu} key={key} item={item} />
                    ) : (
                        <div key={key} className={`${isActiveLink(item.hash?item.hash:item.route||"")?"text-blue-500":"text-black"} 
                        hover:text-blue-500 py-[10px]`}  onClick={closeMobileMenu}>
                          <Link href={item?.route || ""}>
                            {item.title}
                          </Link>
                        </div>
                    );
                  })}
                </div>
              </div>
          }
        </div>
        <div className="flex gap-8 items-center text-black max-[800px]:hidden">
          {menuItems.map((item, key) => {
            return item.hasOwnProperty("children") ? (
                <Dropdown key={key} item={item} />
            ) : (
                <div key={key} className={`${isActiveLink(item.hash?item.hash:item.route||"")?"text-blue-500":"text-black"} hover:text-blue-500`}>
                  <Link href={item?.route || ""}>
                    {item.title}
                  </Link>
                </div>
            );
          })}
        </div>
        <div className={"absolute right-[100px] max-[800px]:hidden"}>
          <Link href={"/dashboard"}>
            <button
                className={"w-[150px] bg-white text-black border-black border-[1px] rounded-[10px] p-[10px]"}
            >
              Dashboard
            </button>
          </Link>
        </div>
      </header>
  );
}
