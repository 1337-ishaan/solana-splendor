import Image from "next/image";
import downloadScreen from "../../../assets/icons/download/downloadScreen.png";
import appleSvg from "../../../assets/icons/download/apple.svg";
import windowSvg from "../../../assets/icons/download/windows.svg";
import ubuntuSvg from "../../../assets/icons/download/ubuntu.svg";

const Download = () => {
    return(
        <div className={"flex flex-col w-full h-full px-[20px] pb-[20px]"}>
            <p className="mt-[70px] text-center text-[35px] font-bold text-white pt-[0px] pb-[10px]">Download Dashboard</p>
            <p className="mt-[50px] text-center text-[25px] font-thin text-white pt-[0px] pb-[10px] mx-[15%]">
                Download the app to get started using the Dashboard Platform today. Or, if you prefer a browser experience, you can try the web version of Dashboard.
            </p>

            <div className="mt-[80px] flex flex-row flex-1 justify-between max-[800px]:flex-col">
                <div className={"flex flex-col flex-2 pl-[50px] pr-[30px]"}>
                    <p className={"text-left text-white text-[30px] max-[800px]:text-center"}>The Dashboard app</p>
                    <p className={"text-left text-white font-thin mt-[30px] max-[800px]:text-center"}>Download the app to get started with the Dashboard Platform.</p>
                    <div className={"mt-[30px] flex flex-row justify-between"}>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer mr-[5px]"}>
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={appleSvg} alt={"appleSvg"} />
                                <p className={"ml-[5px]"}>Mac Intel Chip</p>
                            </div>
                        </button>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer"}>
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={appleSvg} alt={"appleSvg"} />
                                <p className={"ml-[5px]"}>
                                    Mac Apple Chip
                                </p>
                            </div>
                        </button>
                    </div>
                    <div className={"mt-[30px] flex flex-row justify-between"}>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer mr-[5px]"}>
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={windowSvg} alt={"windowSvg"} />
                                <p className={"ml-[5px]"}>
                                    Windows
                                </p>
                            </div>
                        </button>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer"}>
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={ubuntuSvg} alt={"ubuntuSvg"} />
                                <p className={"ml-[5px]"}>
                                    Ubuntu
                                </p>
                            </div>
                        </button>
                    </div>
                    <p className={"mt-[30px] text-white text-[14px] font-thin max-[800px]:mb-[30px] max-[800px]:text-center"}>
                        By downloading and using Dashboard, I agree to the Privacy Policy and Terms.
                    </p>
                </div>
                <div className={"flex flex-3"}>
                    <Image src={downloadScreen} alt={"downloadScreen"} width={896} height={560} />
                </div>
            </div>
        </div>
    )
}

export default Download;
