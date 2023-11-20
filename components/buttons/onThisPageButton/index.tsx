import {NextPage} from "next";
import {IOnThisPageButton} from "./types";
import Link from "next/link";
import {useRouter} from "next/router";
import {useMemo} from "react";
import {useIsMounted} from "../../../hooks/useIsMounted/useIsMounted";

const OnThisPageButton:NextPage<IOnThisPageButton> = ({hash, text}) => {
    const { asPath } = useRouter();
    const isMounted = useIsMounted();
    const isActive = useMemo(()=>isMounted&&`#${asPath.split('#')[1]}` === hash,[asPath, hash,isMounted]);
    return(
        <Link href={hash}>
            <div className={"flex flex-row relative"}>
                {isActive&&<div className={"w-[1px] h-full bg-[#3884FF] left-[-10px] absolute"}></div>}
                <p className={`${!isActive?"text-[#5C6975]":"text-[#3884FF]"} text-[12px]`}>{text}</p>
            </div>
        </Link>
    )
}

export default OnThisPageButton
