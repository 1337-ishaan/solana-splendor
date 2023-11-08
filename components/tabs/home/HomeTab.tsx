import InfoWidgets from "../../widgets/information/InfoWidgets";
import ChartWidgets from "../../widgets/chart/ChartWidgets";
import DiagramWidgets from "../../widgets/diagram/DiagramWidgets";

const Home = () => {
    return(
        <div className={"flex flex-col w-full h-full px-[20px] pb-[20px]"}>
            <InfoWidgets />
            <ChartWidgets />
            <DiagramWidgets />
        </div>
    )
}

export default Home;
