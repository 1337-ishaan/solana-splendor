import TotalEarningsWidget from "../totalEarnings/TotalEarningsWidget";
import SlashedBalanceWidget from "../slashedBalance/SlashedBalanceWidget";

const DiagramWidgets = () => {
    return (
        <div className={"flex flex-col min-[801px]:h-full"}>
            <div className={"flex flex-row justify-center flex-1 items-center flex-wrap"}>
                <TotalEarningsWidget />
                <SlashedBalanceWidget />
            </div>
        </div>
    )
}

export default DiagramWidgets;
