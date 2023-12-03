import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./components/Dropdown";
import {useRouter} from "next/router";
import Hamburger from 'hamburger-react'
import DropdownMobile from "./components/DropdownMobile";
import logo from "../../../assets/icons/common/logo.svg";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from "wagmi";
import {useIsMounted} from "../../../hooks/useIsMounted/useIsMounted";
import RegisterModal from "../../modals/RegisterModal";

export interface MenuItem {
  title: string;
  route?: string;
  hash?: string;
  children?: MenuItem[];
  download?: boolean;
}

const menuItems: MenuItem[] = [
  {
    title: "DOCUMENTATION",
    route: "https://toshinakamoto.gitbook.io/documentation/",
  },
  {
    title: "EXPLORER",
    route: "",
  },
  {
    title: "DEX",
    route: "",
  },
  {
    title: "WHITEPAPER",
    route: "https://drive.google.com/uc?id=13V3LXZbkZWyYecK6wTu7wlbM12Nqgfkc&export=download",
    download: true,
  },
  {
    title: "WALLET",
    route: "https://metamask.io/",
  },
  {
    title: "GITHUB",
    route: "https://github.com/ToshiNakamoto/Splendor-Blockchain",
  },
];

export default function HeaderOne() {
  const [fixedMenu, setFixedMenu] = useState(false);
  const { asPath } = useRouter();
  const hash = useMemo(()=>asPath.split('#')[1],[asPath]);
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();
  const isMounted = useIsMounted();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
          ? setFixedMenu(false)
          : setFixedMenu(true);
    }
  };

  /*useEffect(()=>{
    if(isConnected){
      //toast('Connected!', { hideProgressBar: true, autoClose: 2000, type: 'success' ,position:'top-center' })
    }
  }, [isConnected])*/

  const isActiveLink = (id:string) => {
    return id === asPath || id === `#${hash}` ? "active" : "";
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const redirectToDashboard = () => {
    window.location.href = '/dashboard';
  };

  const closeMobileMenu = ()=>setIsOpen(false)

  const openRegisterModal = () => setShowRegisterModal(true)
  const hideRegisterModal = () => setShowRegisterModal(false)

  return (
      <>
        {showRegisterModal&&<RegisterModal closeModal={hideRegisterModal}/>}
        <header className={`flex gap-[25px] max-[1280px]:gap-[20px] z-[9999] items-center drop-shadow-2xl bg-white py-[30px] px-2 w-full 
      max-[1280px]:px-0 max-[1180px]:fixed ${fixedMenu?'min-[1080px]:fixed':''} justify-between`}>
          <div className={"ml-[50px] mr-[150px] max-[1280px]:ml-[20px] max-[1180px]:hidden"}>
            <Image src={logo} width={20} height={20} alt="logo" />
          </div>
          <div className={"hidden max-[1180px]:block"}>
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
          <div className="flex gap-[25px] items-center justify-center text-black max-[1280px]:gap-[15px] max-[1180px]:hidden">
            {menuItems.map((item, key) => {
              return item.hasOwnProperty("children") ? (
                  <Dropdown key={key} item={item} />
              ) : (
                  <div key={key} className={`${isActiveLink(item.hash?item.hash:item.route||"")?"text-blue-500":"text-black"} hover:text-blue-500`}>
                    <Link href={item?.route || ""} {...item.download&&{download:true}} >
                      {item.title}
                    </Link>
                  </div>
              );
            })}
          </div>
          <div className={" max-[1280px]:right-[20px] max-[1180px]:left-0 max-[1180px]:right-auto flex flex-row items-center justify-center"}>
            {isMounted&&<div className={"mx-[10px]"}>
              <ConnectButton/>
            </div>}
            {isMounted && isConnected &&
                <button
                    onClick={redirectToDashboard}
                    className={` mr-[10px] bg-white text-black border-black border-[1px] rounded-[10px] p-[10px] ${
        window.innerWidth <= 768 ? 'dashboard-button-mobile' : 'w-[150px]'
      }`}
                >
                  Dashboard
                </button>
            }
          </div>

        </header>
      </>
  );
}
