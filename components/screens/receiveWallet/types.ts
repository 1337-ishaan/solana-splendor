import {WalletsInfo} from "../../../modals";

export interface IReceiveWalletScreen{
    walletInfo: WalletsInfo;
    forgotHandler(): void;
    cancelHandler(): void;
}
