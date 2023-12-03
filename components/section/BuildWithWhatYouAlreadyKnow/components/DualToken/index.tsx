import React from "react";
import minuteBlockTimeSvg from "../../../../../assets/icons/home/10min.svg";
import miltokensSvg from "../../../../../assets/icons/home/21mil_tokens.svg";
import blockRewardSplSvg from "../../../../../assets/icons/home/blockRewardSpl.svg";
import lastBlockToBeMinedSvg from "../../../../../assets/icons/home/lastBlockToBeMined.svg";
import noHalvingSvg from "../../../../../assets/icons/home/noHalving.svg";
import {NextPage} from "next";
import DualItem from "../DualItem";

const DualToken: NextPage = () => {
    const firstRow = [
        {
            img: miltokensSvg,
            text: "21 MILLION COINS"
        },
        {
            img: minuteBlockTimeSvg,
            text: "1 second block time"
        },
        {
            img: blockRewardSplSvg,
            text: "3.125 SPL entering the reserve pool every 10 minutes"
        }
    ]

    const secondRow = [
        {
            img: lastBlockToBeMinedSvg,
            text: "Last Block to be Mined\n in the year 2123"
        },
        {
            img: noHalvingSvg,
            text: "No halving"
        }
    ]

    return (
        <section className="pt-[130px] w-full">
            <div className={"flex flex-col pb-[60px] px-[40px] items-center max-[767px]:p-[0] " +
                "justify-center"}>
                <h1 className="title text-[#073B4C] text-[70px] max-[800px]:text-[50px]">
                    Tokenomics
                </h1>
                <p className={"px-0 text-[#727885] text-center"}><br />

                </p>
                <div className={"flex flex-wrap w-[80%] justify-evenly mt-[30px] max-[800px]:mt-[40px] max-[800px]:flex-col gap-[40px]"}>
                    {
                        firstRow.map(
                            (props, key)=>
                                <DualItem key={key} {...props}/>
                        )
                    }
                </div>
                <div className={"flex flex-wrap w-[80%] justify-evenly max-[800px]:mt-[40px] min-[800px]:mt-[30px] " +
                    "max-[800px]:flex-col gap-[40px]"}>
                    {
                        secondRow.map(
                            (props, key)=>
                                <div className={"max-[800px]:flex-1"}  key={key}>
                                    <DualItem {...props}/>
                                </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default DualToken;
