import {NextPage} from "next";
import {IMainWalletAuthorizedScreen} from "./types";
import sendSvg from "../../../assets/icons/wallet/send.svg";
import receiveSvg from "../../../assets/icons/wallet/receive.svg";
import stakeSvg from "../../../assets/icons/wallet/stake.svg";
import symbolGreenSvg from "../../../assets/icons/wallet/symbolGreen.svg";
import Image from "next/image";

const MainWalletAuthorizedScreen: NextPage<IMainWalletAuthorizedScreen> = ({walletInfo, shareHandler,
                                                                               receiveHandler, sendHandler, cancelHandler,
                                                                               forgotHandler}) => {
    return(
        <div className={"flex flex-col justify-between px-[20px] h-full absolute w-full"}>
            <div className={"pt-[40px]"}>
                <p className={"text-[12px] text-center break-all text-[#287a30eb]"}> Cold Wallet</p>
                <p className={"text-[20px] text-[#287a30eb] text-center"}><Image src={symbolGreenSvg} alt={'symbolSvg'} /> {walletInfo.coldWallet?.balance}</p>
                <p className={"text-[10px] text-center break-all"}> {walletInfo.coldWallet?.address}</p>

                <p className={"text-[12px] text-center break-all text-[#287a30eb] mt-[10px]"}> Hot Wallet</p>
                <p className={"text-[20px] text-[#287a30eb] text-center"}><Image src={symbolGreenSvg} alt={'symbolSvg'} /> {walletInfo.hotWallet?.balance}</p>
                <p className={"text-[10px] text-center break-all"}> {walletInfo.hotWallet?.address}</p>

                <div className={"flex pt-[10px] flex-row justify-evenly"}>
                    <div className={"flex flex-col"}>
                        <button
                            className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                            onClick={sendHandler}
                        >
                            <Image src={sendSvg} alt={"sendSvg"} />
                        </button>
                        <p className={"text-[12px]"}>Send</p>
                    </div>

                    <div className={"flex flex-col mx-[16px]"}>
                        <button
                            className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                            onClick={receiveHandler}
                        >
                            <Image src={receiveSvg} alt={"receiveSvg"} />
                        </button>
                        <p className={"text-[12px]"}>Receive</p>
                    </div>
{/*
                    <div className={"flex flex-col"}>
                        <button
                            className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                            onClick={sendHandler}
                        >
                            <Image src={stakeSvg} alt={"stakeSvg"} />
                        </button>
                        <p className={"text-[12px]"}>Stake</p>
                    </div>*/}
                </div>
                <button onClick={forgotHandler} className={"text-[12px] cursor-pointer mt-[20px]"}>Forget</button>
            </div>

            <div className={"flex flex-row-reverse absolute right-0 w-full"}>
                <button onClick={cancelHandler} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default MainWalletAuthorizedScreen;
