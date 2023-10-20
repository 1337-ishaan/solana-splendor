import React from "react";
import Link from 'next/link';
import classes from "./styles.module.css";
import {NextPage} from "next";
import {IWhyChooseUs} from "./types";

const WhyChooseUsItem: NextPage<IWhyChooseUs> = ({link,title,src,description,alt,comingSoon}) => {
    return (
        <div className={`choose-item ${classes.WhyChooseUsItem} `}>
            <div className="choose-content">
            <h2 className="title text-[#083b4c]">
              <Link href={link}>{title}</Link>
            </h2>
            <p className={"text-[#083b4c]"}>{description}</p>
            </div>
            {src&&
                <div className={`choose-icon ${classes.WhyChooseUsItemIcon}`}>
                    <img src={src} alt={alt}/>
                </div>
            }

            {
                comingSoon&&
                <h5 className={"text-[#083b4c]"}>
                    Coming Soon
                </h5>
            }
        </div>
      );
};

export default WhyChooseUsItem;
