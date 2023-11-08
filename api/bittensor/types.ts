export interface WalletRegisteredInfo {
    wallet_info: {
        new_coldkey:{
            name: string;
            mnemonic: string;
            coldkey_ss58: string;
        },
        new_hotkey:{
            name: string;
            mnemonic: string;
            hotkey_ss58: string;
        }
    }
}
