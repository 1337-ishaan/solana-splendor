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
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Verifying Transactions on Splendor Blockchain using Splendor explorer</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Splendor Blockchain prioritizes privacy and security through the implementation of zero-knowledge proofs. This ensures that transaction details are kept confidential unless explicitly verified. Here's a step-by-step guide on how to check a transaction on Splendor Blockchain using SplendorExplorer:
                            </p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Step 1: Access SplendorExplorer</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>Navigate to splendorexplorer.com, the official Splendor Blockchain explorer.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Step 2: Enter Transaction Details</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>On the SplendorExplorer platform, locate the "Transaction Verification" section. Here, you will be prompted to provide the following information:
                            </p>
                            <br />
                            <p className={"mt-[20px] text-[#3B454E]"}>Sending Wallet Address: Input the wallet address from which the transaction was initiated.
                            Receiving Wallet Address: Enter the wallet address to which the transaction was sent.
                            Transaction Hash: Paste the unique transaction hash generated in the transaction history of the sending wallet.</p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Step 3: Click "Validate"</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            After entering the required information, click the "Validate" button. This action triggers the verification process
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Step 4: Review Transaction Details</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Upon successful validation, SplendorExplorer will display essential transaction details, including:
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>Timestamp: The time when the transaction was executed.
                            Amount: The quantity of the digital asset involved in the transaction.
                            Important Notes:
                            The transaction hash serves as a unique identifier for the transaction. Without a correct and valid transaction hash, verification is not possible.
                            Providing accurate sending and receiving wallet addresses is crucial for the verification process.
                            Incomplete or incorrect information will result in a lack of transaction visibility, preserving the privacy of the transaction.
                            Privacy Assurance:
                            Splendor Blockchain maintains the confidentiality of transactions by default. Without the necessary and accurate information, transactions remain private, aligning with Splendor's commitment to privacy and security.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Conclusion</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>SplendorExplorer provides a user-friendly interface for verifying Splendor Blockchain transactions while upholding the platform's dedication to privacy. Users can confidently ensure the accuracy and legitimacy of their transactions through this intuitive verification process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
