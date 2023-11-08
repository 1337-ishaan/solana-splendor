import InfoWidgets from "../../widgets/information/InfoWidgets";
import TokenomicsWaveWidget from "../../widgets/tokenomicsWave/TokenomicsWaveWidget";
import CircleChartWidget from "../../widgets/circleChart/CircleChartWidget";

const Tokenomics = () => {
    return(
        <div className={"flex flex-col w-full h-full px-[20px] pb-[20px]"}>
            <InfoWidgets />
            <div className={"h-full flex flex-row max-[1100px]:flex-wrap"}>
                <TokenomicsWaveWidget />
                <CircleChartWidget />
            </div>
        </div>
    )
}

export default Tokenomics;
