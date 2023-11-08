import {NextPage} from "next";
import {IStoredSecurelyWalletScreen} from "./types";
import {useState} from "react";
import {ApiAdminPanel} from "../../../api/bittensor";

const StoredSecurelyWalletScreen: NextPage<IStoredSecurelyWalletScreen> = ({back, cancel, walletInfo, accountInfo,registerWalletHandler}) => {
    const [reType, setReType] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {walletName, hotkeyName, password} = accountInfo

    const onSubmit = async () => {
        setIsLoading(true)

        try {
            const data = await ApiAdminPanel.registerWallet(walletName, hotkeyName, password);
            if(data.registered){
                registerWalletHandler(accountInfo, walletInfo);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    };
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-end h-full w-full absolute pb-[50px]"}>
                <input
                    value={reType}
                    onChange={event=>setReType(event.target.value)}
                    placeholder={"Re-type"}
                    className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                        "focus:outline-none mb-[50px]"}
                />

                {
                    reType!==walletInfo.wallet_info.new_coldkey.mnemonic?
                        <p className={"text-[#d72700] text-[12px] mx-[20px]"}>
                            Make sure that your mnemonic is stored securely. If you choose to “forget” your account, or if you close the window, it will be lost from the browser.
                        </p>:
                        <button
                            className={"disabled:bg-[#e4e4e4] disabled:cursor-default disabled:text-black  " +
                                "w-[230px] h-[32px] text-[12px] text-center text-white bg-[#282828] cursor-pointer  mb-[50px]"}
                            onClick={onSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Stored Securely'}
                        </button>
                }
            </div>

            <div className={"flex flex-row justify-between absolute right-0 w-full"}>
                <button onClick={back} className={"text-[12px] cursor-pointer mt-[20px] ml-[12px]"}>Back</button>
                <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default StoredSecurelyWalletScreen;
