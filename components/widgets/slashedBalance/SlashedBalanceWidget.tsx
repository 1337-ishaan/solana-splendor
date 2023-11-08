import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {ISlashedItem} from "./components/SlashedItem/types";
import {ApiAdminPanel} from "../../../api/bittensor";
import users from "../../../assets/icons/dashboard/users.svg";
import clicks from "../../../assets/icons/dashboard/clicks.svg";
import sales from "../../../assets/icons/dashboard/sales.svg";
import items from "../../../assets/icons/dashboard/items.svg";
import SlashedItem from "./components/SlashedItem";
import {useWindowSize} from "../../../common/useWindowSize";
import useMobileDetect from "../../../common/useMobileDetect";

async function fetchMinersAndBuildObject() {
    const totalMiners = await ApiAdminPanel.getTotalMiners();

    const obj = {
        title: "Miners",
        completed: 90,
        value: totalMiners.toString(),
        icon: clicks
    };

    return obj;
}
const SlashedBalanceWidget = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const [totalMiners, setTotalMiners] = useState("0");

    const {height} = useWindowSize();
    const {isMobile} = useMobileDetect();
    const [barHeight, setBarHeight] = useState<number>();

    useEffect(()=>{
        if(!barHeight&&height){
            setBarHeight(isMobile()?180:(h=>h<110?110:h)((height - 120)*0.27));
        }
    }, [height, barHeight])

    useEffect(() => {
        const fetchData = async () => {
            const miners = await fetchMinersAndBuildObject();
            setTotalMiners(miners.value);
        };
        fetchData();
    }, []);
    const options = {
        maintainAspectRatio: isMobile(),
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['', '', '', '', '', '', ''];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.floor(Math.random() * 1000)),
                backgroundColor: '#fff',
                maxBarThickness: 5,
            },
        ],
    };

    const slashedItems: ISlashedItem[] = [
        {
            title: "Total Users",
            completed: 80,
            value: "32,984",
            icon: users
        },
        {
            title: "Miners",
            completed: 90,
            value: totalMiners,
            icon: clicks
        },
        {
            title: "Validators",
            completed: 50,
            value: "279",
            icon: sales
        },
        {
            title: "Stakers",
            completed: 70,
            value: "320",
            icon: items
        }
    ]

    return (
        <div className={`min-w-[450px] h-full max-[1100px]:h-[500px] mt-[20px] justify-evenly max-[1100px]:mb-[20px] py-[8px] px-[20px] 
            flex-[4] flex-col items-start mr-1 rounded-[20px] flex bg-[#19152a] bg-opacity-40 
            border-[#FFFFFF33] border-[1px] mr-[10px] max-[800px]:min-w-full 
            max-[800px]:h-[420px] max-[800px]:py-[15px]`}>
            <div className={"w-full rounded-[20px] border-[#FFFFFF33] border-[1px] p-[20px] bg-gradient-to-r from-[#382b57] to-[#181424]"}>
                {
                    barHeight&&
                    <Bar id={"BarSlashedBalanceWidget"} width={400} height={barHeight} options={options} data={data} />
                }
            </div>
            <div className={"relative mt-[5px] text-[12px]"}>
                <p className={"text-white text-[20px] text-white"}>Users into the network</p>
                <p className={"text-[#a0aec0]"}><span className={"text-[#00b574]"}>(+230 users) </span>last week total</p>
            </div>
            <div className={"flex flex-row justify-between w-full mt-[5px]"}>
                {
                    slashedItems.map((value, index)=><SlashedItem {...value} key={index} />)
                }
            </div>
        </div>
    )
}

export default SlashedBalanceWidget;
