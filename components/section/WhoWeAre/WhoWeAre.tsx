import React from "react";
import {NextPage} from "next";
import VideoPlayer from "../../media/VideoPlayer";
import Image from "next/image";
import anonymousSvg from "../../../assets/icons/home/anonymous.svg";
import fastSvg from "../../../assets/icons/home/fast.svg";
import scalableSvg from "../../../assets/icons/home/scalable.svg";
import decentralizedSvg from "../../../assets/icons/home/decentralized.svg";
import logo from "../../../assets/icons/common/logo-blue.svg";

const WhoWeAre: NextPage = () => {
  return (
    <section id="about" className="pt-[200px] flex flex-col items-center justify-center w-full">
      <div className="px-[15px] w-full">
        <div className="flex flex-col items-center max-[800px]:flex-col justify-center w-full">
          <div className={"flex flex-row max-[800px]:items-center"}>

              <Image src={logo} alt={'logo'} height="50px" />

            <p className={"ml-[10px] text-black text-[70px] leading-[1.2] font-medium text-[#073B4C] " +
                "max-[800px]:text-[50px] max-[800px]:text-center"}>SPLENDOR</p>
          </div>
          <p className={"text-black text-[45px] leading-[1.2] font-[200] text-[#073B4C] " +
              "max-[800px]:text-[30px] max-[800px]:text-center max-[800px]:mt-[15px]"}>The evolved version of Bitcoin</p>

          <div className="mt-[120px] w-full">
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
              <div className={"pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
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
              <div className={"pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
              In a landscape where every second counts, Splendor addresses the pressing need for swift and reliable transaction confirmation. The blockchain's remarkable capability to produce a block every second ensures that users experience minimal latency, fostering a seamless and dynamic environment for decentralized applications (DApps) and transactions.
              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={scalableSvg} alt={"scalableSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                SCALABLE
              </div>
              <div className={"pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor achieves scalability through Substrate's modular design, enabling efficient state management, parallel processing, and support for various consensus mechanisms. This adaptable architecture, combined with features like cross-chain interoperability and decentralized governance, positions Splendor as a fast and scalable blockchain solution, capable of accommodating diverse use cases and growing demands.
              </div>
            </div>

            <div className={"flex flex-col justify-start min-w-[300px] w-[300px] mr-[20px] text-black max-[800px]:w-full max-[800px]:items-center max-[800px]:mt-[50px]"}>
              <div className={"w-[70px] h-[70px] mb-[20px]"}>
                <Image src={decentralizedSvg} alt={"decentralizedSvg"} />
              </div>
              <div className={"h-[50px] font-bold text-[22px] text-black max-[800px]:h-auto max-[800px]:text-center"}>
                DECENTRALIZED
              </div>
              <div className={"pt-[10px] text-black max-[800px]:h-auto max-[800px]:py-[10px] max-[800px]:text-center"}>
                Splendor's decentralization is upheld through its implementation of proof-of-work (PoW) consensus, facilitated by the Substrate framework. By employing PoW, Splendor ensures a distributed and trustless network where participants, or miners, compete to validate transactions and add blocks to the blockchain without central authority. This decentralized approach enhances security, censorship resistance, and network resilience, aligning with the foundational principles of blockchain technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
