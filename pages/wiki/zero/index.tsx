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
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Zero Knowledge</p>
                    <p className={"mt-[20px] text-[#3B454E] "}>
                        Zero Knowledge (ZK) is a cryptographic concept that allows one party, the prover, to prove to another party, the verifier, that they know a certain piece of information without revealing the actual information itself. In simpler terms, it enables the verification of a statement without disclosing the details that support that statement. This concept is crucial for maintaining privacy and security in various applications, including blockchain and authentication protocols.
                    </p>
                </div>

                <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Zero Knowledge Succinct Non-Interactive Argument of Knowledge (ZK-SNARK):</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                    Zero Knowledge Succinct Non-Interactive Argument of Knowledge (ZK-SNARK) is a specific type of zero-knowledge proof that provides a way for one party to prove possession of certain information without revealing that information. The term "succinct" implies that the proof is short and can be quickly verified. "Non-interactive" means that the proof is generated without the need for back-and-forth communication between the prover and the verifier after the initial setup.
ZK-SNARKs are particularly relevant in blockchain technology, as they enable the verification of the validity of transactions without exposing sensitive information such as the sender, receiver, or transaction amount. This enhances privacy on the blockchain while maintaining the integrity of the transaction history.
                    </p>
                    </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Zero Knowledge Succinct Non-Interactive Argument of Knowledge with PLONK (ZK-SNARK PLONK):</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                        PLONK introduces the use of polynomial commitment schemes and more efficient cryptographic primitives, resulting in faster and more scalable zero-knowledge proofs. This is particularly important in blockchain applications where the efficiency of proof generation and verification directly impacts the overall performance of the system.
                        </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        In the context of ZK-SNARK PLONK, the goal is to achieve highly efficient and secure non-interactive zero-knowledge proofs, making it suitable for a wide range of applications, including privacy-preserving transactions, secure data sharing, and more, within the blockchain and beyond.
                        </p>
                     <p className={"mt-[20px] text-[#3B454E]"}>
                         In summary, ZK-SNARK PLONK represents an evolution in the field of zero-knowledge proofs, providing a sophisticated and efficient solution for achieving privacy and security in cryptographic applications.
                        </p>
                </div>


            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
