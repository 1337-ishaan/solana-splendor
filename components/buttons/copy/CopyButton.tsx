import {NextPage} from "next";
import {ICopyButton} from "./types";
import {toast} from "react-toastify";
import Image from "next/image";
import copySvg from "../../../assets/icons/wallet/copy.svg";

const CopyButton: NextPage<ICopyButton> = ({text}) => {
    return(
        <div
            onClick={()=>{
                navigator.clipboard.writeText(text)
                    .then(() => toast('Copied to clipboard',
                        { hideProgressBar: true, autoClose: 2000, type: 'success' ,position:'top-center' }
                    ))
            }}
            className={"cursor-pointer h-[25px] w-[25px]"}
        >
            <Image width={25} height={25} src={copySvg} alt={"copySvg"} />
        </div>
    )
}

export default CopyButton
