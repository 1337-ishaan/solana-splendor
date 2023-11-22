import {NextPage} from "next";
import Link from "next/link";
import {IMenuWikiItem} from "../../../menu/wiki/types";
import Image from "next/image";
import arrowLeft from "../../../../assets/icons/download/arrowLeft.svg";
import {useState} from "react";

const WikiMenuButton: NextPage<IMenuWikiItem> = ({name, selected, link, elements, isOpen}) => {
    const [open, setOpen] = useState(isOpen);
    return(
        <>
            <Link href={link}>
                <div
                    onClick={()=>setOpen(open=>!open)}
                    className={
                        `flex flex-row items-center pl-[5px] pr-[25px] py-[5px] mb-[5px] my-[0px]  
                    cursor-pointer rounded-[5px] justify-between
                    ${selected&&"bg-[#85A8E01A]"} hover:bg-[#85A8E01A]`
                    }
                >
                    <p className={`text-left ${selected?"text-[#3884FF]":"text-[#8899A8]"} ml-3 text-[15px]`}>{name}</p>
                    {
                        elements && <Image src={arrowLeft} alt={"arrowLeft"} />
                    }
                </div>
            </Link>

            {open&&elements&&<div className={"flex flex-col mb-[10px]"}>
                {elements.map(
                        ({name, selected, link}, key) =>
                            <div className={"mt-[10px] ml-[30px] cursor-pointer hover:bg-[#85A8E01A] py-[5px]"} key={key}>
                                <Link href={link}>
                                    <p className={`text-left ${selected ? "text-[#3884FF]" : "text-[#8899A8]"} ml-3 text-[15px]`}>{name}</p>
                                </Link>
                            </div>
                    )
                }
            </div>}
        </>
    )
}

export default WikiMenuButton;
