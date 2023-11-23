import {NextPage} from "next";
import LayoutWiki from "../../../components/layouts/LayoutWiki";
import WikiMenu from "../../../components/menu/wiki/WikiMenu";
import OnThisPage from "../../../components/widgets/onThisPage";
import {useState} from "react";

const Unveiling: NextPage = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const openMobileMenu = ()=>setShowMobileMenu(true);
    const closeMobileMenu = ()=>setShowMobileMenu(false);

    return (
        <LayoutWiki
            title={"Splendor Wiki"}
            description={"Splendor Wiki"}
            openMobileMenu={openMobileMenu}
            closeMobileMenu={closeMobileMenu}>
            <div className={"h-full flex flex-row"}>
                <WikiMenu showMobileMenu={showMobileMenu} />
                <div className={"min-[801px]:w-full ml-[330px] h-full " +
                    "mt-[70px] max-[1200px]:ml-[20%] max-[800px]:ml-0"}>
                    <OnThisPage
                        menuElements={[
                            {
                                text: "Introduction",
                                hash: "#whatIsSplendor"
                            },
                            {
                                text: "Benefits and use cases of Splendor",
                                hash: "#benefitsAndUseCases"
                            },
                            {
                                text: "Developer Guide",
                                hash: "#developerGuide"
                            }
                        ]}
                    />
                    <div className={"w-[70%] py-[50px] mx-auto max-[800px]:w-full max-[800px]:px-[10px]"}>
                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Enhancing Security in the Splendor Blockchain Ecosystem: The Repelent Mechanism</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            In the ever-evolving landscape of blockchain technology, security is paramount. Splendor Blockchain, fortified by its advanced SRC26 smart contract, has implemented a sophisticated security mechanism known as "Repelent." This mechanism serves as a formidable deterrent, actively safeguarding the ecosystem against bad actors attempting to infiltrate by constantly monitoring and repelling transactions linked to blacklisted addresses identified by international agencies.
                            </p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>SRC26 Smart Contract Architecture</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            At the core of Splendor's security infrastructure lies the SRC26 smart contract, meticulously designed to facilitate decentralized token swaps. The Repelent mechanism is intricately woven into the fabric of SRC26, acting as an intelligent gatekeeper to fortify the ecosystem against unauthorized access.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Constant Blacklist Monitoring</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            The Repelent mechanism operates by perpetually monitoring blacklisted addresses maintained by recognized international agencies. These addresses are meticulously curated to encompass entities involved in illicit activities, fraud, or any other activities deemed detrimental to the integrity of the blockchain.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Dynamic Link Analysis</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            The Repelent mechanism engages in dynamic link analysis, scrutinizing the origin and destination of transactions attempting to enter the Splendor Blockchain. This analysis involves evaluating the transaction history, associated metadata, and any conceivable links to blacklisted addresses
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Real-Time Transaction Blocking</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Upon identifying a transaction associated with a blacklisted address, the Repelent mechanism swiftly intervenes. Real-time blocking mechanisms are initiated, preventing the unauthorized transfer of tokens from any external blockchain to Splendor. This proactive measure ensures that the ecosystem remains resilient against potential threats.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Transparent Governance Protocol</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The Repelent mechanism operates under a transparent governance protocol, allowing for continuous updates to the blacklist database based on recommendations from international agencies and the consensus of the Splendor community. This dynamic approach ensures that the system adapts to evolving security threats in real-time.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Decentralized Decision-Making</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>To fortify decentralization principles, decisions regarding the Repelent mechanism's operation and blacklist updates are subject to decentralized governance. This ensures that the Splendor community actively participates in shaping the security protocols, fostering a collaborative approach to maintaining the integrity of the ecosystem.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Enhanced Security Audits</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Splendor Blockchain places a premium on security audits, conducting regular assessments to fortify the Repelent mechanism. External security experts and auditing firms are engaged to rigorously evaluate the SRC26 smart contract, ensuring that it remains impervious to vulnerabilities and emerging threat vectors.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Preserving Ecosystem Integrity</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Repelent stands as the first line of defense, actively preserving the integrity of the Splendor Blockchain ecosystem. By preventing the ingress of transactions linked to blacklisted addresses, Splendor ensures that the network remains a secure and trustworthy environment.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Mitigating Risks of Illicit Activities</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The dynamic link analysis and real-time blocking capabilities of Repelent mitigate the risks associated with illicit activities, fraud, and unauthorized access. This not only protects the network but also fosters a secure environment for users engaging in decentralized transactions.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Upholding Regulatory Compliance</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Splendor Blockchain is committed to upholding regulatory compliance. The Repelent mechanism aligns with international standards by actively adhering to blacklists curated by recognized agencies, ensuring that the network operates within legal frameworks.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Conclusion</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>In the realm of blockchain security, the Repelent mechanism implemented within the SRC26 smart contract emerges as a sophisticated and effective deterrent against bad actors attempting to infiltrate the Splendor Blockchain ecosystem. Through constant monitoring, dynamic link analysis, and real-time transaction blocking, Splendor not only fortifies its network against potential threats but also exemplifies a commitment to transparency, decentralization, and the highest standards of security within the decentralized finance landscape.</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
