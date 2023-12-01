import {NextPage} from "next";
import {IInfoWidget} from "./types";
import Image from "next/image";

const InfoWidget: NextPage<IInfoWidget> = ({title,rate,value,icon,link}) => {
    return (
        <div className={`w-full mt-[10px] py-[15px] px-[20px] justify-between flex-1 items-center mr-1 rounded-[20px] flex 
            border-[#FFFFFF33] border-[1px] mr-[10px] bg-gradient-to-r from-[#090815] to-[#15121e]`}>
            <div className={"flex flex-col justify-evenly h-full"}>
                <p className={"text-[#a0aec0] text-[30px] max-[800px]:text-[22px]"}>{title}</p>
                <p className={"text-white text-[24px] max-[800px]:text-[18px]"}>
                    {value}
                    {rate !== undefined && (
                        <span className={`text-[12px] ml-[5px] ${rate > 0 ? 'text-[#00b574]' : 'text-[#e3191a]'}`}>
                            {rate > 0 ? `+${rate}%` : `${rate}%`}
                        </span>
                    )}
                </p>

            </div>
            <a href={link}>
                <div className={'bg-[#5600c3] rounded-[10px] p-[10px] text-center'}>
                    <div className={"w-[50px] h-[50px] text-center"}>
                        <Image height={50} width={50} src={icon} alt={"InfoWidgetIcon"} />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default InfoWidget;
