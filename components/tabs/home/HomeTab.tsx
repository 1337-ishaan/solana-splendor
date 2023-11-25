import InfoWidgets from "../../widgets/information/InfoWidgets";
import ChartWidgets from "../../widgets/chart/ChartWidgets";
import DiagramWidgets from "../../widgets/diagram/DiagramWidgets";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen px-[20px] pb-[20px]">
      <InfoWidgets />
      <DiagramWidgets />
    </div>
  );
};

export default Home;
