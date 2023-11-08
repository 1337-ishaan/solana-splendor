import {NextPage} from "next";
import {IMainWalletScreen} from "./types";
import createSvg from "../../../assets/icons/wallet/create.svg";
import symbolSvg from "../../../assets/icons/wallet/symbol.svg";
import accessSvg from "../../../assets/icons/wallet/access.svg";
import importSvg from "../../../assets/icons/wallet/import.svg";
import Image from "next/image";

const MainWalletScreen: NextPage<IMainWalletScreen> = ({createHandler, accessHandler, importHandler, numberOf}) => {
    return(
        <div className={"flex flex-col justify-between px-[20px] py-[70px] h-full absolute w-full"}>
            <p className={"text-[20px] text-center"}><Image src={symbolSvg} alt={'symbolSvg'} /> {numberOf}</p>

            <div className={"flex flex-row justify-center"}>
                <div className={"flex flex-col"}>
                    <button
                        className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                        onClick={createHandler}
                    >
                        <Image src={createSvg} alt={"createSvg"} />
                    </button>
                    <p className={"text-[12px]"}>Create</p>
                </div>

                <div className={"flex flex-col mx-[16px]"}>
                    <button
                        className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                        onClick={accessHandler}
                    >
                        <Image src={accessSvg} alt={"accessSvg"} />
                    </button>
                    <p className={"text-[12px]"}>Access</p>
                </div>

                <div className={"flex flex-col"}>
                    <button
                        className={"h-[48px] w-[48px] text-center rounded-[7px] bg-[#282828] cursor-pointer"}
                        onClick={importHandler}
                    >
                        <Image src={importSvg} alt={"importSvg"} />
                    </button>
                    <p className={"text-[12px]"}>Import</p>
                </div>
            </div>
        </div>
    )
}

export default MainWalletScreen;
