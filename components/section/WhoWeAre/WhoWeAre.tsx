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
          <div className={"flex flex-row max-[800px]:items-center"}>
            <Image src={logo} alt={'logo'} />
            <p className={"ml-[10px] text-black text-[70px] leading-[1.2] font-medium text-[#073B4C] " +
                "max-[800px]:text-[50px] max-[800px]:text-center"}>SPLENDOR</p>
          </div>
          <p className={"text-black text-[45px] leading-[1.2] font-[200] text-[#073B4C] " +
              "max-[800px]:text-[30px] max-[800px]:text-center max-[800px]:mt-[15px]"}>The evolved version of Bitcoin</p>

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
              Splendor incorporates default built-in zero-knowledge proofs, enhancing the privacy and security of transactions on its blockchain. This feature ensures that sensitive information remains confidential while still allowing for the validation and verification of transactions, aligning with the principles of privacy-centric blockchain design.
              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={fastSvg} alt={"fastSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                FAST
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                EVM compatibility facilitates interoperability between different blockchain networks. This means assets and data can be transferred and shared seamlessly between blockchains              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={scalableSvg} alt={"scalableSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                SCALABLE
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor Network’s peer-reviewed consensus protocol achieved up to 1,000 tx/s in a decentralized test setting with a potential to reach nearly 1,666 tx/s, processing 5,000 transactions per block.              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={decentralizedSvg} alt={"decentralizedSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                DECENTRALIZED
              </div>
              <div className={"h-[160px] pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                SPLENDOR is a system of smart contracts supported by fully-decentralized SPLENDOR DAO governance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
