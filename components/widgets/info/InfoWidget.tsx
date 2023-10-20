import {NextPage} from "next";
import {IInfoWidget} from "./types";
import Image from "next/image";

const InfoWidget: NextPage<IInfoWidget> = ({title,rate,value,icon,link}) => {
    return (
        <div className={`min-w-[250px] max-w-[400px] mt-[10px] py-[15px] px-[20px] justify-between flex-1 items-center mr-1 rounded-[20px] flex 
            border-[#FFFFFF33] border-[1px] mr-[10px] bg-gradient-to-r from-[#090815] to-[#15121e] max-[800px]:max-w-full max-[800px]:w-full`}>
            <div>
                <p className={"text-[#a0aec0] text-[12px]"}>{title}</p>
                <p className={"text-white text-[18px]"}>{value}
                    <span className={`text-[12px] ml-[5px] ${rate>0?'text-[#00b574]':'text-[#e3191a]'}`}>{rate>0?`+${rate}%`:`${rate}%`}</span>
                </p>
            </div>
            <a href={link}>
                <div className={'bg-[#5600c3] rounded-[10px] p-[10px]'}>
                    <Image height={20} width={20} src={icon} alt={"InfoWidgetIcon"} />
                </div>
            </a>
        </div>
    )
}

export default InfoWidget;
