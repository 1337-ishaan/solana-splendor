export interface IAccessWalletScreen{
    walletName: string;
    cancel(): void;
    accessHandler(): void;
    forgotHandler(): void;
}
