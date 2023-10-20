import Image from "next/image";

const SlashedItem = ({title, icon, completed, value}:any) => {
    return(
        <div>
            <div className={"flex flex-row"}>
                <div className={"rounded-[5px] bg-[#654c91] p-[5px]"}>
                    <Image src={icon} alt={"SlashedItemImg"}/>
                </div>
                <p className={"ml-[10px] text-[#a0aec0] text-[14px]"}>{title}</p>
            </div>

            <p className={'text-[20px] text-white text-[17px]'}>{value}</p>
            <div className={"h-[2px] w-full rounded-[20px] mt-[5px] bg-[#707281]"}>
                <div className={`h-[2px] bg-[#654c91]`} style={{width: `${completed}%`}} />
            </div>
        </div>
    )
}

export default SlashedItem;
