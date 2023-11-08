import {NextPage} from "next";
import {IImportWalletScreen} from "./types";

const ImportWalletScreen: NextPage<IImportWalletScreen> = ({createNewHandler, signInHandler, cancel}) => {
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-center h-full w-full absolute"}>
                <input
                    placeholder={"Enter seed phrase"}
                    className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                        "focus:outline-none mb-[50px] placeholder-red-600"}
                    onClick={createNewHandler}
                />

                <button
                    disabled={true}
                    className={"disabled:bg-[#e4e4e4] disabled:cursor-default w-[230px] h-[32px] text-[12px] text-center bg-[#282828] " +
                        "cursor-pointer text-[rgba(0, 0, 0, 0.26)]"}
                    onClick={signInHandler}
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

export default ImportWalletScreen;
