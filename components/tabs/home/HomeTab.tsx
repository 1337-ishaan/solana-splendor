import InfoWidgets from "../../widgets/information/InfoWidgets";
import ChartWidgets from "../../widgets/chart/ChartWidgets";
import DiagramWidgets from "../../widgets/diagram/DiagramWidgets";

const Home = () => {
    return(
        <div className={"flex flex-col w-full h-full p-10"}>
            <InfoWidgets />
            <ChartWidgets />
            <DiagramWidgets />
        </div>
    )
}

export default Home;
