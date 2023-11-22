import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
import nCoinsIcon from "../../../assets/icons/tokenomics/nCoins.svg";
import React, { useState, useEffect } from 'react'; 
import {ApiAdminPanel} from "../../../api/bittensor";

const CircleChartWidget = () => {
    Chart.register(ArcElement);

    const [totalDelegates, setTotalDelegates] = useState(0); 
    const [totalSubnets, setTotalSubnets] = useState(0); 

    useEffect(() => {
            const fetchData = async () => {
            const delegates = await ApiAdminPanel.getTotalDelegates();
            setTotalDelegates(delegates); 
        };
        fetchData();
    }, []);

    const data = {
        datasets: [{
            data: [40, 60],
            backgroundColor: [
                '#B14FFF',
                '#848484',
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
        }]
    };

    return (
        <div className={`min-w-[250px] h-full mt-[20px] py-[15px] px-[20px] justify-between flex-[2] flex-col items-start mr-1 rounded-[20px] flex 
            border-[#FFFFFF33] border-[1px] mr-[10px] relative bg-[#09081c] bg-opacity-40 max-[1000px]:h-[500px]`}>
            <div className={"flex flex-col justify-center w-full items-center"}>
                <div className={"max-[800px]:px-[30px] max-[800px]:mt-[10px] flex flex-row justify-between w-full"}>
                    <div className={"flex-col flex mb-[10px]"}>
                        <p className={"text-[#a0aec0] text-[12px]"}>
                            Total Supply
                        </p>
                        <div className={"flex flex-row"}>
                            <p className={"text-white text-[15px]"}>
                                21,000,000
                            </p>
                            <Image src={nCoinsIcon} alt={"nCoinsIcon"} />
                        </div>
                    </div>

                    <div className={"flex-col flex mb-[10px]"}>
                        <p className={"text-[#a0aec0] text-[12px]"}>
                            Circulating Supply
                        </p>
                        <div className={"flex flex-row"}>
                            <p className={"text-white text-[15px]"}>
                                221,000,000
                            </p>
                            <Image src={nCoinsIcon} alt={"nCoinsIcon"} />
                        </div>
                    </div>
                </div>
                <div className={"w-[220px] h-[220px]"}>
                    <Doughnut
                        data={data}
                        options={{
                            maintainAspectRatio: true,
                            cutout: 80,
                            responsive: true,
                        }}
                        height={200}
                        width={200}
                    />
                </div>
            </div>

            <div className={"max-[800px]:flex max-[800px]:flex-col max-[800px]:my-[10px] max-[1000px]:items-center max-[1000px]:w-full"}>
                <p className={"text-[#B14FFF] pb-[10px] max-[1000px]:text-center text-[12px]"}>•Circulating Delegated/Staked (0.00% of 5.39m)</p>
                <p className={"text-[#F19E38] pb-[10px] max-[1000px]:text-center text-[12px]"}>•Circulating Free (100% of 5.39m.)</p>
                <p className={"text-[#909090] pb-[10px] max-[1000px]:text-center text-[12px]"}>•Unissued (74.33% of 21m)</p>
                <p className={"text-[#B14FFF] pb-[10px] max-[1000px]:text-center text-[12px]"}>•Total Delegates: {totalDelegates}</p>
               {/*  <p className={"text-[#B14FFF] pb-[3px] max-[1000px]:text-center"}>•Total Subnets: {totalSubnets}</p> Línea para mostrar el total de subnets */}
            </div>
        </div>
    )
}

export default CircleChartWidget;
