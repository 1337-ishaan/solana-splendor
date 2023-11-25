import {NextPage} from "next";
import LayoutWiki from "../../../components/layouts/LayoutWiki";

const Unveiling: NextPage = () => {
    return (
        <LayoutWiki
            title={"Splendor Wiki"}
            description={"Splendor Wiki"}
            menuElements={[]}>
            <div>
                <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>SDR Interest Payment Mechanism: A Seamless Interaction for Daily Gains</p>
                    <p className={"mt-[20px] text-[#3B454E] "}>
                    Step into the dynamic realm of SDR, where financial innovation meets user-centric simplicity. In this document, we explore the distinctive feature of SDR's interest payment mechanism. Users can effortlessly engage with the interest-paying smart contract, registering their commitment with an initial amount and timeframe. The result? An attractive 8% annual interest rate paid daily, directly into their wallet, provided there is no movement of SDR tokens before the committed period concludes.
                    </p>
                </div>

                <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>User Interaction with Smart Contract</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                    Rather than locking SDR tokens, users interact seamlessly with the interest-paying smart contract. They register their commitment by specifying the initial amount of SDR and the desired commitment timeframe. This process is straightforward, requiring only a few interactions with the smart contract.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Daily Interest Rate Calculation</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>The interest-paying smart contract calculates and accrues the daily interest rate, which stands at an impressive 8% annually. This dynamic daily calculation ensures users witness incremental growth in their SDR holdings.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>No Movement, Daily Gain</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>The magic happens daily. Before the interest rate payment, the smart contract checks if there has been any movement of the user's SDR tokens. If there is no movement detected, the calculated daily interest is promptly paid directly into the user's wallet.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Initial Amount Consideration</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>It's important to note that the 8% interest rate is applied exclusively to the initial amount communicated to the smart contract during the registration process. This initial amount serves as the basis for daily interest rate calculations.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Commitment Rewarded, Movement Penalized</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>Commitment is rewarded. If a user moves any SDR tokens before the committed period concludes, no interest rate payment is made. This mechanism encourages users to honor their commitment, ensuring that only those who stay committed receive the full benefits.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Effortless Participation</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>Engaging with the interest payment mechanism is effortless. Users can register their commitment with a few simple interactions with the smart contract, making it accessible to a wide range of participants.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Daily, Predictable Gains</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>The daily interest rate payment provides users with a predictable and consistent source of gains. This passive income stream adds up over time, contributing to a steady increase in the value of their SDR holdings.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Encouraging Long-Term Engagement</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>The commitment-centric mechanism encourages users to stay engaged for the committed period, fostering a culture of long-term participation within the SDR ecosystem.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>How to Participate</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>Participating in the SDR interest payment mechanism is user-friendly:

Interact with Smart Contract: Register your commitment by interacting with the interest-paying smart contract. Specify the initial amount of SDR and the desired commitment timeframe.

Daily Interest Payment: Witness daily growth as the smart contract calculates the 8% annual interest rate and pays it directly into your wallet. No movement of SDR tokens ensures uninterrupted daily gains.

Commit to Receive Full Benefits: To maximize your earnings, refrain from moving any SDR tokens before the committed period concludes. Full benefits are exclusively reserved for those who honor their commitment.</p>
                </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Conclusion</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>The SDR interest payment mechanism redefines user engagement, making it simple, seamless, and rewarding. By leveraging the power of daily gains and commitment-driven rewards, SDR ensures that participants experience the full potential of an 8% annual interest rate in a user-centric and efficient manner. Embrace the daily gains with SDR, where financial innovation meets ease of use.</p>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
