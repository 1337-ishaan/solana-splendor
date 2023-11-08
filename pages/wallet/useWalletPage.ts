/*
import {useEffect, useState} from "react";
import {WalletSteps} from "./enum";
import MainWalletScreen from "../../components/screens/mainWallet/MainWalletScreen";
import CreateWalletScreen from "../../components/screens/createWallet/CreateWalletScreen";
import ImportWalletScreen from "../../components/screens/importWallet/ImportWalletScreen";
import CreateNewWalletScreen from "../../components/screens/createNewWallet/CreateWalletScreen";
import GenerateMnemoricScreen from "../../components/screens/generateMnemoric/GenerateMnemoricScreen";
import StoredSecurelyWalletScreen from "../../components/screens/storedSecurelyWallet/StoredSecurelyWalletScreen";

const useWalletPage = () => {
    const [screen, setScreen] = useState();

    useEffect(()=>{
        changeScreenByStepType(WalletSteps.ShowHome)
    }, [])

    const openCreateWallet = () => {
        changeScreenByStepType(WalletSteps.CreateWallet);
    }

    const openCreateNewWallet = () => {
        changeScreenByStepType(WalletSteps.CreateNewWallet);
    }

    const openGenerateMnemoric = () =>{
        changeScreenByStepType(WalletSteps.GenerateMnemoric);
    }

    const openImportWallet = () => {
        changeScreenByStepType(WalletSteps.ImportWallet);
    }

    const backToHome = () => {
        changeScreenByStepType(WalletSteps.ShowHome)
    }

    const openStoredSecurely = () => {
        changeScreenByStepType(WalletSteps.StoredSecurely);
    }

    const changeScreenByStepType = (step: WalletSteps) => {
        switch (step) {
            case WalletSteps.ShowHome:
                setScreen(MainWalletScreen({createHandler: openCreateWallet, numberOf: "0.00", importHandler: openImportWallet}));
                break;
            case WalletSteps.CreateWallet:
                setScreen(CreateWalletScreen({cancel: backToHome, createNewHandler: openCreateNewWallet}));
                break;
            case WalletSteps.ImportWallet:
                setScreen(ImportWalletScreen({cancel: backToHome}));
                break;
            case WalletSteps.CreateNewWallet:
                setScreen(CreateNewWalletScreen({cancel: backToHome, back: openCreateWallet, generateMnemoricHandler: openGenerateMnemoric}));
                break;
            case WalletSteps.GenerateMnemoric:
                setScreen(GenerateMnemoricScreen({cancel: backToHome, back: openCreateNewWallet, storedSecurityHandler:openStoredSecurely}));
                break;
            case WalletSteps.StoredSecurely:
                setScreen(StoredSecurelyWalletScreen({cancel: backToHome, back: openGenerateMnemoric}));
                break;
        }
    }

    return screen;
}

export default useWalletPage;
*/
