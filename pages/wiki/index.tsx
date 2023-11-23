import {NextPage} from "next";
import LayoutWiki from "../../components/layouts/LayoutWiki";
import WikiMenu from "../../components/menu/wiki/WikiMenu";
import OnThisPage from "../../components/widgets/onThisPage";
import {useState} from "react";

const HomeWiki: NextPage = () => {
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
                                text: "What is Splendor?",
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
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is Splendor?</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Splendor is a blockchain built on the Substrate framework and boasts exceptional speed in its blockchain transactions, with a block confirmed every second. This rapid confirmation rate positions Splendor as an efficient and swift blockchain solution, offering users a seamless and responsive experience for their transactions.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            One of the standout features of Splendor is its seamless integration of the Ethereum Virtual Machine (EVM). This means that developers familiar with Solidity, the programming language of Ethereum smart contracts, can effortlessly migrate their projects to Splendor. This compatibility opens up a world of possibilities for the development community, making it easy to leverage existing Ethereum tools and knowledge.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Splendor supports the development of smart contracts using Solidity, Ethereum's renowned programming language. This ensures a smooth transition for developers already well-versed in Solidity, allowing them to harness the full potential of Splendor's features without a steep learning curve.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            With a focus on performance optimization, Splendor is well-suited for projects of varying sizes. The architecture is designed to handle increased transaction volumes without compromising on speed or efficiency.
                            </p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Benefits and use cases of SPLENDOR</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Discover the myriad benefits that set Splendor apart in the realm of blockchain technology:
                            </p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Therefore, more robust privacy is achieved with Splendor with less liquidity and in a shorter timeframe
                                than any other privacy system. Arbitrary dApp interactions within Splendor’s privacy system also
                                incentivizes users to hold their assets for longer in Splendor as there is less reason to move funds out of
                                Splendor. All things being equal, another privacy solution with the same amount of liquidity will be
                                objectively less private than Splendor by orders of magnitude.
                            </p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Potential use cases:
                            </p>
                            <ol className="ps-5 mt-2 space-y-1 list-decimal list-outside text-[#3B454E]">
                                <li><span className={"font-bold"}>Seamless Integration with Ethereum Ecosystem:</span>: Splendor's native support for the Ethereum Virtual Machine (EVM) enables developers to effortlessly migrate their projects from Ethereum to Splendor. This compatibility ensures a smooth transition and allows developers to tap into the vast resources of the Ethereum ecosystem.</li>
                                <li><span className={"font-bold"}>Private Payroll</span>: Payroll services for companies that pay in cryptocurrency. Using public blockchains
                                    in their current state for payroll reveals each employee’s exact salary</li>
                                <li><span className={"font-bold"}>Familiarity with Solidity:</span>Developers familiar with Solidity, Ethereum's popular programming language for smart contracts, can leverage their existing skills on Splendor. This significantly reduces the learning curve, enabling faster development and a broader developer base.</li>
                                <li><span className={"font-bold"}>Censorship Resistance</span>: Censorship resistant donations to causes by citizens who live in countries
                                    with unfriendly or corrupt governments officials</li>
                                <li><span className={"font-bold"}>Anonymized Analytics</span>: Counteracts services like Nansen or Etherscan, where notable wallets are
                                    labelled or known, meaning that some large investors are personally identifiable</li>
                                <li><span className={"font-bold"}>Scalability without Compromise:</span>:Splendor's architecture prioritizes scalability without compromising on performance. Whether you're building a small-scale application or a large-scale enterprise solution, Splendor adapts to varying transaction volumes while maintaining efficiency.</li>
                            </ol>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                For these reasons, Splendor is a revolutionary toolkit and is objectively the most uncompromising and
                                complete privacy solution for DeFi. Private DeFi will enable new business possibilities for the
                                cryptocurrency industry not possible on public blockchains. All other privacy solutions have some trade-
                                offs, such as requiring users to trust custodial bridges or trade with fragmented/non-existent liquidity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default HomeWiki;

