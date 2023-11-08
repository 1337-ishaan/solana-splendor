import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import StatisticsInNumber from "./components/StatisticsInNumber";
import Image from "next/image";
import splendorIcon from "../../../assets/icons/tokenomics/splendorCoins.svg";
import useMobileDetect from "../../../common/useMobileDetect";

const TokenomicsWaveWidget = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );
    const {isMobile} = useMobileDetect();

    const options = {
        responsive: true,
        tension: 0.3,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };


    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map(() => Math.floor(Math.random() * 1000)),
                borderColor: "#B14FFF",
                backgroundColor: "white",
                fill: {
                    target: "origin", // 3. Set the fill options
                    above: "rgba(188, 143, 241, 0.13)"
                }
            },
        ],
    };

    const statisticsInNumbers:IStatisticsInNumber[][] = [
        [
            {title:"Market Cap",value:"$280.38m"},
            {title:"Finalized blocks",value:"1,416,750"},
        ],
        [
            {title:"24h SPL Mined",value:"124 SPL"},
            {title:"Delegations",value:"21,711,982 SPL"},
        ],
        [
            {title:"Validating APY",value:"25.99%"},
            {title:"Total Accounts",value:"46,750"},
        ],
        [
            {title:"Staking APY",value:"21.31%"},
            {title:"Transfers",value:"86,283"},
        ],
    ]

    return (
        <div className={`min-w-[450px] mt-[20px] py-[15px] px-[20px] justify-between flex-[6] flex-col 
            items-start mr-1 rounded-[20px] flex bg-opacity-90
            border-[#FFFFFF33] border-[1px] mr-[10px] max-[800px]:min-w-full ${isMobile()?"h-[750px]":"h-full"}`}>
            <div className={"flex-col flex w-full"}>
                <div className={"flex flex-row justify-between w-full items-start max-[1100px]:flex-col"}>
                    <div className={"flex flex-row"}>
                        <Image src={splendorIcon} alt={"splendorIcon"} width={60} height={60}/>
                        <div className={"flex flex-col ml-[10px]"}>
                            <p className={"text-[#a0aec0] text-[13px] max-[800px]:text-white"}>Splendor price</p>
                            <p className={"text-white text-[30px]"}>$10  <span className={"text-[#00b574] text-[14px]"}>+39%</span></p>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-between w-[70%] max-[1100px]:w-full max-[1100px]:py-[10px] max-[800px]:flex-col"}>
                        {
                            statisticsInNumbers.map((elements, key)=>(
                                <div className={"flex flex-col"} key={key}>
                                    {
                                        elements.map(
                                            (element,key)=>
                                                <StatisticsInNumber {...element} key={key} />
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p className={"text-white text-[25px] max-[800px]:hidden"}>Accounts</p>
            </div>
            <div className={"w-full mt-[20px] pb-[20px]"}>
                <Line options={options} {...isMobile()?{height: 200}:{height: 120}} data={data} />
            </div>
        </div>
    )
}

export default TokenomicsWaveWidget;
