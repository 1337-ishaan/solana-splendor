import {NextPage} from "next";
import {IMenuButton} from "./types";
import Image from "next/image";
import Link from "next/link";

const MenuButton: NextPage<IMenuButton> = ({name, selected, icon, link}) => {
    return(
        <Link href={link}>
            <div
                className={
                    `flex flex-row items-center px-[15px] py-[10px] mb-[10px] my-[0px] mx-[25px] 
                 max-[1100px]:mx-[15px] cursor-pointer rounded-[15px] max-[800px]:justify-center
                ${selected&&"bg-[#1b1e37]"}`
                }
            >
                <div className={`p-[10px]
                ${selected?'min-[801px]:bg-[#4f49f0] min-[801px]:rounded-[15px] min-[801px]:border-[#FFFFFF33] min-[801px]:border-[1px]':
                    'bg-[#1a1f37] rounded-[15px]'}`
                }>
                    <div className={"w-[20px] h-[20px] text-center"}>
                        <Image src={icon} alt={"MenuButtonImg"} />
                    </div>
                </div>
                <p className={"text-center text-white ml-3 text-[15px] max-[800px]:hidden"}>{name}</p>
            </div>
        </Link>
    )
}

export default MenuButton;
