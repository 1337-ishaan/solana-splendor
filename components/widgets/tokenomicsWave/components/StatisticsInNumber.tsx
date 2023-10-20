import {NextPage} from "next";

const StatisticsInNumber: NextPage<IStatisticsInNumber> = ({title, value}) => {
    return(
        <div className={"flex-col flex mb-[10px] max-[800px]:flex-row max-[800px]:justify-between max-[800px]:mx-[10px]"}>
            <p className={"text-[#a0aec0] text-[12px] max-[800px]:text-white"}>
                {title}
            </p>
            <p className={"text-white text-[15px]"}>
                {value}
            </p>
        </div>
    )
}

export default StatisticsInNumber
