import React from "react";
import {NextPage} from "next";
import VideoPlayer from "../../media/VideoPlayer";

const WhoWeAre: NextPage = () => {
  return (
    <section id="about" className="pt-[200px] flex flex-col items-center justify-center">
      <div className="px-[15px]">
        <div className="flex flex-col items-center max-[800px]:flex-col">
          <div className="mb-[30px] w-[40%] max-[800px]:w-full">
            <p className={"text-black text-[70px] leading-[1.2] font-medium text-[#073B4C] max-[800px]:text-center"}>SPLENDOR</p>
            <p className={"text-black text-[45px] leading-[1.2] font-medium text-[#073B4C] max-[800px]:text-center"}>a better version of bitcoin</p>
          </div>
          <div className="mt-[150px]">
            <VideoPlayer
                src={"api/getMedia/splendor_new_corrections_vid.mp4"} />
          </div>
          <div className={"flex flex-row justify-center w-full mt-[50px] max-[800px]:flex-col max-[800px]:mt-0"}>
            <div className={"flex flex-col min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"h-[70px] text-[22px] text-[#073B4C] max-[800px]:h-auto max-[800px]:text-center"}>
                ANONYMOUS CONTRACT
              </div>
              <div className={"h-[160px] pt-[10px] text-[#073B4C] max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                SPLENDOR is a smart contract
                system that enables
                Zero-Knowledge Privacy for any
                on-chain dApp.
              </div>
              <button
                  className={"w-[250px] bg-black rounded-[10px] p-[10px] text-white"}
              >
                Discover Integrations
              </button>
            </div>

            <div className={"flex flex-col min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"h-[70px] text-[22px] text-[#073B4C] max-[800px]:h-auto max-[800px]:text-center"}>
                FULLY DECENTRALIZED
              </div>
              <div className={"h-[160px] pt-[10px] text-[#073B4C] max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                SPLENDOR is a system of smart contracts supported by fully-decentralized SPLENDOR DAO governance.
              </div>
              <button
                  className={"w-[250px] bg-black rounded-[10px] p-[10px] text-white"}
              >
                Discover Integrations
              </button>
            </div>

            <div className={"flex flex-col min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"h-[70px] text-[22px] text-[#073B4C] max-[800px]:h-auto max-[800px]:text-center"}>
                EVM COMPATIBLE
              </div>
              <div className={"h-[160px] pt-[10px] text-[#073B4C] max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                EVM compatibility facilitates interoperability between different blockchain networks. This means assets and data can be transferred and shared seamlessly between blockchains
              </div>
              <button
                  className={"w-[250px] bg-black rounded-[10px] p-[10px] text-white"}
              >
                Discover Integrations
              </button>
            </div>

            <div className={"flex flex-col min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"h-[70px] text-[22px] text-[#073B4C] max-[800px]:h-auto max-[800px]:text-center"}>
                BETTER THAN BITCOIN
              </div>
              <div className={"h-[160px] pt-[10px] text-[#073B4C] max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                SPLENDOR is an on-chain web3 application created by contributors to the SPLENDOR Project, project for peer-to-peer privacy in DeFi.
              </div>
              <button
                  className={"w-[250px] bg-black rounded-[10px] p-[10px] text-white"}
              >
                Discover Integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
