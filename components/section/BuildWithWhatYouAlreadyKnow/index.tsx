import React from "react";
import classes from "./styles.module.css"
import cSharp from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/cSharp.svg";
import go from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/go.svg";
import java from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/java.svg";
import python from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/python.svg";
import typescript from "../../../assets/icons/home/images/buildWithWhatYouAlreadyKnow/typescript.svg";
import Image from "next/image";
import {NextPage} from "next";

const BuildWithWhatYouAlreadyKnow: NextPage = () => {
    return (
        <section className="choose-area py-[130px] flex items-center justify-center max-[800px]:py-[50px]">
            <div className="container">
                <div className={`row justify-content-center ${classes.buildWithWhatYouAlreadyKnow}`}>
                    <div className="section-title text-center mb-50">
                        <h1 className={"text-[#083b4c] max-[800px]"}>
                            Flexible programing languages
                        </h1>
                        <p className={"mx-[300px] max-[800px]:mx-0 max-[800px]:my-[20px]"}>
                            Develop decentralized applications using your expertise in Python, C#, Go, TypeScript, and Java. Our platform empowers you to tap into the potential of blockchain technology and create innovative solutions.
                        </p>
                        <div className={classes.languagesContent}>
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
