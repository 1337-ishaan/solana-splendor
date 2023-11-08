export interface AccountRegisterInfo {
    walletName: string;
    password: string;
    hotkeyName: string;
}

export interface WalletsInfo {
    coldWallet?: WalletData;
    hotWallet?: WalletData;
    walletName?: string;
}

export interface WalletData{
    address?: string;
    balance?: string;
}
