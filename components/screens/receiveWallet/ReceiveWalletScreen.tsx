import {NextPage} from "next";
import {IReceiveWalletScreen} from "./types";
import CopyButton from "../../buttons/copy/CopyButton";

const ReceiveWalletScreen: NextPage<IReceiveWalletScreen> = ({walletInfo, cancelHandler, forgotHandler}) => {
    return(
        <div className={"flex flex-col justify-between px-[20px] h-full absolute w-full"}>
            <div className={"pt-[50px] items-center w-full flex flex-col"}>
                <p className={"text-[12px] text-center break-all my-[20px]"}>Relay this address to sender</p>

                <p className={"text-[12px] text-center break-all text-[#287a30eb]"}> Cold Wallet</p>
                <CopyButton text={walletInfo.coldWallet?.address as string} />
                <p className={"text-[10px] text-center break-all"}> {walletInfo.coldWallet?.address}</p>

                <p className={"text-[12px] text-center break-all text-[#287a30eb] mt-[10px]"}> Hot Wallet</p>
                <CopyButton text={walletInfo.hotWallet?.address as string} />
                <p className={"text-[10px] text-center break-all"}> {walletInfo.hotWallet?.address}</p>
            </div>

            <div className={"flex flex-row-reverse absolute right-0 w-full"}>
                <button onClick={cancelHandler} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>

            <div className={"flex justify-center w-full absolute bottom-0 right-0 left-0"}>
                <button onClick={forgotHandler} className={"text-[12px] cursor-pointer mb-[28px]"}>Forget</button>
            </div>
        </div>
    )
}

export default ReceiveWalletScreen;
