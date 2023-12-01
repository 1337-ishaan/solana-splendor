import {NextPage} from "next";
import {IVideoPlayer} from "./types";
import React, {useRef, useState} from "react";
import StartMedia from "../../../assets/icons/common/startMedia.svg";
import Image from "next/image";

const SdrVideoPlayer: NextPage<IVideoPlayer> = (props) => {
    const [playing, setPlaying] = useState(true)
    const refPlayer = useRef<any>()

    const playerStopped = () => {
        //setPlaying(false);
    }

    const playerStarted = () => {
        //setPlaying(true);
    }
    const startPlayer = (event: any) => {
        /*if(event.detail===2){
            if (refPlayer?.current?.requestFullscreen) {
                refPlayer?.current?.requestFullscreen();
            } else if (refPlayer?.current?.webkitRequestFullscreen) {
                refPlayer?.current?.webkitRequestFullscreen();
            } else if (refPlayer?.current?.msRequestFullscreen) {
                refPlayer?.current?.msRequestFullscreen();
            }
        }*/

        refPlayer?.current?.play();
    }


    return(
        <div className={"relative flex justify-center rounded-[10px] border-[1px] border-[#0000003B] m-auto " +
            " h-[80%] w-[60%] max-[800px]:w-full"}>
            <video {...props}
                   {...playing&&{...{controls:true}}}
                   ref={refPlayer}
                   onPlay={playerStarted}
                   onPause={playerStopped}
                   onEnded={playerStopped}
                   className={"h-full w-full"}
            />
        </div>
    )
}

export default SdrVideoPlayer
