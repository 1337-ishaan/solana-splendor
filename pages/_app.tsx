import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {configureChains, createClient, WagmiConfig} from "wagmi";
import {Chain} from "wagmi/chains";
import {splendor} from "../helpers/SplendorChain"
import {publicProvider} from "wagmi/providers/public";
import {connectorsForWallets, darkTheme, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { coinbaseWallet, injectedWallet, metaMaskWallet, safeWallet, trustWallet, walletConnectWallet, rainbowWallet, braveWallet } from '@rainbow-me/rainbowkit/wallets';

const { chains, provider } = configureChains(
    [splendor],
    [publicProvider()]
);

const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            injectedWallet({chains: [splendor]}),
            metaMaskWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [splendor]}),
            rainbowWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [splendor]}),
            walletConnectWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [splendor]}),
            trustWallet({projectId: "98b1060271e2c3344ecc26f627ad7c02", chains: [splendor]}),
            coinbaseWallet({chains: [splendor], appName: "Octaocean"}),
            safeWallet({chains: [splendor]}),
            braveWallet({chains: [splendor]})
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
