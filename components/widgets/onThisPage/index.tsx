import {NextPage} from "next";
import Image from "next/image";
import logoMob from "../../../assets/icons/wiki/logoMob.svg";
import OnThisPageButton from "../../buttons/onThisPageButton";
import {IOnThisPage} from "./types";

const OnThisPage:NextPage<IOnThisPage> = ({menuElements}) => {
    return (
        <div className={`bg-black h-[200px] w-full relative max-[800px]:h-[150px] ${!menuElements.length&&"max-[800px]:hidden"}`}>
            <div className={"absolute right-[50%] left-[50%] w-[100px] h-full " +
                "flex flex-col items-center justify-center max-[800px]:hidden"}>
                <div className={"blur-[10px]"}>
                    <Image src={logoMob} alt={"logoMob"} width={100} height={100} />
                </div>
                <p className={"text-[40px] text-white absolute font-bold"}>
                    SPLENDOR
                </p>
            </div>

            {menuElements.length&&<div className={"absolute right-0 pl-[10px] pt-[20px] pr-[20px]"}>
                <p className={"text-[#8899A8]"}>On this page</p>
                <div className={"flex flex-col"}>
                    {
                        menuElements.map((element, key) =>
                            <OnThisPageButton {...element} key={key}/>
                        )
                    }
                </div>
            </div>}
        </div>
    )
}

export default OnThisPage
