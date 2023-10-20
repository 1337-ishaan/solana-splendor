import WhoWeAre from "../components/section/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../components/section/WhyChooseUs/WhyChooseUs";
import DualToken from "../components/section/BuildWithWhatYouAlreadyKnow/components/DualToken";
import BuildWithWhatYouAlreadyKnow from "../components/section/BuildWithWhatYouAlreadyKnow";
import LayoutOne from "../components/layouts/LayoutOne";
import {NextPage} from "next";
import {useState} from "react";
import {Popup} from "../components/popups";
import HowItsWork from "../components/section/HowItsWork/WhoWeAre";
import DoMoreWithSplendor from "../components/section/DoMoreWithSplendor/DoMoreWithSplendor";
import StartMining from "../components/section/StartMining/StartMining";

const Home: NextPage = () => {
    const [open, setOpen] = useState(true);

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

                {open && <Popup
                    title="Important Project Update"
                    text={`Dear Splendor Community,
We are excited to share a crucial update about our project that will shape its future. Our commitment to transparency and growth has led us to make this important decision:
Splendor layer 1 blockchain
We are thrilled to share a major milestone in our project's journey! We're excited to announce that we are 3 months ahead of schedule and have successfully completed the development of our Layer 1 blockchain. Layer 1 is the fundamental layer of a blockchain network like Bitcoin and Ethereum. It forms the foundation and defines the basic rules and protocols of the blockchain. The Layer 1 blockchain is responsible for creating and managing the native cryptocurrency, securing the network through consensus mechanisms. 
Setting the Stage for Splendor as the Evolved Bitcoin:
The completion of the Layer 1 blockchain is a critical step in positioning "Splendor" as the evolved Bitcoin. It signifies the establishment of a robust and secure foundational layer for the cryptocurrency, similar to what Bitcoin represents in the world of digital currencies.
Benefits and Significance:
1.\tScalability and Performance: A well-architected Layer 1 blockchain, like the one we have now completed, provides the infrastructure needed for Splendor to handle a high volume of transactions quickly and efficiently. This scalability is crucial in becoming the go-to cryptocurrency.
2.\tSecurity and Trust: The successful development of the Layer 1 blockchain underscores the security of Splendor, making it a trustworthy and reliable option for both users and investors. This trust is a fundamental quality sought in any leading cryptocurrency.
3.\tInnovation and Adaptability: With a solid Layer 1 foundation, Splendor is now well-positioned to innovate and adapt to emerging technologies and user demands. It can evolve over time while maintaining its core strengths.
4.\tCommunity Confidence: The completion of this essential milestone demonstrates our commitment to delivering on our promises and meeting or exceeding our project milestones. This builds confidence within the community and the broader crypto market.
5.\tGo-To Status: By being ahead of schedule and having a fully operational Layer 1 blockchain, we aim to make Splendor the go-to cryptocurrency for users, investors, and developers. It opens the door to a wide range of applications and use cases, potentially surpassing Bitcoin in terms of utility and value.
In summary, completing the Layer 1 blockchain paves the way for Splendor to establish itself as a prominent cryptocurrency, poised to evolve beyond Bitcoin and become the preferred choice in the crypto space. It offers the performance, security, adaptability, and community confidence necessary to achieve this goal, positioning Splendor as the crypto currency to watch in the coming months and years.
       Privacy Enhancement:
We have implemented zero-knowledge proof technology to ensure complete privacy for wallet balances and transactions. This cutting-edge privacy feature underscores our commitment to safeguarding the security and confidentiality of our users' financial activities.

Website Migration:
In the coming days, we will migrate the Splendor website from "splendor.network" to "splendor.org." This migration will be automatic, and we are excited to inform you that the community will find a lot more information, resources, and updates on the new website.
Importance of Official Updates:
As a decentralized project with developers across the world, focused on privacy and security, it is crucial to emphasize that the only channel for official project updates is the project website. Be cautious of unofficial sources or communication channels. Trust, security, and privacy are core principles of our project, and we want to ensure that you receive information directly from us.

Important Upcoming Dates:
•\tOctober 30, 2023: We will initiate a one-month live testing phase of all nodes across the world. This is a critical step in ensuring the stability and security of our network.
•\tDecember 1, 2023: Anyone wishing to become a miner can do so by downloading the Splendor Core from "splendor.org." This marks the beginning of a new era in our project's journey, where you can actively participate in securing the network and validating transactions`}
                    closePopup={() => setOpen(false)}
                /> }
            </div>
        </LayoutOne>
    );
};

export default Home;

