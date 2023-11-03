import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./components/Dropdown";
import logoImage from "../../assets/icons/home/logo/logo.svg";
import {useRouter} from "next/router";

export interface MenuItem {
  title: string;
  route?: string;
  hash?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "HOME",
    route: "/",
  },
  {
    title: "DISCOVER SPLENDOR",
    children: [
      {
        title: "DOCUMENTATIONS",
        route: "",
      },
      {
        title: "OUR TOKEN",
        route: "",
      },
      {
        title: "EXPLORE OUR ECOSYSTEM",
        route: "/explore-ecosystem",
      },
    ],
  },
  {
    title: "ECOSYSTEM",
    route: "#ecosystem",
    hash: "#ecosystem"
  }
];

export default function HeaderOne() {
  const [fixedMenu, setFixedMenu] = useState(false);
  const { asPath } = useRouter();
  const hash = useMemo(()=>asPath.split('#')[1],[asPath]);

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

  return (
      <header className={`flex gap-10 z-[99999] items-center drop-shadow-2xl bg-white py-[30px] px-2 w-full ${fixedMenu?'min-[800px]:fixed':''}`}>
        <div className={"ml-[50px]"}>
          <Link href="https://designly.biz" target="_blank">
            <a>
              <Image src={logoImage} width={200} height={20} alt="logo" />
            </a>
          </Link>
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
        {/*<div className={"absolute right-[100px] max-[800px]:hidden"}>
          <Link href={"/dashboard"}>
            <button
                className={"w-[150px] bg-black rounded-[10px] p-[10px] text-white"}
            >
              Dashboard
            </button>
          </Link>
        </div>*/}
      </header>
  );
}
