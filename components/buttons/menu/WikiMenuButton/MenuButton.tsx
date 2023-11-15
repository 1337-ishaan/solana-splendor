import {NextPage} from "next";
import {IWikiMenuButton} from "./types";
import Link from "next/link";

const WikiMenuButton: NextPage<IWikiMenuButton> = ({name, selected, link}) => {
    return(
        <Link href={link}>
            <div
                className={
                    `flex flex-row items-center px-[15px] py-[5px] mb-[5px] my-[0px]  
                 max-[1100px]:mx-[15px] cursor-pointer rounded-[15px] max-[800px]:justify-center
                ${selected&&"bg-[#1b1e37]"}`
                }
            >
                <p className={"text-center text-[#8899A8] ml-3 text-[15px] max-[800px]:hidden"}>{name}</p>
            </div>
        </Link>
    )
}

export default WikiMenuButton;
