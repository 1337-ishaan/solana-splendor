import {WalletRegisteredInfo} from "../../../api/bittensor/types";
import {AccountRegisterInfo} from "../../../modals";

export interface ICreateNewWalletScreen{
    cancel(): void;
    back(): void;
    generateMnemoricHandler(accountInfo: AccountRegisterInfo, walletInfo:WalletRegisteredInfo): void;
}
