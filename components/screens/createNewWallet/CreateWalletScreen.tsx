import {NextPage} from "next";
import {ICreateNewWalletScreen} from "./types";
import {useState} from "react";
import {ApiAdminPanel} from "../../../api/bittensor";

const CreateNewWalletScreen: NextPage<ICreateNewWalletScreen> = ({generateMnemoricHandler, back, cancel}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [walletName, setWalletName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [hotkeyName, setHotkeyName] = useState<string>("");
    const onSubmit = async () => {
        setIsLoading(true)

        try {
            const data = await ApiAdminPanel.createWallet(walletName, hotkeyName, password);
            generateMnemoricHandler({walletName, password, hotkeyName}, data);
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    };
    return(
        <>
            <div className={"flex flex-col justify-between h-full w-full"}>
                <div className={"flex flex-col items-center justify-end h-full w-full absolute"}>
                    <input
                        value={walletName}
                        onChange={(event)=>setWalletName(event.target.value)}
                        placeholder={"Enter wallet name"}
                        className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                            "focus:outline-none mb-[30px]"}
                    />
                    <input
                        value={hotkeyName}
                        onChange={(event)=>setHotkeyName(event.target.value)}
                        placeholder={"Enter hotkey name"}
                        className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                            "focus:outline-none mb-[30px]"}
                    />
                    <input
                        type={"password"}
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        placeholder={"Enter password"}
                        className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                            "focus:outline-none mb-[30px]"}
                    />

                    <button
                        className={"w-[230px] h-[32px] text-[12px] text-center text-white bg-[#282828] cursor-pointer  mb-[50px]" +
                            " disabled:bg-[#e4e4e4] disabled:cursor-default disabled:text-black "}
                        onClick={onSubmit}
                        disabled={isLoading||!!!walletName||!!!hotkeyName||!!!password}
                    >
                        {isLoading ? 'Loading...' : 'Generate Mnemonic'}
                    </button>
                </div>

                <div className={"flex flex-row justify-between absolute right-0 w-full"}>
                    <button onClick={back} className={"text-[12px] cursor-pointer mt-[20px] ml-[12px]"}>Back</button>
                    <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default CreateNewWalletScreen;
