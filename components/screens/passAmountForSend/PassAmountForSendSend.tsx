import {NextPage} from "next";
import {IPassAmountForSendSend} from "./types";

const PassAmountForSendSend: NextPage<IPassAmountForSendSend> = ({continueOperation, forgotHandler, cancelHandler, backHandler}) => {
    return(
        <div className={"flex flex-col justify-between h-full w-full"}>
            <div className={"flex flex-col items-center justify-center h-full w-full absolute"}>
                <input
                    placeholder={"Amount"}
                    type={"number"}
                    className={"w-[230px] h-[32px] text-[12px] text-center text-black bg-[#e4e4e4] " +
                        "focus:outline-none mb-[50px]"}
                />

                <button
                    disabled={true}
                    className={"disabled:bg-[#e4e4e4] disabled:text-[#00000042] disabled:cursor-default w-[230px] " +
                        "h-[32px] text-[12px] text-center bg-[#282828] cursor-pointer text-[rgba(0, 0, 0, 0.26)]"}
                    onClick={continueOperation}
                >
                    Continue
                </button>
            </div>

            <div className={"flex flex-row justify-between absolute right-0 w-full"}>
                <button onClick={backHandler} className={"text-[12px] cursor-pointer mt-[20px] ml-[12px]"}>Back</button>
                <button onClick={cancelHandler} className={"text-[12px] cursor-pointer mt-[20px] mr-[12px]"}>Cancel</button>
            </div>

            <div className={"flex justify-center w-full absolute bottom-0 right-0 left-0"}>
                <button onClick={forgotHandler} className={"text-[12px] cursor-pointer mb-[28px]"}>Forget</button>
            </div>
        </div>
    )
}

export default PassAmountForSendSend;
