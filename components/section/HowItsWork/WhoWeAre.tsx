import React from "react";
import {NextPage} from "next";
import Wallet from "../../../assets/icons/home/wallet.svg";
import Connect from "../../../assets/icons/home/connect.svg";
import Transact from "../../../assets/icons/home/transact.svg";
import coinbaseSvg from "../../../assets/icons/home/coinbase.svg";
import rainbowSvg from "../../../assets/icons/home/rainbow.svg";
import Use from "../../../assets/icons/home/use.svg";
import Image from "next/image";
import Link from 'next/link';
import trustWallet from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/trust_wallet.svg";
import metamask from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/metamask.svg";
import walletconnect from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/walletconnect.svg";

const HowItsWork: NextPage = () => {
  return (
    <section id="about" className="about-area py-[100px] bg-[#F7F8FC] mt-[100px] flex flex-col items-center
    justify-center text-black text-center">
      <div className="px-[15px] w-full">
          <h1 className={"text-[70px] font-normal text-left text-[#073B4C] mx-[200px] max-[800px]:mx-0 " +
              "max-[800px]:text-center max-[800px]:text-[50px]"}>
              <span className={"font-bold"}>How </span>
              it works
          </h1>
          <div className={"mt-[100px] flex flex-wrap justify-center max-[800px]:flex-col max-[800px]:mx-0 " +
              "max-[800px]:items-center max-[800px]:mt-0"}>
              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px] max-[800px]:w-[70%]"}>
                <div className={"flex flex-row items-start h-[80px]"}>
                    <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                    <div className={"ml-[20px]"}>
                        <Image src={Wallet} alt={"Wallet"} />
                    </div>
                </div>
                <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[85%] h-[110px] max-[800px]:h-auto"}>
                    Choose a Splendor-Compatible Wallet:
                </div>
                <div className={"flex flex-row items-end"}>
                    <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                    <p className={"ml-[10px] text-[20px] text-[#073B4C]"}>01</p>
                </div>
                <div className={"flex flex-col w-[90%] mt-[10px]"}>
                    <Link href={"https://trustwallet.com/es/"}>
                        <div className={"flex flex-row justify-between cursor-pointer"}>
                            <p className={"text-[#073B4C]"}>Trust Wallet</p>
                            <Image width={20} height={20} src={trustWallet} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://metamask.io/"}>
                        <div className={"flex flex-row justify-between cursor-pointer"}>
                            <p className={"text-[#073B4C]"}>Metamask</p>
                            <Image width={20} height={20} src={metamask} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://walletconnect.com/"}>
                        <div className={"flex flex-row justify-between cursor-pointer"}>
                            <p className={"text-[#073B4C]"}>Wallet Connect</p>
                            <Image width={20} height={20} src={walletconnect} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://www.coinbase.com/"}>
                        <div className={"flex flex-row justify-between cursor-pointer"}>
                            <p className={"text-[#073B4C]"}>Coinbase</p>
                            <Image width={20} height={20} src={coinbaseSvg} alt={"coinbaseSvg"}/>
                        </div>
                    </Link>
                    <Link href={"https://www.rainbowkit.com/"}>
                        <div className={"flex flex-row justify-between cursor-pointer"}>
                            <p className={"text-[#073B4C]"}>Rainbow</p>
                            <Image width={20} height={20} src={rainbowSvg} alt={"rainbowSvg"}/>
                        </div>
                    </Link>
                </div>
            </div>

              <div className={"flex mb-[40px] mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px] max-[800px]:w-[70%]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[10px]"}>
                          <Image src={Connect} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[85%] h-[110px] max-[800px]:h-auto"}>
                      Install and Set Up the Wallet:
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-[#073B4C] ml-[10px] text-[20px]"}>02</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                      Install the chosen wallet on your preferred device (desktop, mobile, or browser extension). Follow the wallet's setup instructions to create an account and secure your wallet with a strong password or recovery phrase.
                  </div>
              </div>

              <div className={"flex mb-[40px] mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px] max-[800px]:w-[70%]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[20px]"}>
                        <Image src={Transact} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[85%] h-[110px] max-[800px]:h-auto"}>
                      Acquire SPL Tokens:
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"ml-[10px] text-[20px] text-[#073B4C]"}>03</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                  <p>Obtain SPL tokens to use within the Splendor network. You can acquire SPL tokens through various means, such as purchasing them on supported exchanges, receiving them in transactions, or run a node and start mining SDR which you can instantly swap for SPL on <a className="text-[#1E90FF]" href="https://octaocean.com/">octaocean.com</a></p>

                  </div>
              </div>

              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px] max-[800px]:w-[70%]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[20px]"}>
                        <Image src={Use} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[85%] h-[110px] max-[800px]:h-auto"}>
                      Interact with the Splendor Network:
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-[#073B4C] ml-[10px] text-[20px]"}>04</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                    <p>  Once your wallet is set up and funded with SPL coins, you can start interacting with the Splendor network. Send and receive SPL tokens, explore decentralized applications (dApps) built on Splendor. Receive 8% anual return paid daily for any SDR you want to commit  not to use in your wallet without any lock ups. Available periods of 1, 3, 6, 9, and 12 months. To learn more visit <a className="text-[#1E90FF]" href="https://octaocean.com/">octaocean.com</a></p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HowItsWork;
