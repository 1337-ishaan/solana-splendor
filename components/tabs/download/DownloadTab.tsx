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
            urlDownload: "https://www.dropbox.com/scl/fi/yn6e9uvfze78t9owim3ti/splendor-blockchain-miner-Setup-1.0.1.exe?rlkey=qps2ogndlb36fukbfwft4rrib&dl=1",
        },
        {
            id: 4,
            title: "Ubuntu",
            icon: ubuntuSvg,
            urlDownload: "https://www.dropbox.com/scl/fi/ug1zywmvq6zyoaxz77efa/splendor-blockchain-miner_1.0.0_amd64.zip?rlkey=nozl03v392hzl0lsryyk7fk4d&dl=1",
        },
        {
            id: 2,
            title: "Apple Silicon",
            icon: macM1Svg,
            urlDownload: "https://www.dropbox.com/scl/fi/umjjpk3oaav6z2g33goi7/splendor-blockchain-miner-1.0.1-arm64.dmg?rlkey=uze0k8bmqm2hsbhbyodlcdsuv&dl=1"
        },
        {
            id: 3,
            title: "Apple Intel",
            icon: macIntelSvg,
            urlDownload: "https://www.dropbox.com/scl/fi/umjjpk3oaav6z2g33goi7/splendor-blockchain-miner-1.0.1-arm64.dmg?rlkey=uze0k8bmqm2hsbhbyodlcdsuv&dl=1"
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