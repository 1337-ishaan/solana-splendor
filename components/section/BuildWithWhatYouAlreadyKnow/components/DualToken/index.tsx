import React from "react";
import minuteBlockTimeSvg from "../../../../../assets/icons/home/10MinuteBlockTime.svg";
import millionCoinsSvg from "../../../../../assets/icons/home/21millionCoins.svg";
import blockRewardSplSvg from "../../../../../assets/icons/home/blockRewardSpl.svg";
import lastBlockToBeMinedSvg from "../../../../../assets/icons/home/lastBlockToBeMined.svg";
import noHalvingSvg from "../../../../../assets/icons/home/noHalving.svg";
import {NextPage} from "next";
import DualItem from "../DualItem";

const DualToken: NextPage = () => {
    const firstRow = [
        {
            img: millionCoinsSvg,
            text: "21 MILLION COINS"
        },
        {
            img: minuteBlockTimeSvg,
            text: "10 Minute Block Time"
        },
        {
            img: blockRewardSplSvg,
            text: "Block Reward 3,125SPL"
        }
    ]

    const secondRow = [
        {
            img: lastBlockToBeMinedSvg,
            text: "Last Block to be Mined in 2123"
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
                <p className={"px-0 text-[#727885] text-center"}>Decoupling governance and utility functionalities<br />
                    for enhanced flexibility and efficiency.
                </p>
                <div className={"flex flex-wrap w-[80%] justify-evenly mt-[30px]"}>
                    {
                        firstRow.map(
                            (props, key)=>
                                <DualItem key={key} {...props}/>
                        )
                    }
                </div>
                <div className={"flex flex-wrap w-[80%] justify-evenly min-[800px]:mt-[30px]"}>
                    {
                        secondRow.map(
                            (props, key)=>
                                <DualItem key={key} {...props}/>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default DualToken;