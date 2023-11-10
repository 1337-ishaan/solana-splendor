import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import splendorTokenSvg from "../../../assets/icons/home/splendorToken.svg";
import stablecoinSvg from "../../../assets/icons/home/stablecoin.svg";

const SplendorTokens: NextPage = () => {
  return (
    <section id="about" className="py-[100px] flex flex-col items-center
    justify-center text-black text-center bg-[#f7f8fc]">
      <div className="px-[15px] ">
          <h1 className={"text-[70px] font-normal text-center text-[#073B4C] mx-[200px] max-[800px]:text-[50px] max-[800px]:mx-0"}>
              <span className={"font-bold"}>SPLENDOR </span>
              Tokens
          </h1>

          <div className={"flex flex-col justify-center mt-[50px] mx-[15%] max-[800px]:flex-col max-[800px]:mt-0 max-[800px]:mx-0"}>
              <div className={"flex flex-wrap"}>
                  <div className={"flex flex-1 flex-col justify-center min-w-[300px] mr-[20px] text-black " +
                      "max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px] items-center"}>
                      <div className={"w-[70px] h-[70px] mb-[20px]"}>
                          <Image src={splendorTokenSvg} alt={"splendorTokenSvg"} height={70} width={70}/>
                      </div>
                      <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                          SDR which stands for Splendor Drawing Rights is the first decentralized stablecoin backed by Splendor. It means that you can draw Splendor SPL against SDR at any time based on the exchange rate of SPL and SDR at the time.
                      </div>
                  </div>

                  <div className={"flex flex-1 flex-col justify-center min-w-[300px] mr-[20px] text-black " +
                      "max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px] items-center"}>
                      <div className={"w-[70px] h-[70px] mb-[20px]"}>
                          <Image src={stablecoinSvg} alt={"stablecoinSvg"} />
                      </div>
                      <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                          What is a Decentralized Stablecoin: This is a type of cryptocurrency that aims to maintain a stable value. Unlike Bitcoin, which can have volatile prices, this stablecoin is designed to have a consistent value.                  </div>
                  </div>
              </div>

              <div className={"flex flex-wrap"}>
                  <div className={"flex flex-1 flex-col justify-center min-w-[300px] mr-[20px] text-black " +
                      "max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px] items-center"}>
                      <div className={"w-[70px] h-[70px] mb-[20px]"}>
                          <Image src={splendorTokenSvg} alt={"splendorTokenSvg"} height={70} width={70}/>
                      </div>
                      <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                          Backed by Splendor: To ensure its stability SDR it is backed by SPL. This means that for every SDR in circulation, there is an equivalent amount of SPL held in a decentralized pool reserve. So, if there are 100 SDR coins in circulation, there would be enough SPL reserve pool to back them.                      </div>
                  </div>

                  <div className={"flex flex-1 flex-col justify-center min-w-[300px] mr-[20px] text-black " +
                      "max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px] items-center"}>
                      <div className={"w-[70px] h-[70px] mb-[20px]"}>
                          <Image src={stablecoinSvg} alt={"stablecoinSvg"} />
                      </div>
                      <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                          SDR is Trading at Par with the IMF Special Drawing Rights which is an international reserve asset created by the International Monetary Fund (IMF) that represents a basket of major global currencies such as USD, EUR, JPY, CHN, and GBP. The value of SDR is derived by the basked of 5 major currencies mentioned above and always backed by enough SPL in the reserve pool.
                      </div>
                  </div>
              </div>

              <div className={"h-[160px] mt-[50px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                  Minting Process: To create new SDR coins, someone needs to lock up a certain amount of SPL as collateral. This means they temporarily set aside a portion of their SPL holdings to generate SDR. The system calculates the right amount of SPL to lock up as well as the right amount of SDR to receive.               </div>

          </div>

      </div>
    </section>
  );
};

export default SplendorTokens;