import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {ISlashedItem} from "./components/SlashedItem/types";
import users from "../../../assets/icons/dashboard/users.svg";
import clicks from "../../../assets/icons/dashboard/clicks.svg";
import sales from "../../../assets/icons/dashboard/sales.svg";
import items from "../../../assets/icons/dashboard/items.svg";
import SlashedItem from "./components/SlashedItem";

const SlashedBalanceWidget = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
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
            value: "15",
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
        <div className={`min-w-[450px] h-[420px] max-[1100px]:h-[500px] mt-[20px] max-[1100px]:justify-between max-[1100px]:mb-[20px] py-[15px] px-[20px] 
            flex-[4] flex-col items-start mr-1 rounded-[20px] flex bg-[#19152a] bg-opacity-40 
            border-[#FFFFFF33] border-[1px] mr-[10px] max-[800px]:min-w-full`}>
            <div className={"w-full rounded-[20px] border-[#FFFFFF33] border-[1px] p-[20px] bg-gradient-to-r from-[#382b57] to-[#181424]"}>
                <Bar width={400} height={180} options={options} data={data} />
            </div>
            <div className={"relative mt-[5px] text-[12px]"}>
                <p className={"text-white text-[20px] text-white"}>Users into the network</p>
                <p className={"text-[#a0aec0]"}><span className={"text-[#00b574]"}>(+230 users) </span>last week total</p>
            </div>
            <div className={"flex flex-row justify-between w-full mt-[10px] mb-[10px]"}>
                {
                    slashedItems.map((value, index)=><SlashedItem {...value} key={index} />)
                }
            </div>
        </div>
    )
}

export default SlashedBalanceWidget;
