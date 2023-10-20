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

const TotalEarningsWidget = () => {
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

    return (
        <div className={`min-w-[450px] h-[420px] mt-[20px] py-[15px] px-[20px] justify-between flex-[6] flex-col 
            items-start mr-1 rounded-[20px] flex bg-[#181537] bg-opacity-90
            border-[#FFFFFF33] border-[1px] mr-[10px] max-[800px]:min-w-full`}>
            <div className={"relative"}>
                <p className={"text-white text-[20px] text-white"}>Total Earnings</p>
                <p className={"text-[#a0aec0] text-[14px]"}><span className={"text-[#00b574]"}>(+5)</span> in 1st month</p>
            </div>
            <div className={"w-full mt-[20px] pb-[20px]"}>
                <Line options={options} height={120} data={data} />
            </div>
        </div>
    )
}

export default TotalEarningsWidget;
