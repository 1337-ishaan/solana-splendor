import {NextPage} from "next";
import {IForgetWalletScreen} from "./types";

const ForgetWalletScreen: NextPage<IForgetWalletScreen> = ({forgetHandler, cancel}) => {
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-evenly h-full w-full absolute"}>
                <p className={"text-[#d72700] text-[12px] mx-[20px]"}>
                    You are about to forget your account and will no longer have access. Make sure that your mnemonic is stored securely as it will be lost from the browser.
                </p>

                <button
                    className={"disabled:bg-[#e4e4e4] disabled:cursor-default w-[230px] h-[32px] text-[12px] text-center bg-[#282828] " +
                        "cursor-pointer text-[rgba(0, 0, 0, 0.26)] text-white"}
                    onClick={forgetHandler}
                >
                    Continue
                </button>
            </div>

            <div className={"flex flex-row-reverse absolute right-0 w-full"}>
                <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default ForgetWalletScreen;
