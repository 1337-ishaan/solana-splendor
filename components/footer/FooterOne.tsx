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
                  <div className={"flex justify-between max-[800px]:justify-center"}>
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
                  <div className="my-[20px] text-[#727885] max-[800px]:text-center">
                    <p>
                      Notice: This is an independent info site about SPLENDOR smart contracts, run by enthusiasts and evangelists. Nobody is in charge of RAILGUN itself.
                    </p>
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
