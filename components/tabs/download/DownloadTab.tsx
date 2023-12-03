import Image from "next/image";
import downloadScreen from "../../../assets/icons/download/desktop.png";
import appleSvg from "../../../assets/icons/download/apple.svg";
import windowSvg from "../../../assets/icons/download/windows.svg";
import ubuntuSvg from "../../../assets/icons/download/ubuntu.svg";

const Download = () => {
    return(
        <div className={"flex flex-col w-full h-full px-[6px] pb-[6px]"}>
            <p className="mt-[40px] text-center text-[22px] font-bold text-white pt-[0px] pb-[2px]"></p>
            <p className="mt-[30px] text-center text-[18px] font-thin text-white pt-[0px] pb-[2px] mx-[15%]">
                Download splendor core and start mining.
            </p>

            <div className="mt-[80px] flex flex-row flex-1 justify-between max-[800px]:flex-col">
                <div className={"flex flex-col flex-2 pl-[50px] pr-[30px]"}>
                    <p className={"text-left text-white text-[30px] max-[800px]:text-center"}>Splendor Core</p>
                    <p className={"text-left text-white font-thin mt-[30px] max-[800px]:text-center"}></p>
                    <div className={"mt-[30px] flex flex-row justify-between"}>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer mr-[5px]"}>
                            <a
                                href="https://firebasestorage.googleapis.com/v0/b/uploadsplendorfiles.appspot.com/o/blockchain-downloader-1.0.0.zip?alt=media&token=e6182494-eae4-4570-9c50-a333994ce5e6"
                                target="_blank"  // Esto abre el enlace en una nueva pestaña o ventana
                                rel="noopener noreferrer"  // Se recomienda para seguridad
                              >
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={appleSvg} alt={"appleSvg"} />
                                <p className={"ml-[5px]"}>Mac Intel Chip</p>
                            </div>
                                </a>
                        </button>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer"}>
                            <a
                                href="https://firebasestorage.googleapis.com/v0/b/uploadsplendorfiles.appspot.com/o/blockchain-downloader-1.0.0.zip?alt=media&token=e6182494-eae4-4570-9c50-a333994ce5e6"
                                target="_blank"  // Esto abre el enlace en una nueva pestaña o ventana
                                rel="noopener noreferrer"  // Se recomienda para seguridad
                              >
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={appleSvg} alt={"appleSvg"} />
                                <p className={"ml-[5px]"}>
                                    Mac Apple Chip
                                </p>
                            </div>
                            </a>
                        </button>
                    </div>
                    <div className={"mt-[30px] flex flex-row justify-between"}>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer mr-[5px]"}>
                            <a
                                href="https://firebasestorage.googleapis.com/v0/b/uploadsplendorfiles.appspot.com/o/blockchain-downloader%20Setup%201.0.0.zip?alt=media&token=fbefadd8-3638-4aaf-84cd-f66e35e843e0"
                                target="_blank"  // Esto abre el enlace en una nueva pestaña o ventana
                                rel="noopener noreferrer"  // Se recomienda para seguridad
                              >
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={windowSvg} alt={"windowSvg"} />
                                <p className={"ml-[5px]"}>
                                    Windows
                                </p>
                            </div>
                            </a>
                        </button>
                        <button className={"bg-[#4f49f0] w-[200px] h-[40px] rounded-[5px] text-white cursor-pointer"}>
                            <a
                                href=""
                                target="_blank"  // Esto abre el enlace en una nueva pestaña o ventana
                                rel="noopener noreferrer"  // Se recomienda para seguridad
                              >
                            <div className={"flex flex-row justify-center items-center"}>
                                <Image height={18} width={18} src={ubuntuSvg} alt={"ubuntuSvg"} />
                                <p className={"ml-[5px]"}>
                                    Ubuntu
                                </p>
                            </div>
                                </a>
                        </button>
                    </div>
                </div>
                <div className={"flex flex-3"}>
                    <Image src={downloadScreen} alt={"downloadScreen"} width={896} height={560} />
                </div>
            </div>
        </div>
    )
}

export default Download;
