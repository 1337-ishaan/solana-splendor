import React from "react";
import classes from "./styles.module.css";
import {NextPage} from "next";

const HeaderSection: NextPage = () => {
    return (
        <section className="about-area pt-130 pb-130">
            <div className={classes.headerDocumentationsSection}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="wow fadeInRight" data-wow-delay=".2s">
                            <div className="mb-30">
                                <h2 className="title text-[70px] font-normal text-left text-[#073B4C] mx-[200px]">
                                    Our Ecosystem
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;
