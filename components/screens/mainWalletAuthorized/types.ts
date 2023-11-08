import {WalletsInfo} from "../../../modals";

export interface IMainWalletAuthorizedScreen{
    walletInfo: WalletsInfo;
    forgotHandler(): void;
    cancelHandler(): void;
    sendHandler(): void;
    receiveHandler(): void;
    shareHandler(): void;
}
