import React from "react";
import octa_ocean from "../../../assets/icons/home/images/splendorExploreSection/octa_ocean.svg";
import decentercloud from "../../../assets/icons/home/images/splendorExploreSection/decentercloud.svg";
import wallet from "../../../assets/icons/home/images/splendorExploreSection/wallet-03.svg";
import sentinel from "../../../assets/icons/home/images/splendorExploreSection/sentinel.png";
import splendos from "../../../assets/icons/home/images/splendorExploreSection/splendos.svg";
import splendor_ai from "../../../assets/icons/home/images/splendorExploreSection/splendor_ai.svg";
import search_engine from "../../../assets/icons/home/images/splendorExploreSection/search engine.svg";
import spacenet from "../../../assets/icons/home/images/splendorExploreSection/spacenet.svg";
import vinegram_logo from "../../../assets/icons/home/images/splendorExploreSection/vinegram_logo.svg";
import WhyChooseUsItemIcon from "./WhyChooseUsItemIcon/WhyChooseUsItemIcon";

const WhyChooseUs = () => {
  const slider_items = [
    {
      src: octa_ocean,
      link: "https://octaocean.com/",
      title: "Octa Ocean",
    },
    {
      src: decentercloud,
      link: "https://decentercloud.com/",
      title: "DecenterCloud",
    },
    {
      src: wallet,
      link: "/wallet",
      title: "Splendor Wallet",
    },
    {
      src: sentinel,
      link: "https://sentinelbrowser.com/",
      title: "Sentinel Browser",
    },
    {
      src: splendos,
      link: "https://splendos.org/",
      title: "Splendos",
    },
    {
      src: splendor_ai,
      link: "https://splendor.org/",
      title: "Splendor AI",
    },
    {
      src: search_engine,
      link: "https://splendor.org/",
      title: "Splendor Search",
    },
    {
      src: spacenet,
      link: "https://getspacenet.com/",
      title: "Spacenet",
    },
    {
      src: vinegram_logo,
      link: "/",
      title: "Vinegram",
    },
  ];

  return (
    <section id="ecosystem" className={`pt-[130px] wow fadeInUp flex 
    items-center justify-center pb-[100px] bg-[#F7F8FC] pt-[200px]`}>
      <div className="px-[15px]">
        <div className="row justify-content-center">
          <h1 className={"text-[70px] font-normal text-center text-[#073B4C] mx-[200px] max-[800px]:text-[50px] max-[800px]:mx-0"}>
            <span className={"font-bold"}>Explore </span>
            Our Ecosystem
          </h1>
        </div>

        <div className={`flex flex-wrap items-center justify-center mt-[50px] mx-[8%]`}>
          {slider_items.map((item, index) => (
              <WhyChooseUsItemIcon key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
