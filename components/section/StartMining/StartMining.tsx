import React from "react";
import {NextPage} from "next";
import Dashboard from "../../../assets/icons/dashboard/dashboard.png";
import Node from "../../../assets/icons/dashboard/node.jpg";
import Image from "next/image";
import Link from "next/link";

const StartMining: NextPage = () => {
  return (
    <section id="about" className="pt-[100px] bg-white mt-[50px] flex flex-col items-center
    justify-center text-black text-center max-[800px]:pt-[50px]">
      <div className="px-[15px] ">
          <h1 className={"text-[70px] font-normal text-left text-[#073B4C] mx-[200px] max-[800px]:text-[50px] " +
              "max-[800px]:text-center max-[800px]:mx-0"}>
              <span className={"font-bold"}>Start </span>
              mining
          </h1>
          <div className={"mt-[50px] flex flex-row justify-center mx-[100px] max-[800px]:flex-col " +
              "max-[800px]:mx-0"}>
              <div className={"max-[800px]:items-center max-[800px]:mb-[20px]"}>
                  <div className={"flex flex-col text-left mr-[10px]"}>
                      <p className={"text-[#073B4C] leading-10"}>Download Splendor Core</p>
                      <p className={"text-[#073B4C] leading-10"}>Install</p>
                      <p className={"text-[#073B4C] leading-10"}>Run a node</p>
                      <p className={"text-[#073B4C] leading-10"}>Start mining</p>
                      <ul className={"text-[#75858A] ml-[50px]"}>
                          <li className={"list-[disc] mb-[10px]"}>easy install</li>
                          <li className={"list-[disc]"}>no special equipment needed</li>
                      </ul>
                  </div>
                  <button className={"mt-[50px] bg-black rounded-[10px] p-[15px] w-[200px] text-white cursor-pointer " +
                      "max-[800px]:mb-[10px] max-[800px]:mt-[20px] max-[800px]:hidden"}>
                      <Link href="/dashboard/download">
                          Download
                      </Link>
                  </button>
              </div>
              <div className="rounded-[10px] ml-[20px]">
                <Image className={"ml-[40px] mt-[50px] max-[500px]:ml-0 rounded-[10px]"} src={Node} width={700} height={500} alt={"Dashboard"} />
              </div>
              <button className={"mt-[50px] bg-black rounded-[10px] p-[15px] w-[200px] text-white cursor-pointer " +
                  "max-[800px]:mb-[10px] max-[800px]:mt-[20px] hidden max-[800px]:block"}>
                  <Link href="/dashboard/download">
                      Download
                  </Link>
              </button>
          </div>
      </div>
    </section>
  );
};

export default StartMining;
