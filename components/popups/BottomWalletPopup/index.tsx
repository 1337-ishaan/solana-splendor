import React from "react";
import {IBottomWalletPopup} from "./types";
import {NextPage} from "next";

export const BottomWalletPopup: NextPage<IBottomWalletPopup> = ({ title, text,buttonText, closePopup }) => {
    return (
        <div className={"z-[9999999] fixed w-full h-full left-0 right-0 bottom-0 " +
            "bg-[#0000007F] flex items-center justify-center"}>
            <div className={"absolute text-center min-h-[640px] w-full m-auto rounded-[15px] border-black " +
                "bg-white shadow-[#00000059] max-[800px]:w-[95%]"}>
                <div className={"px-[10px] pt-[10px] pb-[70px] w-full"}>
                    <div className={"px-[15px] py-[10px]"}>
                        <p className={"text-left overflow-y-scroll h-[490px] whitespace-pre-line text-[#727885]"}>
                            {text}
                        </p>
                    </div>
                    <div className={"bottom-[10px] absolute w-full"}>
                        <button
                            className={"w-[100px] bg-black rounded-[20px] p-[10px] text-white"}
                            onClick={closePopup}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
