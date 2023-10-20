import {ArcElement, Chart} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import Image from "next/image";
import stakedBalanceDiagramMiddleIcon from "../../../assets/icons/dashboard/stakedBalanceDiagramMiddleIcon.svg";

const TotalStakedBalanceWidget = () => {
    Chart.register(ArcElement);
    const data = {
        datasets: [{
            data: [60,40],
            backgroundColor: [
                '#433462',
                '#8001ff',
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
        }]
    };
    return (
        <div className={`min-w-[250px] h-[300px] mt-[20px] py-[15px] px-[20px] justify-between flex-[2] flex-col items-start mr-1 rounded-[20px] flex 
            border-[#FFFFFF33] border-[1px] mr-[10px] relative bg-[#09081c] bg-opacity-40 `}>
            <div>
                <p className={"text-white text-[18px] text-white font-bold"}>Validating APR</p>
                <p className={"text-[#a0aec0] text-[12px]"}>
                    From your node
                </p>
            </div>
            <div className={"relative h-[200px] w-full flex justify-center items-center top-[-16px]"}>
                <div className={"absolute flex justify-center items-center flex-row h-full w-full"}>
                    <Image height={40} width={40} src={stakedBalanceDiagramMiddleIcon} alt={"InfoWidgetIcon"} />
                </div>
                <div className={"absolute flex justify-end items-center flex-col h-full w-[220px]"}>
                    <div className={"flex rounded-[20px] border-[#FFFFFF33] border-[1px] relative w-full " +
                        "justify-center text-white h-[60px]"}>
                        <div className={"absolute flex flex-row justify-between w-full px-[20px] py-[10px]"}>
                            <p className={"text-[12px] text-[#a0aec0]"}>0%</p>
                            <p className={"text-[12px] text-[#a0aec0]"}>100%</p>
                        </div>
                        <div className={"text-center"}>
                            <p className={"text-[25px]"}>42%</p>
                            <p className={"text-[10px] text-[#a0aec0]"}>Based on SPL rewards</p>
                        </div>
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
    )
}

export default TotalStakedBalanceWidget;
