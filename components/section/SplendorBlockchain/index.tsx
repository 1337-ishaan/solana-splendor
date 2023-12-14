import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import inchSvg from "../../../assets/icons/home/splendorBlockchain/1inch.svg";
import aave from "../../../assets/icons/home/splendorBlockchain/aave.svg";
import arbitrumArbLogoSvg from "../../../assets/icons/home/splendorBlockchain/arbitrum-arb-logo.svg";
import opti from "../../../assets/icons/home/splendorBlockchain/opti.svg";
import daiSvg from "../../../assets/icons/home/splendorBlockchain/dai.svg";
import sdr from "../../../assets/icons/home/splendorBlockchain/sdr.jpeg";
import ethSvg from "../../../assets/icons/home/splendorBlockchain/eth.svg";
import avalanche from "../../../assets/icons/home/splendorBlockchain/avalanche.png";
import binanceusd from "../../../assets/icons/home/splendorBlockchain/binance-usd.png";
import bnb from "../../../assets/icons/home/splendorBlockchain/bnb.png";
import wbtc from "../../../assets/icons/home/splendorBlockchain/wbtc.png";
import linkSvg from "../../../assets/icons/home/splendorBlockchain/link.svg";
import maticSvg from "../../../assets/icons/home/splendorBlockchain/matic.svg";
import pancakeswapCakeLogoSvg from "../../../assets/icons/home/splendorBlockchain/pancakeswap-cake-logo.svg";
import stethStethLogoSvg from "../../../assets/icons/home/splendorBlockchain/steth-steth-logo.svg";
import sushiSvg from "../../../assets/icons/home/splendorBlockchain/sushi.svg";
import tetherGoldXautLogoSvg from "../../../assets/icons/home/splendorBlockchain/tether-gold-xaut-logo.svg";
import uniSvg from "../../../assets/icons/home/splendorBlockchain/uni.svg";
import usdcSvg from "../../../assets/icons/home/splendorBlockchain/usdc.svg";
import usdtSvg from "../../../assets/icons/home/splendorBlockchain/usdt.svg";
import EURCSvg from "../../../assets/icons/home/splendorBlockchain/EURC.svg";
import EURTSvg from "../../../assets/icons/home/splendorBlockchain/EURT.svg";

type IconDate = {img: string, title: string}

const SplendorBlockchain: NextPage = () => {
    const iconsData:IconDate[] = [
        { img: ethSvg, title: "ETH" },
        { img: usdtSvg, title: "USDT" },
        { img: usdcSvg, title: "USDC" },
        { img: sdr, title: "SDR" },
        { img: wbtc, title: "WBTC" },
        { img: maticSvg, title: "POLYGON" },

        { img: daiSvg, title: "DAI" },
        { img: uniSvg, title: "UNISWAP" },
        { img: aave, title: "AAVE" },
        { img: sushiSvg, title: "SUSHISWAP" },
        { img: pancakeswapCakeLogoSvg, title: "PANCAKESWAP" },
        { img: EURTSvg, title: "EURt" },
        { img: EURCSvg, title: "EURc" },

        { img: linkSvg, title: "CHAINLINK" },
        { img: tetherGoldXautLogoSvg, title: "TETHER GOLD" },
        { img: inchSvg, title: "1inch" },
        { img: arbitrumArbLogoSvg, title: "Arbitrum" },
        { img: stethStethLogoSvg, title: "Lido" },
        { img: avalanche, title: "Avalanche" },
        { img: bnb, title: "Binance" },
        { img: opti, title: "Optimism" },
        { img: binanceusd, title: "BUSD" },
    ];

    const Icon: NextPage<IconDate> = ({img, title}) => (
        <div className={"rounded-[10px] bg-white mr-[10px] py-[10px] px-[15px] flex flex-row shadow-2xl mb-[10px]"}>
            <Image width={25} height={25} src={img} alt={title} />
            <p className={"ml-[5px]"}>{title}</p>
        </div>
    )

  return (
    <section id="about" className="py-[100px] bg-[#f7f8fc] flex flex-col items-center
    justify-center text-black text-center">
      <div className="px-[15px] ">
          <h1 className={"text-[70px] font-normal text-center text-[#073B4C] mx-auto max-[800px]:text-[50px] max-[800px]:mx-0"}>
              Crypto Projects
          </h1>
          <p className={"text-[#073B4C] text-[30px] max-[800px]:text-[20px]"}>
              that are now on the
          </p>
          <h1 className={"text-[70px] font-bold text-center text-[#073B4C] mx-auto max-[800px]:text-[50px] max-[800px]:mx-0"}>
              SPLENDOR BLOCKCHAIN
          </h1>
          <div className={"mt-[50px] flex flex-wrap mx-auto items-center justify-center"}>
              {
                  iconsData.slice(0,9).map(({ img, title }, index) => (
                      <Icon key={img + index} img={img} title={title} />
                  ))
              }
          </div>
          <div className={"flex flex-wrap mx-auto items-center justify-center"}>
              {
                  iconsData.slice(9,17).map(({img, title}, index) => <Icon key={img + index} img={img} title={title} />)
              }
          </div>
          <div className={"flex flex-wrap mx-auto items-center justify-center"}>
              {
                  iconsData.slice(17,iconsData.length).map(({img, title}, index) => <Icon key={img + index} img={img} title={title} />)
              }
          </div>
          <button
                className={"w-[150px] bg-white text-black border-black border-[1px] rounded-[10px] p-[10px] mt-[40px]"}
                onClick={() => window.location.href = 'https://octaocean.com/bridge'}
            >
                Bridge Access
            </button>

      </div>
    </section>
  );
};

export default SplendorBlockchain;
