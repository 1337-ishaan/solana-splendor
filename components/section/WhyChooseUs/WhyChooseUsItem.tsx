import React from "react";
import Link from 'next/link';
import {NextPage} from "next";
import {IWhyChooseUs} from "./types";

const WhyChooseUsItem: NextPage<IWhyChooseUs> = ({link,title,src,description,alt,comingSoon}) => {
    return (
        <div className={`min-h-[440px] bg-white rounded-[15px] py-[60px] px-[40px] border-b-0 flex text-center items-center
         justify-evenly flex-col`}>
            <div>
            <h2 className=" text-[#083b4c] text-[40px] mb-[10px]">
              <Link href={link}>{title}</Link>
            </h2>
            <p className={"text-[#083b4c]"}>{description}</p>
            </div>
            {src&&
                <div className={`w-[80px] h-[80px] flex items-center justify-center rounded-[50%] mb-[30px]
                 mt-[30px] mb-0 mx-0`}>
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
