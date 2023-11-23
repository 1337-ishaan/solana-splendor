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
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Splendor Blockchain</p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Splendor Blockchain is a decentralized platform built on the Substrate framework, offering a secure, scalable environment for decentralized applications and financial transactions.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What programming languages are used in Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Splendor Blockchain utilizes Solidity and Rust as its primary programming languages for smart contract development.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How does Splendor Blockchain ensure privacy in transactions?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Splendor Blockchain incorporates default zero-knowledge proofs in its SRC26 smart contract, ensuring enhanced privacy for all transactions.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What makes Splendor Blockchain transactions faster and more cost-effective?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Splendor Blockchain boasts faster and more cost-effective transactions due to its innovative architecture and the use of Solidity and Rust programming languages.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is the smallest unit of Splendor and how divisible is it?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The smallest unit of Splendor is called a "toshi," and it is divisible. This divisibility enhances flexibility in transactions and usability.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How does Splendor Blockchain differ from Bitcoin in terms of scarcity?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Splendor is more valuable than Bitcoin due to its capped total supply of 21 million coins and a unique reward system. The last Splendor coin will be mined in the year 2123, emphasizing its scarcity and long-term value.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is the reward time for miners on Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Miners on Splendor Blockchain receive rewards every 10 minutes with 1-second block intervals.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Does Splendor Blockchain implement a halving mechanism?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>No, Splendor Blockchain does not implement a halving mechanism. The reward of 3.125 SPL remains consistent over time.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What happens to the mining rewards on Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The mining rewards of 3.125 SPL are locked in the Splendor Blockchain reserve pool. SDR corresponding to miners' computational power and storage is minted.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Why is Splendor considered a scarce and valuable asset?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Splendor is considered a scarce and valuable asset due to its capped total supply of 21 million coins, no halving mechanism, and a unique reward system that emphasizes consistent incentives and scarcity.</p>
                        </div>

                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Splendor Coin (SPL)</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is SPL (Splendor Coin)?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>SPL is the native utility token of Splendor Blockchain, used for transaction fees, governance, and as collateral for acquiring SDR on Splendor Blockchain.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is the significance of the 21 million total supply of SPL?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The 21 million total supply of SPL emphasizes scarcity, aligning with the principles of valuable digital assets like Bitcoin.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How does the mining reward structure contribute to the value of SPL?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The mining reward structure, with 3.125 SPL every 10 minutes, reinforces the scarcity of SPL, contributing to its value as a digital asset.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Can SPL be traded on external cryptocurrency exchanges?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Yes, SPL can be traded on various external cryptocurrency exchanges, providing liquidity and accessibility to a broader audience.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Is SPL divisible, and if so, to what extent?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Yes, SPL is divisible, with each unit being as small as one Satoshi, allowing for flexibility in transactions and usability.</p>
                        </div>

                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>SDR (Splendor Decentralized Stable Token)</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is the pegging mechanism of SDR to the IMF's Special Drawing Rights (SDR)?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>SDR is pegged to the IMF's SDR, representing a diversified portfolio of major international currencies.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How is SDR created on Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>SDR is created by minting corresponding to miners' computational power and storage, utilizing the mining rewards locked in the Splendor Blockchain reserve pool.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Can SDR be used for international transactions?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Yes, SDR serves as a stable and reliable alternative for international transactions, providing a hedge against currency risks.</p>
                        </div>

                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>SDR Interest Rate:</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How does the SDR interest rate program work on Splendor Blockchain?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Users participate by interacting with the interest-paying smart contract, registering their commitment with an initial amount and timeframe. The 8% annual interest rate, paid daily, is applied to the initial amount.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What happens if a user moves SDR tokens before the committed period concludes?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>If a user moves SDR tokens before the committed period concludes, the interest rate payments cease. The mechanism encourages users to honor their commitment for uninterrupted interest payments.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Is the 8% interest rate applied to the entire SDR balance or the initially committed amount?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The 8% interest rate is applied exclusively to the initially committed amount communicated to the smart contract during the registration process.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Can users choose different lockup periods for the SDR interest rate program?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Yes, users can choose lockup periods ranging from 1 to 12 months based on their investment strategy and financial goals.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>How does the SDR interest rate program contribute to the overall stability of the Splendor ecosystem?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>The SDR interest rate program incentivizes users to commit to longer lockup periods, promoting stability in the ecosystem by reducing token volatility and enhancing long-term commitment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
