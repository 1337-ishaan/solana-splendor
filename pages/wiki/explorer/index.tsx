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
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>SplendorExplorer: Questions and Answers</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q1: What is SplendorExplorer, and how does it contribute to the Splendor Blockchain experience?

                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A1: SplendorExplorer is the official explorer for the Splendor Blockchain. It serves as a user-friendly platform that allows individuals to explore and verify transactions on the Splendor Blockchain.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q2: How can I access SplendorExplorer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            A2: You can access SplendorExplorer by visiting the official website at splendorexplorer.com.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q3: What information can I verify using SplendorExplorer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A3: SplendorExplorer enables users to verify transaction details on the Splendor Blockchain. You can validate the timestamp, amount, and other essential information associated with a specific transaction.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q4: What is the purpose of the "Transaction Verification" feature on SplendorExplorer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A4: The "Transaction Verification" feature allows users to confirm the details of a specific transaction by providing the sending wallet address, receiving wallet address, and the unique transaction hash.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q5: How does SplendorExplorer prioritize privacy in transaction verification?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            A5: SplendorExplorer maintains the privacy of transactions by requiring accurate and specific information for verification. Without the correct transaction hash and wallet addresses, the transaction remains private.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q6: Can I explore transactions on SplendorExplorer without providing specific details?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A6: No, SplendorExplorer requires specific details such as the sending and receiving wallet addresses and the transaction hash for verification. This ensures the privacy of transactions.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            Q7: What happens if I provide incorrect or incomplete information for transaction verification?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A7: If the provided information is incorrect or incomplete, SplendorExplorer will not display transaction details. This safeguard ensures the privacy and accuracy of the verification process.
                             </p>
                            <p className={ "mt-[20px] text-[#3B454E] "}>
                                Q8: Is SplendorExplorer the only way to explore transactions on Splendor Blockchain?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A8: Yes, SplendorExplorer is the official platform designed for exploring and verifying transactions on the Splendor Blockchain. It provides a user-friendly interface for this purpose.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q9: Can I use SplendorExplorer to explore transactions from any Splendor wallet?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A9: Yes, SplendorExplorer is designed to explore transactions from any Splendor wallet. Users can verify transactions associated with their wallets through this platform.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q10: How often is SplendorExplorer updated with new transaction data?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A10: SplendorExplorer is continuously updated with new transaction data in real-time, providing users with the latest information on the Splendor Blockchain.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q11: Does SplendorExplorer display information about wallet balances?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A11: No, SplendorExplorer focuses on transaction verification and does not display wallet balances. It is dedicated to providing specific details related to individual transactions.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q12: Can I use SplendorExplorer to track the progress of a transaction in real-time?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A12: Yes, SplendorExplorer allows users to track the progress of a transaction in real-time by providing accurate information for verification.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                Q13: Is SplendorExplorer available in multiple languages?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                    A13: As of the latest update, SplendorExplorer primarily supports English. Additional language support may be introduced in future updates.
                             </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            These questions and answers provide insights into the functionality and privacy considerations of SplendorExplorer, offering a comprehensive understanding of its role in enhancing the Splendor Blockchain experience.
                            </p>

                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>verify transaction</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                           Verifying Transactions on Splendor Blockchain using SplendorExplorer
Splendor Blockchain prioritizes privacy and security through the implementation of zero-knowledge proofs. This ensures that transaction details are kept confidential unless explicitly verified. Here's a step-by-step guide on how to check a transaction on Splendor Blockchain using SplendorExplorer:
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Step 1: Access SplendorExplorer
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                Navigate to splendorexplorer.com, the official Splendor Blockchain explorer.

                             </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Step 2: Enter Transaction Details
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            On the SplendorExplorer platform, locate the "Transaction Verification" section. Here, you will be prompted to provide the following information:
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                Sending Wallet Address: Input the wallet address from which the transaction was initiated.
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Receiving Wallet Address: Enter the wallet address to which the transaction was sent.
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Transaction Hash: Paste the unique transaction hash generated in the transaction history of the sending wallet.
                            </p>


                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Step 3: Click "Validate"
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            After entering the required information, click the "Validate" button. This action triggers the verification process.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Step 4: Review Transaction Details
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                Upon successful validation, SplendorExplorer will display essential transaction details, including:
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                Timestamp: The time when the transaction was executed.
                            </p>

                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Amount: The quantity of the digital asset involved in the transaction.

                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Important Notes:

                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            The transaction hash serves as a unique identifier for the transaction. Without a correct and valid transaction hash, verification is not possible.
                            Providing accurate sending and receiving wallet addresses is crucial for the verification process.
                            Incomplete or incorrect information will result in a lack of transaction visibility, preserving the privacy of the transaction.
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                             Privacy Assurance:
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Splendor Blockchain maintains the confidentiality of transactions by default. Without the necessary and accurate information, transactions remain private, aligning with Splendor's commitment to privacy and security.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Conclusion:
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            SplendorExplorer provides a user-friendly interface for verifying Splendor Blockchain transactions while upholding the platform's dedication to privacy. Users can confidently ensure the accuracy and legitimacy of their transactions through this intuitive verification process.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>BRIAH Supercomputer: Questions and Answers</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q1: What is the primary purpose of BRIAH Supercomputer, and who benefits from its computational resources?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A1: BRIAH Supercomputer serves as a decentralized, peer-to-peer network designed to harness the power of distributed computing. The primary beneficiaries are miners running a Splendor Blockchain node and non-profit organizations engaged in impactful initiatives, including disease eradication, scientific research, cybersecurity, medical advancements, and quantum computing R&D.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q2: How do miners running a Splendor Blockchain node benefit from participating in the BRIAH Supercomputer network?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            A2: Miners running a Splendor Blockchain node are rewarded with SDR tokens for contributing their computational resources to the BRIAH Supercomputer network. These tokens can be utilized within the platform or traded on supported exchanges.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q3: Is there a vetting process for non-profit organizations to access BRIAH Supercomputer's computing resources?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A3: Yes, non-profit organizations seeking access to BRIAH Supercomputer's computing resources undergo a vetting process to ensure alignment with ethical and impactful goals. Approved organizations receive free access to AI computational resources to support their missions.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q4: What types of tasks can non-profit organizations perform using the AI computational resources provided by BRIAH Supercomputer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A4: Non-profit organizations can leverage BRIAH Supercomputer's AI computational resources for a variety of tasks, including disease research, scientific simulations, cybersecurity initiatives, medical advancements, and quantum computing research and development.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                    Q5: How does BRIAH Supercomputer ensure the security and integrity of data and computations for non-profit organizations?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A5: BRIAH Supercomputer prioritizes security by being built on a robust blockchain infrastructure. The decentralized nature of the network enhances resilience and protects against potential threats, ensuring the security and integrity of data and computations for non-profit organizations.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q6: Can non-profit organizations collaborate with each other on the BRIAH Supercomputer platform?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A6: BRIAH Supercomputer encourages collaboration among non-profit organizations. While computing resources are allocated based on individual needs, collaborative projects aligned with BRIAH's mission may have the opportunity to share resources for mutual benefit.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q7: How does BRIAH Supercomputer contribute to advancements in medical research for disease eradication?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            A7: BRIAH Supercomputer facilitates advancements in medical research by providing AI computational resources for tasks such as simulations, data analysis, and medical imaging processing. This empowers non-profit organizations focused on disease eradication to accelerate their research efforts.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q8: What distinguishes BRIAH Supercomputer's support for AI computational resources for non-profit organizations?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A8: BRIAH Supercomputer's support for AI computational resources enables non-profit organizations to leverage advanced capabilities in artificial intelligence. This support extends to initiatives that aim to bring about positive social impact through innovative AI applications.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q9: How does BRIAH Supercomputer contribute to scientific research initiatives led by non-profit organizations?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                    A9: BRIAH Supercomputer serves as a catalyst for scientific research initiatives by providing AI computational power for tasks such as simulations, data crunching, and other computationally intensive processes. This empowers non-profit organizations to conduct cutting-edge research efficiently.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q10: What measures are in place to ensure that BRIAH Supercomputer's computing resources are used for impactful and ethical purposes by non-profit organizations?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A10: BRIAH Supercomputer has a vetting process for approving non-profit organizations, ensuring alignment with ethical and impactful goals. This process helps maintain the integrity of the platform and ensures that computing resources are utilized for positive social impact.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q11: How often are miners rewarded with SDR tokens for their contributions to the BRIAH Supercomputer network?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A11: Miners are rewarded with SDR tokens every 10 minutes for their contributions to the BRIAH Supercomputer network. This consistent reward structure aims to incentivize continued participation and support network security.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Q12: Is there a limit to the computing resources that non-profit organizations can access on BRIAH Supercomputer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A12: While BRIAH Supercomputer aims to support non-profit organizations in their missions, there may be limits to ensure fair resource distribution among multiple initiatives. The specifics of resource allocation are determined based on the individual needs and impact potential of each organization.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q13: Can miners trade or exchange the SDR tokens they earn through BRIAH Supercomputer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A13: Yes, miners running a Splendor Blockchain node can trade or exchange the SDR tokens they earn through BRIAH Supercomputer on supported exchanges.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q14: How does BRIAH Supercomputer contribute to cybersecurity initiatives undertaken by non-profit organizations?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                A14: BRIAH Supercomputer enhances cybersecurity initiatives by providing a secure and decentralized environment for running security-related computations and simulations. Non-profit organizations can leverage BRIAH to advance their cybersecurity research and development efforts.

                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Q15: Can non-profit organizations compound their SDR token rewards earned on BRIAH Supercomputer?
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                    A15: No, non-profit organizations do not have the ability to compound their SDR token rewards on BRIAH Supercomputer. The compounding feature is available to individual miners running Splendor Blockchain nodes.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                These questions and answers provide a detailed overview of how BRIAH Supercomputer benefits both miners and non-profit organizations, offering insights into its role in advancing various impactful initiatives.
                            </p>
                        </div>

                        <div id={"developerGuide"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>Zero Knowledge:</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Zero Knowledge (ZK) is a cryptographic concept that allows one party, the prover, to prove to another party, the verifier, that they know a certain piece of information without revealing the actual information itself. In simpler terms, it enables the verification of a statement without disclosing the details that support that statement. This concept is crucial for maintaining privacy and security in various applications, including blockchain and authentication protocols.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            Zero Knowledge Succinct Non-Interactive Argument of Knowledge (ZK-SNARK):
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                            Zero Knowledge Succinct Non-Interactive Argument of Knowledge (ZK-SNARK) is a specific type of zero-knowledge proof that provides a way for one party to prove possession of certain information without revealing that information. The term "succinct" implies that the proof is short and can be quickly verified. "Non-interactive" means that the proof is generated without the need for back-and-forth communication between the prover and the verifier after the initial setup.
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                ZK-SNARKs are particularly relevant in blockchain technology, as they enable the verification of the validity of transactions without exposing sensitive information such as the sender, receiver, or transaction amount. This enhances privacy on the blockchain while maintaining the integrity of the transaction history.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                Zero Knowledge Succinct Non-Interactive Argument of Knowledge with PLONK (ZK-SNARK PLONK):
                            </p>
                            <p className={"mt-[3px] text-[#3B454E] "}>
                                Zero Knowledge Succinct Non-Interactive Argument of Knowledge with PLONK (ZK-SNARK PLONK) is an advanced cryptographic construction that builds upon the ZK-SNARK concept. PLONK is an acronym for "Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge." This construction is designed to improve the efficiency and security of zero-knowledge proofs.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                            PLONK introduces the use of polynomial commitment schemes and more efficient cryptographic primitives, resulting in faster and more scalable zero-knowledge proofs. This is particularly important in blockchain applications where the efficiency of proof generation and verification directly impacts the overall performance of the system.
                            </p>
                             <p className={"mt-[20px] text-[#3B454E]"}>
                                In the context of ZK-SNARK PLONK, the goal is to achieve highly efficient and secure non-interactive zero-knowledge proofs, making it suitable for a wide range of applications, including privacy-preserving transactions, secure data sharing, and more, within the blockchain and beyond.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E] "}>
                                In summary, ZK-SNARK PLONK represents an evolution in the field of zero-knowledge proofs, providing a sophisticated and efficient solution for achieving privacy and security in cryptographic applications.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
