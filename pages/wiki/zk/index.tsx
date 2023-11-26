import {NextPage} from "next";
import LayoutWiki from "../../../components/layouts/LayoutWiki";

const Unveiling: NextPage = () => {
    // @ts-ignore
    return (
        <LayoutWiki
            title={"Splendor Wiki"}
            description={"Splendor Wiki"}
            menuElements={[]}>
            <div>

                    <div className={"w-[70%] py-[50px] mx-auto max-[800px]:w-full max-[800px]:px-[10px]"}>
                        <div id={"whatIsSplendor"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What is Zero Knowledge?</p>
                            <p className={"mt-[20px] text-[#3B454E] "}>Zero-knowledge is a concept in cryptography that refers to a situation where one party (the prover) can prove to another party (the verifier) that they know a certain piece of information without revealing what that information actually is. In other words, the prover can demonstrate knowledge of a secret or fact without disclosing any details about the secret itself.</p>
                            <br />
                            <p className={"mt-[20px] text-[#3B454E] "}>Zero-knowledge proofs are designed to provide a high level of security and privacy in various applications, including authentication, identification, and digital transactions. The term "zero-knowledge" comes from the idea that after the proof has been provided, the verifier gains zero knowledge about the specific information being proved, other than the fact that the prover knows it</p>
                            <br />
                            <p className={"mt-[20px] text-[#3B454E] "}>One common example of a zero-knowledge proof is the "zero-knowledge proof of knowledge" protocol. In this protocol, the prover convinces the verifier that they possess a particular piece of information without revealing the information itself. The classic example often used to explain this concept is the "Three-coloring problem," where a prover can convince a verifier that they can color a map with three colors in such a way that no two adjacent regions have the same color, without actually revealing the coloring.</p>
                            <br />
                            <p className={"mt-[20px] text-[#3B454E] "}>Zero-knowledge proofs have practical applications in various fields, including blockchain and cryptocurrency, where they are used to enhance privacy and security. For instance, in a cryptocurrency transaction, a zero-knowledge proof can be employed to prove that a transaction is valid without disclosing the sender, receiver, or the amount involved. This allows for secure and private transactions on a public ledger.</p>
                        </div>

                        <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                            <p className={"text-[24px] text-[#3B454E] font-bold"}>What are SNARKs?</p>

                            <p className={"mt-[20px] text-[#3B454E]"}>
                            SNARKs, which stands for "Succinct Non-Interactive Arguments of Knowledge," are a type of zero-knowledge proof system in cryptography. They are used to prove the authenticity of information without revealing the content of that information. The term "succinct" emphasizes that the proof generated by a SNARK is short and can be quickly and efficiently verified.
                            </p>
                            <br />
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                <strong>Succinctness: </strong>
                                SNARKs generate short proofs that are much smaller in size compared to the size of the information being proven. This property is crucial for efficiency, especially in the context of blockchain and cryptocurrency, where minimizing the size of proofs is essential for scalability.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                <strong>Non-Interactivity: </strong>
                                SNARKs are non-interactive, meaning that the proof generation process doesn't require back-and-forth communication between the prover and verifier. This is in contrast to interactive proof systems, where multiple rounds of communication are needed.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                                <strong>Arguments of Knowledge: </strong>
                                SNARKs allow a prover to convince a verifier that they possess certain information without revealing the information itself. The prover can demonstrate knowledge of a solution to a problem without disclosing the specific details of that solution.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            SNARKs have found significant applications in the field of blockchain and cryptocurrency. For example, they are used in privacy-focused cryptocurrencies like Zcash to provide a method for users to prove the validity of transactions without revealing the sender, recipient, or transaction amount. This enhances privacy while still ensuring the integrity and validity of transactions.
                            </p>
                            <p className={"mt-[20px] text-[#3B454E]"}>
                            However, it's worth noting that the implementation and use of SNARKs can be complex, and ensuring their security relies on advanced cryptographic techniques. The development of SNARKs has been a significant area of research in the broader field of cryptography, and various constructions and improvements have been proposed over time.
                            </p>
                        </div>
                    </div>

                    </div>

        </LayoutWiki>
    );
};

export default Unveiling;
