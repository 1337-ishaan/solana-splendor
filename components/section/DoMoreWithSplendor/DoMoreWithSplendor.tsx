import React from "react";
import {NextPage} from "next";
import Developers from "../../../assets/icons/home/developers.svg";
import DefiUsers from "../../../assets/icons/home/defiUsers.svg";
import DaoMembers from "../../../assets/icons/home/daoMembers.svg";
import Image from "next/image";

const DoMoreWithSplendor: NextPage = () => {
  return (
    <section id="about" className="about-area py-[100px] bg-white mt-[100px] flex flex-col items-center
    justify-center text-black text-center max-[800px]:mt-[50px]">
      <div className="container ">
          <h1 className={"text-[70px] font-normal text-center text-[#073B4C] mx-[200px] max-[800px]:text-[50px] max-[800px]:mx-0"}>
              <span className={"font-bold"}>Do more with </span>
              SPLENDOR
          </h1>
          <div className={"mt-[100px] flex flex-row justify-between mx-[200px] max-[800px]:mx-0 max-[800px]:flex-col max-[800px]:mt-0 " +
              "max-[800px]:justify-center max-[800px]:items-center"}>
              <div className={"flex flex-col w-[300px] h-[250px] p-[25px] shadow-2xl rounded-[10px] max-[800px]:mt-[50px]"}>
                <div className={"flex flex-row items-center"}>
                    <div className={"flex flex-row items-start h-[60px]"}>
                        <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                        <Image className={"ml-[10px]"} src={Developers} alt={"Wallet"} />
                    </div>
                    <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                        DEVELOPERS
                    </div>
                </div>
                <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                    Manage on-chain finances with
                    account level privacy.<br />
                    Use DeFi without leaking your data
                    or alpha.
                </div>
              </div>

              <div className={"flex flex-col w-[300px] p-[25px] shadow-2xl rounded-[10px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-center"}>
                      <div className={"flex flex-row items-start h-[60px]"}>
                          <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                          <Image className={"ml-[10px]"} src={DefiUsers} alt={"DefiUsers"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          DEFI USERS
                      </div>
                  </div>
                  <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                      Manage your finances with the
                      level of privacy you deserve. DeFi
                      with SPLENDOR ensures you can
                      use the apps you love without
                      leaking your valuable data.
                  </div>
              </div>

              <div className={"flex flex-col w-[300px] h-[250px] p-[25px] shadow-2xl rounded-[10px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-center"}>
                      <div className={"flex flex-row items-start h-[60px]"}>
                          <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                          <Image className={"ml-[10px]"} src={DaoMembers} alt={"DaoMembers"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          DAO MEMBERS
                      </div>
                  </div>
                  <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                      Stake tokens to take part in the
                      SPLENDOR and vote in<br />
                      governance as well as earn
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default DoMoreWithSplendor;
