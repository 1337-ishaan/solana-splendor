import WhoWeAre from "../components/section/WhoWeAre/WhoWeAre";
import DualToken from "../components/section/BuildWithWhatYouAlreadyKnow/components/DualToken";
import LayoutOne from "../components/layouts/LayoutOne";
import {NextPage} from "next";
import HowItsWork from "../components/section/HowItsWork/WhoWeAre";
import StartMining from "../components/section/StartMining/StartMining";
import SplendorTokens from "../components/section/SplendorTokens/SplendorTokens";
import SplendorBlockchain from "../components/section/SplendorBlockchain";

const Home: NextPage = () => {
    return (
        <LayoutOne
            title={"Splendor"}
            description={"Splendor"}
        >
            <div className="fix w-full">
                <WhoWeAre />

                <DualToken />
                <HowItsWork/>

                <SplendorTokens />
                <StartMining />

                <SplendorBlockchain />
            </div>
        </LayoutOne>
    );
};

export default Home;

