import {NextPage} from "next";
import {ICreateWalletScreen} from "./types";

const CreateWalletScreen: NextPage<ICreateWalletScreen> = ({createNewHandler, signInHandler, cancel}) => {
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-center h-full w-full absolute"}>
                <button
                    className={"w-[230px] h-[32px] text-[12px] text-center text-white bg-[#282828] cursor-pointer  mb-[50px]"}
                    onClick={createNewHandler}
                >
                    Create new
                </button>

                <button
                    className={"w-[230px] h-[32px] text-[12px] text-center text-white bg-[#282828] cursor-pointer"}
                    onClick={signInHandler}
                >
                    Sign in with Polkadot js
                </button>
            </div>

            <div className={"flex flex-row-reverse absolute right-0 w-full"}>
                <button onClick={cancel} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateWalletScreen;
