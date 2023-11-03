import React from "react";
import cSharp from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/cSharp.svg";
import go from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/go.svg";
import java from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/java.svg";
import python from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/python.svg";
import typescript from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/typescript.svg";
import Image from "next/image";
import {NextPage} from "next";

const BuildWithWhatYouAlreadyKnow: NextPage = () => {
    return (
        <section className="py-[130px] flex items-center justify-center max-[800px]:py-[50px]">
            <div className="px-[15px]">
                <div className={`row justify-center max-[800px]:mt-[20px]`}>
                    <div className="text-center mb-[50px]">
                        <h1 className={"text-[#083b4c] text-center text-[40px]"}>
                            Flexible programing languages
                        </h1>
                        <p className={"my-[20px] mx-[300px] text-[#083b4c] text-center max-[800px]:mx-0"}>
                            Develop decentralized applications using your expertise in Python, C#, Go, TypeScript, and Java. Our platform empowers you to tap into the potential of blockchain technology and create innovative solutions.
                        </p>
                        <div className={"flex-wrap flex justify-evenly items-center"}>
                            <Image src={cSharp} alt={"cSharp"}/>
                            <Image src={go} alt={"go"}/>
                            <Image src={java} alt={"java"}/>
                            <Image src={python} alt={"python"}/>
                            <Image src={typescript} alt={"typescript"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuildWithWhatYouAlreadyKnow
