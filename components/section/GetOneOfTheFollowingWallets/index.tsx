import React from "react";
import classes from "./styles.module.css"
import trustWallet from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/trust_wallet.svg";
import metamask from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/metamask.svg";
import walletconnect from "../../../assets/icons/home/images/getOneOfTheFollowingWallets/walletconnect.svg";
import GetOneOfTheFollowingWalletsItem from "./components/GetOneOfTheFollowingWalletsItem";
import {NextPage} from "next";
import {IGetOneOfTheFollowingWalletsItem} from "./components/GetOneOfTheFollowingWalletsItem/types";

const GetOneOfTheFollowingWallets: NextPage = () => {
    const wallets: IGetOneOfTheFollowingWalletsItem[] = [
        {
            title: "Trust Wallet",
            icon: trustWallet,
            link: "https://trustwallet.com/es/"
        },
        {
            title: "Metamask",
            icon: metamask,
            link: "https://metamask.io/"
        },
        {
            title: "Wallet Connect",
            icon: walletconnect,
            link: "https://walletconnect.com/"
        }
    ]
    return (
        <section id="getOneOfTheFollowingWallets" className="choose-area pt-130 flex items-center justify-center">
            <div className="container">
                <div className={`row justify-content-center ${classes.getOneOfTheFollowingWallets}`}>
                    <div className="section-title text-center">
                        <h1>
                            Get one of the following Wallets
                        </h1>
                        <p>
                            Connect and manage your funds choose your wallet
                        </p>
                        <div className={classes.walletsContent}>
                            {
                                wallets.map(wallet=>(
                                    <GetOneOfTheFollowingWalletsItem {...wallet} />
                                ))
                            }
                        </div>
                        <p>
                            Click on icon to visit website.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetOneOfTheFollowingWallets
