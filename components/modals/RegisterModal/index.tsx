`use client`;
import { push, ref } from "firebase/database";
import {useAccount} from "wagmi";
import { useState, useMemo} from "react";
import { database } from "../../../firebaseConfig"
import {NextPage} from "next";
import {IRegisterModal} from "./types";
import closeSvg from "../../../assets/icons/common/close.svg";
import Image from "next/image";

const RegisterModal: NextPage<IRegisterModal> = ({closeModal}) => {
    const { isConnected, address, isDisconnected } = useAccount();
    const addressWallet = useMemo(()=>isConnected&&!isDisconnected?address:"",[isConnected,address,isDisconnected])
    const [addr, setAddr] = useState("");

    const handleAddAddress = () => {
        try {
            const usersRef = ref(database, "users");
            const newDataRef = push(usersRef);
            //@ts-ignore
            set(newDataRef, {
                addr: addr,
            });
            setAddr("");
            alert("DATA ADDEDE SUCCESFULLY");
        } catch(error) {
            alert("Error uploading data");
        }
     }

    return (
        <div
            onClick={closeModal}
            className={"fixed z-[99999] h-full w-full flex items-center justify-center bg-[#00000080] backdrop-blur"}
        >
            <div
                className={"h-[250px] w-[320px] p-[20px] flex flex-col justify-between items-center m-auto rounded-[10px] border-black " +
                    "bg-white shadow-2xl border-solid border-[#DFDFDF] text-center"}
                onClick={(event)=>{event.stopPropagation();}}
            >
                <div className={"relative w-full"}>
                    <div className={"right-0 absolute z-[9999] cursor-pointer"} onClick={closeModal}>
                        <Image height={25} width={25} src={closeSvg} alt={"closeSvg"} />
                    </div>
                    <p className={"text-[18px] text-[#073B4C]"}>Join Splendor!</p>
                </div>
                <div className={"w-full flex items-start flex-col text-[#073B4C]"}>
                    <label htmlFor="wallet">Wallet Address</label>
                    <input
                        id="wallet"
                        className={"w-full mt-[5px] p-[10px] rounded-[10px] text-[16px] text-center text-[#073B4C] bg-[#e4e4e4] " +
                            "focus:outline-none"}
                        disabled
                        value={addressWallet}
                        //@ts-ignore
                        onChange={(e) => setAddr(e.target.value)}
                    ></input>
                    <p className="text-center text-[10px] mt-[10px] m-[auto]">Payments will be executed each 24 hours (12 hrs UTC-5)</p>
                </div>
                <button className={
                    "w-full text-[#073B4C] bg-white border-[#073B4C] border-[1px] rounded-[10px] p-[10px] " +
                    "hover:text-black hover:border-black"
                }
                onClick={handleAddAddress}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default RegisterModal;
