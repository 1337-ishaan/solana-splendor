import React from "react";
import {NextPage} from "next";
import Dashboard from "../../../assets/icons/home/dashboard.webp";
import Image from "next/image";

const StartMining: NextPage = () => {
  return (
    <section id="about" className="about-area pt-[100px] bg-white mt-[100px] flex flex-col items-center
    justify-center text-black text-center max-[800px]:pt-[50px]">
      <div className="container ">
          <h1 className={"text-[70px] font-normal text-left text-[#073B4C] mx-[200px] max-[800px]:text-[50px] " +
              "max-[800px]:text-center max-[800px]:mx-0"}>
              <span className={"font-bold"}>Start </span>
              mining
          </h1>
          <div className={"mt-[50px] flex flex-row justify-center mx-[100px] max-[800px]:flex-col max-[800px]:mx-0"}>
              <div className={"flex flex-col text-left"}>
                  <p className={"text-[#073B4C] leading-10"}>Create your account</p>
                  <p className={"text-[#073B4C] leading-10"}>Download Splendor Core</p>
                  <p className={"text-[#073B4C] leading-10"}>Install</p>
                  <p className={"text-[#073B4C] leading-10"}>Run a node</p>
                  <p className={"text-[#073B4C] leading-10"}>Start mining</p>
                  <ul className={"text-[#75858A] ml-[50px]"}>
                      <li className={"list-[disc]"}>easy install</li>
                      <li className={"list-[disc]"}>no special equipment needed</li>
                  </ul>
                  <button className={"mt-[50px] bg-black rounded-[10px] p-[15px] w-[200px] text-white cursor-pointer"}>
                      Download
                  </button>
              </div>
              <Image className={"ml-[30px] mt-[50px] max-[800px]:ml-0"} src={Dashboard} width={800} alt={"Dashboard"} />
          </div>
      </div>
    </section>
  );
};

export default StartMining;
