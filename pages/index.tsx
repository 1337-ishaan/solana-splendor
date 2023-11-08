import WhoWeAre from "../components/section/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../components/section/WhyChooseUs/WhyChooseUs";
import DualToken from "../components/section/BuildWithWhatYouAlreadyKnow/components/DualToken";
import BuildWithWhatYouAlreadyKnow from "../components/section/BuildWithWhatYouAlreadyKnow";
import LayoutOne from "../components/layouts/LayoutOne";
import {NextPage} from "next";
import HowItsWork from "../components/section/HowItsWork/WhoWeAre";
import DoMoreWithSplendor from "../components/section/DoMoreWithSplendor/DoMoreWithSplendor";
import StartMining from "../components/section/StartMining/StartMining";

const Home: NextPage = () => {
    return (
        <LayoutOne
            title={"Splendor"}
            description={"Splendor"}
        >
            <div className="fix">
                <WhoWeAre />

                <HowItsWork/>
                <DualToken />
                <StartMining />
                <WhyChooseUs />

                <DoMoreWithSplendor />
                <BuildWithWhatYouAlreadyKnow />
            </div>
        </LayoutOne>
    );
};

export default Home;

