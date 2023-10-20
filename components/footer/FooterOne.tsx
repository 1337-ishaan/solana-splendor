import React from "react";
import Link from 'next/link';
import logoImage from "../../assets/icons/home/logo/logo.svg";
import { scrollToTop } from "../../common/helpers";
import Image from "next/image";
import {NextPage} from "next";

const FooterOne: NextPage = () => {
  return (
    <footer>
      <div className="footer-area bg-[#262B35]">
        <div className="container mx-[auto]">
          <div className="footer-scroll-wrap mt-[20px]">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className={"flex flex-col"}>
              <div className="mx-[150px] max-[800px]:mx-0">
                <div
                    className="footer-widget wow fadeInUp"
                    data-wow-delay=".2s"
                >
                  <div className={"flex justify-between"}>
                    <Link href="/" className="f-logo">
                      <Image src={logoImage} alt="BigTech Logo" />
                    </Link>

                    <div className={"flex flex-row max-[800px]:hidden"}>
                      <a href="https://twitter.com/SplendorNetwork">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://discord.gg/dfRsj6UG" className={"ml-[20px]"}>
                        <i className="fab fa-discord"></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer-content max-[800px]:my-[20px]">
                    <p>
                      Notice: This is an independent info site about SPLENDOR smart contracts, run by enthusiasts and evangelists. Nobody is in charge of RAILGUN itself.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"h-[1px] w-full bg-[#363b44]"} ></div>
              <div className="flex flex-row mx-[70px] max-[800px]:flex-col max-[800px]:mx-0">
                <div className="w-[25%] flex items-center justify-center max-[800px]:w-full max-[800px]:justify-start">
                  <div
                      className="footer-widget  wow fadeInUp"
                      data-wow-delay=".4s"
                  >
                    <h4 className="fw-title text-white">USEFUL LINKS</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">support@splendor.network</Link>
                        </li>
                        <li>
                          <Link href="/">How it Works</Link>
                        </li>
                        <li>
                          <Link href="/">Create</Link>
                        </li>
                        <li>
                          <Link href="/">Explore</Link>
                        </li>
                        <li>
                          <Link href="/">Terms and conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-[16%] max-[800px]:w-full">
                  <div
                      className="footer-widget wow fadeInUp"
                      data-wow-delay=".6s"
                  >
                    <h4 className="fw-title text-white">Community</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="/">Help Center</Link>
                        </li>
                        <li>
                          <Link href="/">Partners</Link>
                        </li>
                        <li>
                          <Link href="/">Suggestions</Link>
                        </li>
                        <li>
                          <Link href="/">Blog</Link>
                        </li>
                        <li>
                          <Link href="/">Newsletters</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-[33%] max-[800px]:w-full">
                  <div
                      className="footer-widget wow fadeInUp mr-[100px]"
                      data-wow-delay=".8s"
                  >
                    <h4 className="fw-title text-white">SUBSCRIBE NEWSLETTER</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          @SPLENDOR
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
