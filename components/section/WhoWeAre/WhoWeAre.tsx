import React from "react";
import {NextPage} from "next";
import VideoPlayer from "../../media/VideoPlayer";
import Image from "next/image";
import anonymousSvg from "../../../assets/icons/home/anonymous.svg";
import fastSvg from "../../../assets/icons/home/fast.svg";
import scalableSvg from "../../../assets/icons/home/scalable.svg";
import decentralizedSvg from "../../../assets/icons/home/decentralized.svg";
import logo from "../../../assets/icons/home/logo.svg";

const WhoWeAre: NextPage = () => {
  return (
    <section id="about" className="pt-[200px] flex flex-col items-center justify-center w-full">
      <div className="px-[15px] w-full">
        <div className="flex flex-col items-center max-[800px]:flex-col justify-center w-full">
          <div className={"flex flex-row"}>
            <Image src={logo} alt={'logo'} />
            <p className={"ml-[10px] text-black text-[70px] leading-[1.2] font-medium text-[#073B4C]"}>SPLENDOR</p>
          </div>
          <p className={"text-black text-[45px] leading-[1.2] font-[200] text-[#073B4C]"}>The evolved version of Bitcoin</p>

          <div className="mt-[150px] w-full">
            <VideoPlayer
                src={"https://drive.google.com/uc?id=1SQLSeacpJP6TJrT_k3WJIy_uQfHeeUeY&export=download"} />
          </div>
          <div className={"flex flex-row justify-center w-full mt-[150px] max-[800px]:flex-col max-[800px]:mt-0"}>
            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={anonymousSvg} alt={"anonymousSvg"} height={70} width={70}/>
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                ANONYMOUS
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor is a blockchain with anonymous and privacy system protected with Zero-Knowlege Proof, in transactions and in smart contracts
              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={fastSvg} alt={"fastSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                Fast
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Speed is a main quality of Splendor, allowing for faster transactions than the average L1 blockchain compatible with EVM.
              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={scalableSvg} alt={"scalableSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                SCALABLE
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor Network’s nodes are made to approve batches of transactions in miliseconds, quality to get many transaccions with low gas fees.</div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={decentralizedSvg} alt={"decentralizedSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                DECENTRALIZED
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor is easy and prone to decentralizing itself as users run a node to earn SDR, this means that to provide greater security, splendor incentivizes users to support the network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
