import React, {useState, useEffect, useMemo} from "react";
import cn from "classnames";
import logoImage from "../../assets/icons/home/logo/logo.svg";
import $ from "jquery";
import SocialLinks from "./components/SocialLinks";
import { handleClickScroll } from "../../common/helpers";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
import Link from 'next/link'
import Image from "next/image";
import {NextPage} from "next";

const HeaderOne: NextPage = () => {
  // active link switching
  const pathname = usePathname();
  const { asPath } = useRouter();
  const hash = useMemo(()=>asPath.split('#')[1],[asPath]);

  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length&&!$(".mobile-menu .menu-box .menu-outer").html()) {
      let mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
    /*setTimeout(()=>{
      if(hash){
        handleClickScroll(hash.replace("#",""))
      }
      else{
        window.scrollTo(0, 0);
      }
    }, 1000)*/
  }, [])


  const isActiveLink = (id:string) => {
    return id === hash ? "active" : "";
  };

  const navigateHomePageIfNotNavigated = (hash: string, functIfOnHomePage: Function) =>{
    if(pathname!=="/"&&pathname!==""){
      window.location.href = "/"+hash;
    }else{
      functIfOnHomePage()
    }
  }

  return (
    <header id="fheader">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row min-h-[40px]">
            <div className="col-12">
              <div className={"mobile-nav-toggler max-[800px]:bg-[#083b4c]"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo ml-[100px] max-[800px]:ml-[20px] max-[800px]:mt-[10px]">
                    <Link href={"/"}>
                      <Image src={logoImage} alt="Splendor Logo" width={170} />
                    </Link>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li className={cn(pathname === "/" && "active")}>
                        <Link href="/">{"Home"}</Link>
                      </li>
                      <li
                          className={cn(
                              (pathname === "/spl-spg" || pathname === "/technology") && "active",
                              " menu-item-has-children"
                          )}
                      >
                        <Link
                            className="section-link"
                            href={"/"}
                        >
                          DISCOVER SPLENDOR
                        </Link>
                        <ul className={cn("sub-menu")}>
                          <li>
                            <Link href="https://splendor-network.gitbook.io/">DOCUMENTATIONS</Link>
                          </li>
                          <li>
                            <Link href="https://splendor-network.gitbook.io/splendor-protocol/splendor-basics/main-concepts/tokens">OUR TOKEN</Link>
                          </li>
                          <li className={isActiveLink("#getOneOfTheFollowingWallets" && "active")}>
                            <Link
                                href="#getOneOfTheFollowingWallets"
                                className={"sections-link"}
                                onClick={() =>
                                    navigateHomePageIfNotNavigated(
                                        "#getOneOfTheFollowingWallets",
                                        ()=>handleClickScroll("getOneOfTheFollowingWallets")
                                    )
                                }
                            >
                              WALLET
                            </Link>
                          </li>
                          <li className={cn(pathname === "/explore-ecosystem" && "active")}>
                            <Link href="/explore-ecosystem">Explore Our Ecosystem</Link>
                          </li>
                        </ul>
                      </li>
                      <li className={isActiveLink("#ecosystem" && "active")}>
                        <Link
                            href="#ecosystem"
                            className={"sections-link"}
                            onClick={() => navigateHomePageIfNotNavigated("#ecosystem", ()=>handleClickScroll("ecosystem"))}>
                          Ecosystem
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action ", "d-none d-md-block")}>
                    <ul>
                      <div className={"header-btn"}>
                        <Link
                            href="/dashboard"
                            className={"btn"}
                        >
                          DASHBOARD
                        </Link>
                      </div>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link href="/">
                      <Image src={logoImage} alt="BigTech Logo" title="" width={170} />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in header-->  */}
                  </div>
                  <SocialLinks />
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
