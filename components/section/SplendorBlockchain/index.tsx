import React from "react";
import {NextPage} from "next";
import Image from "next/image";
import inchSvg from "../../../assets/icons/home/splendorBlockchain/1inch.svg";
import aave from "../../../assets/icons/home/splendorBlockchain/aave.svg";
import arbitrumArbLogoSvg from "../../../assets/icons/home/splendorBlockchain/arbitrum-arb-logo.svg";
import atomSvg from "../../../assets/icons/home/splendorBlockchain/atom.svg";
import bchSvg from "../../../assets/icons/home/splendorBlockchain/bch.svg";
import daiSvg from "../../../assets/icons/home/splendorBlockchain/dai.svg";
import dotSvg from "../../../assets/icons/home/splendorBlockchain/dot.svg";
import ethSvg from "../../../assets/icons/home/splendorBlockchain/eth.svg";
import linkSvg from "../../../assets/icons/home/splendorBlockchain/link.svg";
import maticSvg from "../../../assets/icons/home/splendorBlockchain/matic.svg";
import pancakeswapCakeLogoSvg from "../../../assets/icons/home/splendorBlockchain/pancakeswap-cake-logo.svg";
import solSvg from "../../../assets/icons/home/splendorBlockchain/sol.svg";
import stethStethLogoSvg from "../../../assets/icons/home/splendorBlockchain/steth-steth-logo.svg";
import sushiSvg from "../../../assets/icons/home/splendorBlockchain/sushi.svg";
import tetherGoldXautLogoSvg from "../../../assets/icons/home/splendorBlockchain/tether-gold-xaut-logo.svg";
import trxSvg from "../../../assets/icons/home/splendorBlockchain/trx.svg";
import uniSvg from "../../../assets/icons/home/splendorBlockchain/uni.svg";
import usdcSvg from "../../../assets/icons/home/splendorBlockchain/usdc.svg";
import usdtSvg from "../../../assets/icons/home/splendorBlockchain/usdt.svg";
import xmrSvg from "../../../assets/icons/home/splendorBlockchain/xmr.svg";
import xprSvg from "../../../assets/icons/home/splendorBlockchain/xpr.svg";
import EURCSvg from "../../../assets/icons/home/splendorBlockchain/EURC.svg";
import EURTSvg from "../../../assets/icons/home/splendorBlockchain/EURT.svg";

type IconDate = {img: string, title: string}

const SplendorBlockchain: NextPage = () => {
    const iconsData:IconDate[] = [
        { img: ethSvg, title: "ETH" },
        { img: usdtSvg, title: "USDT" },
        { img: usdcSvg, title: "USDC" },
        { img: xprSvg, title: "XPR" },
        { img: solSvg, title: "SOLANA" },
        { img: trxSvg, title: "TRON" },
        { img: bchSvg, title: "BITCOIN CASH" },
        { img: xmrSvg, title: "MONERO" },
        { img: maticSvg, title: "POLYGON" },

        { img: daiSvg, title: "DAI" },
        { img: uniSvg, title: "UNISWAP" },
        { img: aave, title: "AAVE" },
        { img: sushiSvg, title: "SUSHISWAP" },
        { img: pancakeswapCakeLogoSvg, title: "PANCAKESWAP" },
        { img: EURTSvg, title: "EURt" },
        { img: EURCSvg, title: "EURc" },
        { img: dotSvg, title: "POLKADOT" },

        { img: atomSvg, title: "ATOM" },
        { img: linkSvg, title: "CHAINLINK" },
        { img: tetherGoldXautLogoSvg, title: "TETHER GOLD" },
        { img: inchSvg, title: "1inch" },
        { img: arbitrumArbLogoSvg, title: "Arbitrum" },
        { img: stethStethLogoSvg, title: "Libo" },
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
                  iconsData.slice(0,9).map(({img, title})=><Icon img={img} title={title} />)
              }
          </div>
          <div className={"flex flex-wrap mx-auto items-center justify-center"}>
              {
                  iconsData.slice(9,17).map(({img, title})=><Icon img={img} title={title} />)
              }
          </div>
          <div className={"flex flex-wrap mx-auto items-center justify-center"}>
              {
                  iconsData.slice(17,iconsData.length).map(({img, title})=><Icon img={img} title={title} />)
              }
          </div>
          <button className={"w-[150px] bg-white text-black border-black border-[1px] rounded-[10px] p-[10px] mt-[40px]"}>
              Buy Tokens
          </button>
      </div>
    </section>
  );
};

export default SplendorBlockchain;