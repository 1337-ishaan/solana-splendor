import Image from "next/image";

import software_app from "../../../assets/icons/download/Splendor_Core_interface.png";
import windowsSvg from "../../../assets/icons/download/Group 205.svg";
import macM1Svg from "../../../assets/icons/download/Group 206.svg";
import macIntelSvg from "../../../assets/icons/download/intel.svg";
import ubuntuSvg from "../../../assets/icons/download/Vector.svg";

const Download = () => {
    const elements = [
        {
            id: 1,
            title: "Windows",
            icon: windowsSvg,
            urlDownload: "https://www.dropbox.com/scl/fi/pxl477xeteve265vsntty/blockchain-downloader-Setup-1.0.0-3.exe?rlkey=0lzs4urhs7fhopdi3cvy9crmt&dl=1",
        },
        {
            id: 4,
            title: "Ubuntu",
            icon: ubuntuSvg,
        },
        {
            id: 2,
            title: "Apple Silicon",
            icon: macM1Svg,
            urlDownload: "https://www.dropbox.com/scl/fi/7ft1ckfe04bps5z0bue89/blockchain-downloader-1.0.0-arm64.dmg?rlkey=1pd129unjit0uposvac3vc5cg&dl=1"
        },
        {
            id: 3,
            title: "Apple Intel",
            icon: macIntelSvg,
            urlDownload: "https://www.dropbox.com/scl/fi/7ft1ckfe04bps5z0bue89/blockchain-downloader-1.0.0-arm64.dmg?rlkey=1pd129unjit0uposvac3vc5cg&dl=1"
        },
    ]
    return (
        <div className={"flex flex-col w-full h-full px-[6px] pb-[6px]"}>
            <div className={"flex flex-3 mt-[50px] mx-auto w-[700px] max-[1000px]:w-full max-[1000px]:px-[10px]"}>
                <Image src={software_app} alt={"software_app"} />
            </div>
            <p className="mt-[50px] text-center text-[18px] font-thin text-white pt-[0px] pb-[2px] mx-[15%]">
                Download splendor core and start mining.
            </p>
            <div className={"flex flex-wrap mx-auto gap-[40px] mt-[40px] items-center justify-center"}>
                {elements.map((item) => (
                    <div key={item.id} className={"flex flex-col items-center justify-center w-[120px]"}>
                        <div className={"max-[800px]:h-[30px] flex"}>
                            {item.urlDownload ? (
                                <a href={item.urlDownload} download className="cursor-pointer">
                                    <Image height={50} src={item.icon} alt={item.title} />
                                </a>
                            ) : (
                                <Image height={50} src={item.icon} alt={item.title} />
                            )}
                        </div>
                        <p className={"text-white text-[16px] font-thin mt-[10px]"}>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Download;