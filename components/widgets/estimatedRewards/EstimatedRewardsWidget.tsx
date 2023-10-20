import {ArcElement, Chart} from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import estimatedRewardsIconButton from "../../../assets/icons/dashboard/estimatedRewardsIconButton.svg";
import Image from "next/image";
import React from "react";

const EstimatedRewardsWidget = () => {
    Chart.register(ArcElement);
    const data = {
        datasets: [{
            data: [64, 36],
            backgroundColor: [
                '#433462',
                '#8001ff',
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
        }]
    };

    return (
        <div className={`bg-[#09081c] bg-opacity-40 min-w-[450px] h-[300px] mt-[20px] py-[15px] px-[20px] justify-between 
            flex-[4] flex-col items-start mr-1 rounded-[20px] flex  
            border-[#FFFFFF33] border-[1px] mr-[10px] max-[800px]:min-w-full`}>
            <div className={"relative w-full"}>
                <div className={"flex flex-row justify-between"}>
                    <p className={"text-white text-[18px] text-white font-bold"}>Estimated rewards in 30 days</p>
                    <Image className={"cursor-pointer"} src={estimatedRewardsIconButton} alt={"estimatedRewardsIconButton"} />
                </div>
                <div className={"flex flex-row mt-[10px] mx-[10px] w-full max-[1100px]:justify-around"}>
                    <div className={"flex flex-col justify-evenly mr-[20px] min-h-full"}>
                        <div className={"flex flex-col items-start justify-center p-[15px] pb-[20px] mb-[20px]" +
                            " text-white rounded-[20px] border-[#FFFFFF33] border-[1px] min-w-[200px] " +
                            "bg-gradient-to-r from-[#20053b] to-[#0e051d]"}>
                            <p className={"text-[12px] text-[#a0aec0]"}>Rest of profits</p>
                            <p className={"text-[18px] text-white"}>+1.7 SPL</p>
                        </div>
                        <div className={"flex flex-col items-start justify-center p-[15px] pb-[20px] " +
                            "text-white rounded-[20px] border-[#FFFFFF33] border-[1px] min-w-[200px] bg-[#261d3f]"}>
                            <p className={"text-[12px] text-[#a0aec0]"}>Days to end cycle</p>
                            <p className={"text-[18px] text-white"}>17 days</p>
                        </div>
                    </div>

                    <div className={"relative w-[200px] h-[200px]"}>
                        <div className={"absolute flex justify-center items-center flex-row h-full w-full"}>
                            <div className={"text-white"}>
                                <p className={"text-center text-[40px]"}>9.3</p>
                                <p className={"text-center text-[13px] text-[#a0aec0]"}>Total Rewards</p>
                            </div>
                        </div>
                        <Doughnut
                            data={data}
                            options={{
                                maintainAspectRatio: true,
                                cutout: 85,
                                responsive: true,
                            }}
                            height={200}
                            width={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstimatedRewardsWidget;
