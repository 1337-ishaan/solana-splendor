import WhoWeAre from "../components/section/WhoWeAre/WhoWeAre";
import DualToken from "../components/section/BuildWithWhatYouAlreadyKnow/components/DualToken";
import LayoutOne from "../components/layouts/LayoutOne";
import {NextPage} from "next";
import HowItsWork from "../components/section/HowItsWork/WhoWeAre";
import DoMoreWithSplendor from "../components/section/DoMoreWithSplendor/DoMoreWithSplendor";
import StartMining from "../components/section/StartMining/StartMining";
import SplendorTokens from "../components/section/SplendorTokens/SplendorTokens";

const Home: NextPage = () => {
    return (
        <LayoutOne
            title={"Splendor"}
            description={"Splendor"}
        >
            <div className="fix w-full">
                <WhoWeAre />

                <HowItsWork/>
                <DualToken />
                <StartMining />
                <SplendorTokens />
                <DoMoreWithSplendor />
            </div>
        </LayoutOne>
    );
};

export default Home;

