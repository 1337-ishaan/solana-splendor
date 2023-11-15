import {NextPage} from "next";
import LayoutWiki from "../../components/layouts/LayoutWiki";
import WikiMenu from "../../components/menu/wiki/WikiMenu";
import OnThisPage from "../../components/widgets/onThisPage";

const HomeWiki: NextPage = () => {
    return (
        <LayoutWiki
            title={"Splendor Wiki"}
            description={"Splendor Wiki"}
        >
            <div className={"h-full flex flex-row"}>
                <WikiMenu />
                <div className={"min-[801px]:w-full ml-[280px] max-[1100px]:ml-[200px] h-full " +
                    "mt-[70px] max-[800px]:ml-0"}>
                    <OnThisPage />
                    <div className={"w-[750px] py-[50px] mx-auto max-[800px]:w-full max-[800px]:px-[10px]"}>
                        <p className={"text-[40px] text-[#3B454E] font-bold"}>Overview</p>
                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is Splendor?</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Splendor is a privacy system built directly on-chain for Ethereum, BSC, Polygon, and Arbitrum and coming
                                soon to Solana, NEAR, and Metiss. It leverages Zero-Knowledge (ZK) cryptography to enable arbitrary
                                smart contract calls, all completely privately and without leaving the security of the user’s preferred chain.
                                As Splendor is built on-chain, complete privacy is achieved without relying on a separate Layer-2 validator
                                set or a custodial bridge. This is not only more secure in terms of protecting funds as with Splendor, they
                                never leave their host chain, but is better at preventing information leakage or contamination and thus
                                achieves airtight privacy.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Further, by enabling privacy directly on-chain, Splendor users can access all the liquidity and ecosystems
                                already on the chain, creating a more natural DeFi experience, akin to what users are already familiar with
                                on public blockchains. This prevents a situation of fractured liquidity where users of off-chain privacy
                                solutions must wait until other DeFi users bridge across for an optimal experience. The user experience is
                                functionally the same as using a public wallet in terms of liquidity and DeFi support, just with the added
                                ability to transact privately.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                . A Railway Splendor how to guide is available
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Splendor’s code is verified and publicly viewable, and its repository can be found here.
                            </p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Benefits and use cases of SPLENDOR</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Through complex DeFi transactions, the effectiveness of privacy is amplified exponentially. All
                                transferring, swapping, lending, borrowing, and interactions with dApps increases the variations of
                                interactions in Splendor and decreases the chances that withdrawals can be linked to deposits.
                            </p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Therefore, more robust privacy is achieved with Splendor with less liquidity and in a shorter timeframe
                                than any other privacy system. Arbitrary dApp interactions within Splendor’s privacy system also
                                incentivizes users to hold their assets for longer in Splendor as there is less reason to move funds out of
                                Splendor. All things being equal, another privacy solution with the same amount of liquidity will be
                                objectively less private than Splendor by orders of magnitude.
                            </p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Thus, Splendor is aimed at professionals or individuals who want to trade, earn, and access DeFi privately.
                            </p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Potential use cases:
                            </p>
                            <ol className="ps-5 mt-2 space-y-1 list-decimal list-outside text-[#3B454E]">
                                <li><span className={"font-bold"}>Alpha Protection</span>: Traders who want to keep their alpha secret can trade feely and maintain their
                                    hard-fought informational advantages</li>
                                <li><span className={"font-bold"}>Private Payroll</span>: Payroll services for companies that pay in cryptocurrency. Using public blockchains
                                    in their current state for payroll reveals each employee’s exact salary</li>
                                <li><span className={"font-bold"}>MEV Advantage</span>: Builders of MEV searchers who do not wish to reveal the details of arbitrage
                                    opportunities they find</li>
                                <li><span className={"font-bold"}>Censorship Resistance</span>: Censorship resistant donations to causes by citizens who live in countries
                                    with unfriendly or corrupt governments officials</li>
                                <li><span className={"font-bold"}>Anonymized Analytics</span>: Counteracts services like Nansen or Etherscan, where notable wallets are
                                    labelled or known, meaning that some large investors are personally identifiable</li>
                                <li><span className={"font-bold"}>Compliance</span>: Financial companies remaining compliant with data protection laws such as GDPR</li>
                            </ol>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                For these reasons, Splendor is a revolutionary toolkit and is objectively the most uncompromising and
                                complete privacy solution for DeFi. Private DeFi will enable new business possibilities for the
                                cryptocurrency industry not possible on public blockchains. All other privacy solutions have some trade-
                                offs, such as requiring users to trust custodial bridges or trade with fragmented/non-existent liquidity.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Developer Guide</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                If you're a developer looking for the SDK documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default HomeWiki;

