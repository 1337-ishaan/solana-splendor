import {WalletRegisteredInfo} from "../../../api/bittensor/types";
import {AccountRegisterInfo} from "../../../modals";

export interface IStoredSecurelyWalletScreen{
    cancel(): void;
    back(): void;
    walletInfo: WalletRegisteredInfo;
    accountInfo: AccountRegisterInfo;
    registerWalletHandler:(accountInfo: AccountRegisterInfo, walletInfo:WalletRegisteredInfo)=>void;
}
