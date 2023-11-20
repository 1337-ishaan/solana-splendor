import {NextPage} from "next";
import {IWikiMenuButton} from "./types";
import Link from "next/link";

const WikiMenuButton: NextPage<IWikiMenuButton> = ({name, selected, link}) => {
    return(
        <Link href={link}>
            <div
                className={
                    `flex flex-row items-center pl-[5px] pr-[25px] py-[5px] mb-[5px] my-[0px]  
                    cursor-pointer rounded-[5px] max-[800px]:justify-center
                    ${selected&&"bg-[#85A8E01A]"}`
                }
            >
                <p className={`text-center ${selected?"text-[#3884FF]":"text-[#8899A8]"} ml-3 text-[15px] max-[800px]:hidden`}>{name}</p>
            </div>
        </Link>
    )
}

export default WikiMenuButton;
