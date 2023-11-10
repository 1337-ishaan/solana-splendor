import React from "react";
import {NextPage} from "next";
import decenterCloudSvg from "../../../assets/icons/home/decenterCloud.svg";
import vinegramsSvg from "../../../assets/icons/home/vinegrams.svg";
import quantumSvg from "../../../assets/icons/home/quantum.svg";
import eradicateSvg from "../../../assets/icons/home/eradicate.svg";
import scientificSvg from "../../../assets/icons/home/scientific.svg";
import increaseSvg from "../../../assets/icons/home/increase.svg";
import Image from "next/image";

const DoMoreWithSplendor: NextPage = () => {
  return (
    <section id="about" className="py-[100px] bg-white mt-[100px] flex flex-col items-center
    justify-center text-black text-center max-[800px]:mt-[50px]">
      <div className="px-[15px] ">
          <h1 className={"text-[70px] font-normal text-center text-[#073B4C] mx-[200px] max-[800px]:text-[50px] max-[800px]:mx-0"}>
              <span className={"font-bold"}>BRIAH </span>
              Supercomputer
          </h1>
          <div className={"mt-[50px] flex flex-wrap justify-between mx-[200px] max-[800px]:mx-0 max-[800px]:flex-col max-[800px]:mt-0 " +
              "max-[800px]:justify-center max-[800px]:items-center"}>
              <div className={"flex flex-col w-[300px] h-[250px] p-[25px] shadow-2xl rounded-[10px] mr-[25px] " +
                  "max-[800px]:mt-[50px]"}>
                <div className={"flex flex-row items-center"}>
                    <div className={"flex flex-row items-start h-[60px]"}>
                        <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                        <Image className={"ml-[10px]"} src={decenterCloudSvg} alt={"decenterCloudSvg"} />
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

              <div className={"flex flex-col w-[300px] p-[25px] shadow-2xl rounded-[10px] mr-[25px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-center"}>
                      <div className={"flex flex-row items-start h-[60px]"}>
                          <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                          <Image className={"ml-[10px]"} src={vinegramsSvg} alt={"vinegramsSvg"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          VINEGRAM
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
                          <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                          <Image className={"ml-[10px]"} src={quantumSvg} alt={"quantumSvg"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          QUANTUM
                          COMPUTING
                      </div>
                  </div>
                  <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                      Stake tokens to take part in the
                      SPLENDOR and vote in<br />
                      governance as well as earn <span className={"text-[#0057FF]"}>Active Governor Rewards.</span>
                  </div>
              </div>
          </div>

          <div className={"mt-[50px] flex flex-wrap justify-between mx-[200px] max-[800px]:mx-0 max-[800px]:flex-col max-[800px]:mt-0 " +
              "max-[800px]:justify-center max-[800px]:items-center"}>
              <div className={"flex flex-col w-[300px] h-[250px] p-[25px] shadow-2xl rounded-[10px] mr-[25px] " +
                  "max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-center"}>
                      <div className={"flex flex-row items-start h-[60px]"}>
                          <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                          <Image className={"ml-[10px]"} src={eradicateSvg} alt={"eradicateSvg"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          ERADICATE DISEASES
                      </div>
                  </div>
                  <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                      Manage on-chain finances with
                      account level privacy.
                      Use DeFi without leaking your data
                      or alpha.
                  </div>
              </div>

              <div className={"flex flex-col w-[300px] p-[25px] shadow-2xl rounded-[10px] mr-[25px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-center"}>
                      <div className={"flex flex-row items-start h-[60px]"}>
                          <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                          <Image className={"ml-[10px]"} src={scientificSvg} alt={"scientificSvg"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          SCIENTIFIC RESEARCH
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
                          <div className={"w-[6px] h-[60px] bg-[#447CD5] mr-[5px]"}></div>
                          <Image className={"ml-[10px]"} src={increaseSvg} alt={"increaseSvg"} />
                      </div>
                      <div className={"text-center text-[18px] text-[#073B4C] flex-1"}>
                          INCREASE CYBERSECURITY
                      </div>
                  </div>
                  <div className={"flex flex-col w-full mt-[35px] text-left text-[16px] text-[#073B4C]"}>
                      Stake tokens to take part in the
                      SPLENDOR and vote in<br />
                      governance as well as earn <span className={"text-[#0057FF]"}>Active Governor Rewards.</span>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default DoMoreWithSplendor;
