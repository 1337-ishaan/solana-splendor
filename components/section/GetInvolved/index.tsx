import React from "react";
import discord from "../../../assets/icons/home/images/social/discord.svg";
import SocialItem from "./components/SocialItem";
import classes from "./styles.module.css";
import {NextPage} from "next";
import {ISocialItem} from "./components/SocialItem/types";

const GetInvolved: NextPage = () => {
    const slider_items: ISocialItem[] = [
        {
            src: discord,
            alt: "",
            link: "https://discord.gg/dfRsj6UG",
            title: "Discord",
        }
    ];

    return (
        <section id="community" className="choose-area pt-130 flex items-center justify-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="section-title text-center mb-50">
                            <h1>
                                Want to get involved? Join Splendor Community!
                            </h1>
                        </div>
                    </div>
                </div>

                <div className={classes.socialItemsContent}>
                    {slider_items.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
