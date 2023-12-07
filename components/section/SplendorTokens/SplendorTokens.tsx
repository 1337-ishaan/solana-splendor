import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import splendorTokenSvg from "../../../assets/icons/home/splendorToken.svg";
import stablecoinSvg from "../../../assets/icons/home/stablecoin.svg";
import SdrVideoPlayer from "../../media/VideoPlayer/sdrVideo";

const SplendorTokens: NextPage = () => {
  return (
    <section id="about" className="pt-[100px] flex flex-col items-center
    justify-center text-black text-center bg-gradient-to-b from-[#f7f8fc] to-white">
      <div className="px-[15px] ">
          <h1 className={"text-[50px] font-normal text-center text-[#073B4C] mx-[200px] max-[800px]:text-[30px] max-[800px]:mx-0"}>
              <span className={"font-bold"}>Splendor Drawing Rights (SDR) </span>
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
          </div>
          <div className="mt-[3rem]">
            <SdrVideoPlayer src={"https://drive.google.com/uc?id=1i4cvL6dWYI3N-JApIqgOH5b9GYTGN0pc&export=download"} />
          </div>

      </div>
    </section>
  );
};

export default SplendorTokens;
