import React from "react";
import Link from 'next/link';
import logoImage from "../../assets/icons/home/logo/logo.svg";
import Image from "next/image";
import {NextPage} from "next";

const FooterOne: NextPage = () => {
  return (
    <footer>
      <div className="bg-[#0d1f34]">
        <div className="px-[15px] mx-[auto]">
          <div className="py-[55px] px-0">
            <div className={"flex flex-col"}>
              <div className="mx-[150px] max-[800px]:mx-0">
                <div
                    className="mb-[30px]"
                >
                  <div className={"flex justify-between"}>
                    <Link href="/" className="f-logo">
                      <a>
                        <Image src={logoImage} alt="BigTech Logo" />
                      </a>
                    </Link>

                   {/* <div className={"flex flex-row max-[800px]:hidden"}>
                      <a href="https://twitter.com/SplendorNetwork">

                      </a>
                      <a href="https://discord.gg/dfRsj6UG" className={"ml-[20px]"}>

                      </a>
                    </div>*/}
                  </div>
                  <div className="my-[20px] text-[#727885]">
                    <p>
                      Notice: This is an independent info site about SPLENDOR smart contracts, run by enthusiasts and evangelists. Nobody is in charge of RAILGUN itself.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"h-[1px] w-full bg-[#363b44]"} ></div>
              <div className="mt-[20px] flex flex-row mx-[70px] max-[800px]:flex-col max-[800px]:mx-0">
                <div className="w-[25%] flex items-center justify-center max-[800px]:w-full max-[800px]:justify-start">
                  <div
                      className="mb-[30px]"
                  >
                    <h4 className="text-white text-[25px]">USEFUL LINKS</h4>
                    <div>
                      <ul>
                        <li className="text-white leading-8">
                          <Link href="/">support@splendor.network</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link href="/">How it Works</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Create</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Explore</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Terms and conditions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-[16%] max-[800px]:w-full">
                  <div
                      className="mb-[30px]"
                  >
                    <h4 className="text-white leading-8 text-[25px]">Community</h4>
                    <div>
                      <ul>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Help Center</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Partners</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Suggestions</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link className="text-white leading-8" href="/">Blog</Link>
                        </li>
                        <li className="text-white leading-8">
                          <Link href="/">Newsletters</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-[33%] max-[800px]:w-full">
                  <div
                      className="mb-[30px] mr-[100px]"
                  >
                    <h4 className="text-white leading-8 text-[25px]">SUBSCRIBE NEWSLETTER</h4>
                    <div>
                      <ul>
                        <li className="text-white leading-8">
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
