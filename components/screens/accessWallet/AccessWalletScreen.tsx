import {NextPage} from "next";
import {IAccessWalletScreen} from "./types";
import {useState} from "react";
import {ApiAdminPanel} from "../../../api/bittensor";

const AccessWalletScreen: NextPage<IAccessWalletScreen> = ({walletName, accessHandler, forgotHandler, cancel}) => {
    const [hotkeyName, setHotkeyName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        setIsLoading(true)
        try {
            const data = await ApiAdminPanel.getWalletBalance(walletName, hotkeyName, password);
            console.log("data", data)

            accessHandler();
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    };

    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-center h-full w-full absolute"}>
                <input
                    onChange={(event)=>setHotkeyName(event.target.value)}
                    placeholder={"Enter hotkeyName"}
                    className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                        "focus:outline-none mb-[50px] placeholder-red-600"}
                />
                <input
                    onChange={(event)=>setPassword(event.target.value)}
                    type={"password"}
                    placeholder={"Enter password"}
                    className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                        "focus:outline-none mb-[50px] placeholder-red-600"}
                />


                <button
                    disabled={isLoading || !hotkeyName || !password}
                    className={"disabled:bg-[#e4e4e4] disabled:cursor-default disabled:text-black w-[230px] h-[32px] text-[12px] text-center bg-[#282828] " +
                        "cursor-pointer text-[rgba(0, 0, 0, 0.26)] text-white"}
                    onClick={onSubmit}
                >
                    {isLoading?"Loading...":"Access"}
                </button>

                <button onClick={forgotHandler} className={"text-[12px] cursor-pointer mt-[20px]"}>Forget</button>
            </div>

            <div className={"flex flex-row-reverse absolute right-0 w-full"}>
                <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default AccessWalletScreen;
