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
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Bridge</p>
                    <p className={"mt-[20px] text-[#3B454E] "}>
                    Crypto Bridges, also known as Bridges, are responsible for enabling the interconnection of different blockchains, allowing interoperability between them. This diversifies and increases the usability and reach of cryptocurrencies and the ecosystems built around them.
                    </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        A bridge between blockchains is a service (either centralized or decentralized) that creates a connection between two blockchains that normally cannot communicate with each other. This allows for the transfer of tokens between them. This utility has become essential with the advent of DeFi services, which have led to a significant leap in the use of blockchain technology and the tokens existing on various blockchains capable of offering these services.
                   </p>

                </div>

                <div id={"benefitsAndUseCases"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>How does a Bridge work?</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                        A bridge can be seen as a simple information exchanger between blockchains. Its main function is to enable bidirectional information exchange between blockchain A and blockchain B, through a protocol that facilitates this connection. In a simplified view, the operation of a bridge can be summarized in four steps:

                   </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        The bridge is positioned between chain A and B, creating the basic structure for its operation.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        To transfer a token from A to B, you go to the bridge, indicate the amount of tokens you want to exchange in A, and provide the destination address in B.
You make the transfer in A, and the bridge locks this amount in a vault. Then, in B, the exact amount of tokens is minted and sent to the address you provided in B.
The tokens in A remain locked as collateral for the tokens in B, and you can only retrieve them by reversing the process.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        Explained in More Detail For a practical example, imagine you want to transfer 1,000 USDT from the Ethereum network to the Polygon network. Even though Ethereum and Polygon addresses are identical, their blockchain networks are different, so you cannot directly transfer value between them. To do this, you use a bridge, which will complete the process.

                    </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        Since Ethereum and Polygon are identical in terms of programming (based on EVM, use Solidity, have the same address model, but different histories and consensus protocols), creating a bridge is relatively easy. The bridge creates a series of contracts (on Ethereum and Polygon) that allow the networks to communicate using a common language through a blockchain oracle. The oracle's job is to provide accurate information to these contracts about what's happening on the other blockchain and vice versa. This creates the bidirectional communication channel between Ethereum and Polygon.

                      </p>


                    </div>

                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>To send USDT from ETH to Polygon, you'll interact with the bridge on the ETH side. It will ask for two things:</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                        A receiving address for the Polygon network.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                       To send your 1,000 USDT in ETH to a vault (also in ETH) controlled by a smart contract of the bridge. This step is usually transparent to the user.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        After completing these steps and sending from ETH, the bridge begins its work. First, the oracle detects the ETH transfer and reports it to the smart contracts on the Polygon side. With this report, the amount of tokens exchanged and the destination address (the one you provided) are included. Once the ETH operation is complete, the oracle informs the smart contracts on the Polygon side, which then generate the 1,000 USDT and send them to the provided address.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                       The tokens generated on the Polygon side are the same USDT, in the same amount and value. This is possible because the vault created serves as a value guarantee for those new tokens and will be locked until you perform the reverse operation (transferring that USDT from Polygon to ETH). The lock prevents the creation of tokens out of thin air, while maintaining economic security and stability between the chains and the bridge.
                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                       When you reverse the process to retrieve your USDT in ETH, the bridge takes your USDT from the Polygon side, burns them, and then gives you the corresponding USDT from the Ethereum side. This completes the bridge's work between ETH and Polygon.

                      </p>

                </div>
                                <div id={"developerGuide"} className={"pt-[65px]"}>
                    <p className={"text-[24px] text-[#3B454E] font-bold"}>Benefits</p>

                    <p className={"mt-[20px] text-[#3B454E]"}>
                       Enable interoperability between chains. This allows Ethereum users to take their tokens and send them to other chains like BSC, without going through an exchange.

                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                       Allows users to move between Layer1 and Layer2. For example, Ethereum users can take their tokens from Layer1 (the Ethereum network) to Layer2 networks like Polygon, Arbitrum, Optimism, xDai, among others.
                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                        Helps minimize operation costs, as it allows the user to seek networks with better fees for their transactions.
                      </p>
                    <p className={"mt-[20px] text-[#3B454E]"}>
                       Attract value from other networks to networks with better opportunities. A good example of this is the transfer of value from BTC to Ethereum during the crypto winter. The movement was motivated by the desire to take advantage of the emerging DeFi ecosystem and generate profits at times when BTC was maintaining a low value.
                    </p>

                </div>

               
            </div>
        </LayoutWiki>
    );
};

export default Unveiling;
