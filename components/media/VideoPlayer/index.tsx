import {NextPage} from "next";
import {IVideoPlayer} from "./types";
import React, {useRef, useState} from "react";
import StartMedia from "../../../assets/icons/common/startMedia.svg";
import Image from "next/image";

const VideoPlayer: NextPage<IVideoPlayer> = (props) => {
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
            " h-[80%] w-[80%] max-[800px]:w-full"}>
            <video {...props}
                   {...playing&&{...{controls:true}}}
                   ref={refPlayer}
                   onPlay={playerStarted}
                   onPause={playerStopped}
                   onEnded={playerStopped}
                   className={"h-full w-full"}
            />
            {/*{
                !playing&&
                <div className={"absolute w-full h-full"} onClick={startPlayer}>
                    <div className={"absolute top-[50%] left-[50%] translate-x-[-50] translate-y-[-50] " +
                        "h-[50px] w-[50px] max-[800px]:h-[30px] max-[800px]:w-[30px] cursor-pointer"}>
                        <Image src={StartMedia} alt={"StartMedia"} width={60} height={60} />
                    </div>
                </div>
            }*/}
        </div>
    )
}

export default VideoPlayer
