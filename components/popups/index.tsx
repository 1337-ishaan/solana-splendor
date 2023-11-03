import React from "react";
import {IPopup} from "./types";
import {NextPage} from "next";

export const Popup: NextPage<IPopup> = ({ title, text, closePopup }) => {
    return (
        <div className={"z-[9999999] fixed w-full h-full top-0 left-0 right-0 bottom-0 " +
            "bg-[#0000007F] flex items-center justify-center"}>
            <div className={"absolute text-center min-h-[640px] w-[700px] m-auto rounded-[15px] border-black " +
                "bg-white shadow-[#00000059] max-[800px]:w-[95%]"}>
                <div className={"pt-[10px] pr-[5px] pb-0 pl-[5px] w-full flex flex-row justify-center border-b-[1px] " +
                    "border-b-solid border-b-gray"}>
                    <p className={"text-[#727885] font-bold"}>{title}</p>
                    <div className={"absolute right-[15px] cursor-pointer"} onClick={closePopup}>X</div>
                </div>
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
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
