import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {mainnet} from "wagmi/chains";
import {alchemyProvider} from "wagmi/providers/alchemy";
import {publicProvider} from "wagmi/providers/public";
import {connectorsForWallets, darkTheme, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { coinbaseWallet, injectedWallet, metaMaskWallet, safeWallet, trustWallet, walletConnectWallet, rainbowWallet, braveWallet } from '@rainbow-me/rainbowkit/wallets';

const { chains, provider } = configureChains(
    [mainnet],
    [
        alchemyProvider({ apiKey: "IqDaEnbPwNtB-qrZjOqjnhApJr8rWYFo" }),
        publicProvider()
    ]
);

const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            injectedWallet({chains: [mainnet]}),
            metaMaskWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [mainnet]}),
            rainbowWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [mainnet]}),
            walletConnectWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [mainnet]}),
            trustWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [mainnet]}),
            coinbaseWallet({chains: [mainnet], appName: "Octaocean"}),
            safeWallet({chains: [mainnet]}),
            braveWallet({chains: [mainnet]})
        ]
    }
])

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={darkTheme({
                accentColor: '#933FFE',
                accentColorForeground: 'white',
                borderRadius: 'large',
                fontStack: 'system',
                overlayBlur: 'small'
            })} modalSize="wide">
                <>
                    <Component {...pageProps} />
                    <ToastContainer />
                </>
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default MyApp;
