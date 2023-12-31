import {NextPage} from "next";
import LayoutWiki from "../../../components/layouts/LayoutWiki";

const Unveiling: NextPage = () => {
    return (
        <LayoutWiki
            title={"Splendor Wiki"}
            description={"Splendor Wiki"}
            menuElements={[]}
        >
            <div>
                <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>The Significance of Repelent for Splendor Blockchain</p>
                    <p className={"mt-[20px] text-[#3B454E] "}>
                    Repelent stands as the first line of defense, actively preserving the integrity of the Splendor Blockchain ecosystem. By preventing the ingress of transactions linked to blacklisted addresses, Splendor ensures that the network remains a secure and trustworthy environment.
                    </p>
                </div>

                <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Mitigating Risks of Illicit Activities</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                    The dynamic link analysis and real-time blocking capabilities of Repelent mitigate the risks associated with illicit activities, fraud, and unauthorized access. This not only protects the network but also fosters a secure environment for users engaging in decentralized transactions.
                    </p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Upholding Regulatory Compliance</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                    Splendor Blockchain is committed to upholding regulatory compliance. The Repelent mechanism aligns with international standards by actively adhering to blacklists curated by recognized agencies, ensuring that the network operates within legal frameworks.
                    </p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Conclusion</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>In the realm of blockchain security, the Repelent mechanism implemented within the SRC26 smart contract emerges as a sophisticated and effective deterrent against bad actors attempting to infiltrate the Splendor Blockchain ecosystem. Through constant monitoring, dynamic link analysis, and real-time transaction blocking, Splendor not only fortifies its network against potential threats but also exemplifies a commitment to transparency, decentralization, and the highest standards of security within the decentralized finance landscape.</p>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
