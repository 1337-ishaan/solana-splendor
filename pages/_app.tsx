import '../styles/globals.css'
import '../styles/cdn.jsdelivr.net_npm_animate.css@3.5.2_animate.min.css'
import "../styles/animate.min.css";
import "../styles/fontawesome-all.min.css";
import "../styles/react-odometer-theme.css";
import "../styles/default.css";
import "../styles/style.css";
import "../styles/responsive.css";
import type { AppProps } from 'next/app'
import {wrapper} from "../store/autStore/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
    const store: any = useStore();
    return (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            <Component {...pageProps} />
        </PersistGate>
    )
}

export default wrapper.withRedux(MyApp);
