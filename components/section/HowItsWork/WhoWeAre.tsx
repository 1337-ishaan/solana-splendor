import React from "react";
import {NextPage} from "next";
import Wallet from "../../../assets/icons/home/wallet.svg";
import Connect from "../../../assets/icons/home/connect.svg";
import Transact from "../../../assets/icons/home/transact.svg";
import Use from "../../../assets/icons/home/use.svg";
import Image from "next/image";
import Link from 'next/link';
import trustWallet from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/trust_wallet.svg";
import metamask from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/metamask.svg";
import walletconnect from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/walletconnect.svg";
import coinbase from "../../../assets/icons/home/icon/coinbase.png";
import rainbow from "../../../assets/icons/home/icon/rainbow.png";

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
          <div className={"mt-[100px] flex flex-row justify-center max-[800px]:flex-col max-[800px]:mx-0 " +
              "max-[800px]:items-center max-[800px]:mt-0"}>
              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px]"}>
                <div className={"flex flex-row items-start h-[80px]"}>
                    <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                    <div className={"ml-[20px]"}>
                        <Image src={Wallet} alt={"Wallet"} />
                    </div>
                </div>
                <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[80%] h-[60px]"}>
                Choose a Splendor-Compatible Wallet:
                </div>
                <div className={"flex flex-row items-end"}>
                    <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                    <p className={"text-black ml-[10px] text-[20px] text-[#073B4C]"}>01</p>
                </div>
                <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                Select a wallet that is compatible with Splendor. Splendor, being built on Substrate, supports wallets that are compatible with Substrate-based blockchains. Examples include Polkadot.js Wallet, or you can choose a wallet that supports Polkadot/Substrate.
                  </div>
                <div className={"flex flex-col w-[90%] mt-[10px]"}>
                    <Link href={"https://trustwallet.com/es/"}>
                        <div className={"flex flex-row justify-between"}>
                            <p className={"text-[#073B4C]"}>Trust Wallet</p>
                            <Image width={20} height={20} src={trustWallet} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://metamask.io/"}>
                        <div className={"flex flex-row justify-between"}>
                            <p className={"text-[#073B4C]"}>Metamask</p>
                            <Image width={20} height={20} src={metamask} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://walletconnect.com/"}>
                        <div className={"flex flex-row justify-between"}>
                            <p className={"text-[#073B4C]"}>Wallet Connect</p>
                            <Image width={20} height={20} src={walletconnect} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://walletconnect.com/"}>
                        <div className={"flex flex-row justify-between"}>
                            <p className={"text-[#073B4C]"}>Coinbase</p>
                            <Image width={20} height={20} src={coinbase} alt={"Item"}/>
                        </div>
                    </Link>
                    <Link href={"https://walletconnect.com/"}>
                        <div className={"flex flex-row justify-between"}>
                            <p className={"text-[#073B4C]"}>Rainbow</p>
                            <Image width={20} height={20} src={rainbow} alt={"Item"}/>
                        </div>
                    </Link>
                </div>
            </div>

              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[10px]"}>
                          <Image src={Connect} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[80%] h-[60px]"}>
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

              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[20px]"}>
                        <Image src={Transact} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[80%] h-[60px]"}>
                    Acquire SPL Tokens:
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-black ml-[10px] text-[20px] text-[#073B4C]"}>03</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                  Obtain SPL tokens to use within the Splendor network. You can acquire SPL tokens through various means, such as purchasing them on supported exchanges, receiving them in transactions, or participating in token distributions or mining activities if applicable.
                  </div>
              </div>

              <div className={"flex mr-[40px] flex-col min-w-[240px] w-[240px] max-[800px]:mt-[50px]"}>
                  <div className={"flex flex-row items-start h-[80px]"}>
                      <div className={"w-[6px] h-[60px] bg-[#447CD5]"}></div>
                      <div className={"ml-[20px]"}>
                        <Image src={Use} alt={"Wallet"} />
                      </div>
                  </div>
                  <div className={"mt-[30px] text-[25px] text-left text-[#073B4C] leading-8 w-[80%] h-[60px]"}>
                  Interact with the Splendor Network:
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-[#073B4C] ml-[10px] text-[20px]"}>04</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                  Once your wallet is set up and funded with SPL tokens, you can start interacting with the Splendor network. Send and receive SPL tokens, explore decentralized applications (dApps) built on Splendor, and participate in any governance or staking activities that may be available.
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HowItsWork;
