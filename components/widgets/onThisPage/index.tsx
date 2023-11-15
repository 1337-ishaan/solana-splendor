import {NextPage} from "next";
import Image from "next/image";
import logoMob from "../../../assets/icons/wiki/logoMob.svg";
import OnThisPageButton from "../../buttons/onThisPageButton";

const OnThisPage:NextPage = () => {
    const elements = [
        {
            text: "What is Splendor?",
            hash: "#whatIsSplendor"
        },
        {
            text: "Benefits and use cases of Splendor",
            hash: "#benefitsAndUseCases"
        },
        {
            text: "Developer Guide",
            hash: "#developerGuide"
        }
    ]
    return (
        <div className={"bg-black h-[200px] w-full relative max-[800px]:h-[150px]"}>
            <div className={"absolute right-[50%] left-[50%] w-[100px] h-full " +
                "flex flex-col items-center justify-center max-[800px]:hidden"}>
                <div className={"blur-[10px]"}>
                    <Image src={logoMob} alt={"logoMob"} width={100} height={100} />
                </div>
                <p className={"text-[40px] text-white absolute font-bold"}>
                    SPLENDOR
                </p>
            </div>

            <div className={"absolute right-0 pl-[10px] pt-[20px] pr-[20px]"}>
                <p className={"text-[#8899A8]"}>On this page</p>
                <div className={"flex flex-col"}>
                    {
                        elements.map(element=>
                            <OnThisPageButton {...element} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default OnThisPage
