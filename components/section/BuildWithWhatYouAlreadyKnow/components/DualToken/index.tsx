import React from "react";
import spgCoin from "../../../../../assets/icons/home/tokenomics.svg";
import Image from "next/image";
import {NextPage} from "next";

const DualToken: NextPage = () => {
    const dualTokenImg = (
        <>
            <Image className={"max-[767px]:max-w-[70%]"} src={spgCoin} alt={"SpgCoinItemImg"} />
        </>
    )

    return (
        <section className="pt-[130px] flex items-center justify-center">
            <div className="px-[15px] flex items-center justify-center">
                <div className={"rounded-[15px] ease-in-out delay-[0.3s] flex flex-row justify-center"}>
                    <div className={"flex flex-col pb-[60px] px-[40px] items-start max-[767px]:p-[0] " +
                        "max-[767px]:items-center"}>
                        <h1 className="title text-[#073B4C] text-[70px] max-[800px]:text-[50px]">
                            Tokenomics
                        </h1>
                        <div className="hidden max-[800px]:flex max-[800px]:py-0 max-[800px]:px-0
                        max-[800px]:justify-center max-[800px]:my-[20px]">
                            {dualTokenImg}
                        </div>
                        <p className={"px-0 text-start max-[800px]:text-center"}>Decoupling governance and utility functionalities<br />
                            for enhanced flexibility and efficiency.
                        </p>
                    </div>
                    <div className="max-[767px]:hidden">
                        {dualTokenImg}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DualToken;
