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
                    Get one of the following wallets
                </div>
                <div className={"flex flex-row items-end"}>
                    <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                    <p className={"text-black ml-[10px] text-[20px] text-[#073B4C]"}>01</p>
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
                      CONNECT
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-[#073B4C] ml-[10px] text-[20px]"}>02</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                      Connect and manage your funds on the Splendor Network with our user-friendly wallet
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
                      TRANSACT
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-black ml-[10px] text-[20px] text-[#073B4C]"}>03</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                      Once shielded, tokens,
                      balances, and transactions
                      are encrypted.
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
                      USE
                  </div>
                  <div className={"flex flex-row items-end"}>
                      <div className={"w-[90%] h-[1px] bg-[#073B4C] mb-[8px]"}></div>
                      <p className={"text-[#073B4C] ml-[10px] text-[20px]"}>04</p>
                  </div>
                  <div className={"flex flex-col w-[90%] mt-[10px] text-left text-[#073B4C]"}>
                      Transfer assets  and use DeFi
                      anonymously.
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default HowItsWork;