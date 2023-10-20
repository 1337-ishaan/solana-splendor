import WelcomeWidget from "../welcome/WelcomeWidget";
import TotalStakedBalanceWidget from "../totalStakedBalance/TotalStakedBalanceWidget";
import EstimatedRewardsWidget from "../estimatedRewards/EstimatedRewardsWidget";

const ChartWidgets = () => {

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-center flex-1 items-center flex-wrap"}>
                <WelcomeWidget />
                <TotalStakedBalanceWidget />
                <EstimatedRewardsWidget />
            </div>
        </div>
    )
}

export default ChartWidgets;
