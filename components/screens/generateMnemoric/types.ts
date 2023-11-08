import {WalletRegisteredInfo} from "../../../api/bittensor/types";

export interface IGenerateMnemoricScreen{
    cancel(): void;
    back(): void;
    storedSecurityHandler(walletInfo:WalletRegisteredInfo): void;
    walletInfo: WalletRegisteredInfo;
}
