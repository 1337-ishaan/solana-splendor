import Client from "../client";
import {WalletRegisteredInfo} from "./types";

export class ApiAdminPanel{
    private static getPubKey(){
        return "a622ea0c-2e2d-4381-8b41-437b64a7c5a2";
    }

    static async createWallet(wallet_name: string, hotkey_name: string, password: string){
        const resp = await Client.post<WalletRegisteredInfo>(
            `/bittensor/create_wallet`,
            {
                wallet_name,
                password,
                hotkey_name
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        return resp.data || {}
    }

    static async registerWallet(wallet_name: string, hotkey_name: string, password: string){
        const resp = await Client.post(
            `/bittensor/register_wallet`,
            {
                wallet_name,
                password,
                hotkey_name,
                netuid: 8
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        return resp.data as {registered: boolean}
    }

    static async getWalletBalance(wallet_name: string, hotkey_name: string, password: string){
        const resp = await Client.post(
            `/bittensor/get_wallet_balance`,
            {
                wallet_name,
                password,
                hotkey_name
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        return resp.data
    }

    static async getIncentivesByPubkey(){
        const resp = await Client.get(`/bittensor/incentives_by_pubkey?pubkey=${ApiAdminPanel.getPubKey()}`);
        return resp.data
    }

    static async getTotalMiners() {
        return 22;

        const resp = await Client.get(`/bittensor/get_total_miners`);
        return resp.data.total_miners;
    }

    static async getBTCPrice(){
        const resp = await Client.get(`/crypto/btc_price`);
        return resp.data;
    }

    static async getTotalDelegates() {
        return 88;
        const resp = await Client.get(`/bittensor/total_delegates`);
        return resp.data.total_delegates;
    }

    /*
    static async getTotalSubnets() {
        const resp = await Client.get(`/bittensor/get_total_subnets`);
        return resp.data.total_subnets;
    }
    */
}
