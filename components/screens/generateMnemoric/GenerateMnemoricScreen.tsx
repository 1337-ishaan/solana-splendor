import {NextPage} from "next";
import {IGenerateMnemoricScreen} from "./types";
import CopyButton from "../../buttons/copy/CopyButton";

const GenerateMnemoricScreen: NextPage<IGenerateMnemoricScreen> = ({storedSecurityHandler, walletInfo, back, cancel}) => {
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-between h-full w-full absolute pt-[100px]"}>
                <p className={"text-[#d72700] text-[12px] mx-[20px]"}>
                    {walletInfo.wallet_info.new_coldkey.mnemonic}
                </p>
                <CopyButton text={walletInfo.wallet_info.new_coldkey.mnemonic}/>
                <button
                    className={"w-[230px] h-[32px] text-[12px] text-center text-white bg-[#282828] cursor-pointer  mb-[50px]"}
                    onClick={()=>storedSecurityHandler(walletInfo)}
                >
                    Stored Securely
                </button>
            </div>

            <div className={"flex flex-row justify-between absolute right-0 w-full"}>
                <button onClick={back} className={"text-[12px] cursor-pointer mt-[20px] ml-[12px]"}>Back</button>
                <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default GenerateMnemoricScreen;
