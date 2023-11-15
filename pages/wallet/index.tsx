import {NextPage} from "next";
import LayoutOne from "../../components/layouts/LayoutOne";
import React, {useEffect, useState} from "react";
import {BottomWalletPopup} from "../../components/popups/BottomWalletPopup";
import {WalletSteps} from "../../modals/enum";
import MainWalletScreen from "../../components/screens/mainWallet/MainWalletScreen";
import CreateWalletScreen from "../../components/screens/createWallet/CreateWalletScreen";
import ImportWalletScreen from "../../components/screens/importWallet/ImportWalletScreen";
import CreateNewWalletScreen from "../../components/screens/createNewWallet/CreateWalletScreen";
import GenerateMnemoricScreen from "../../components/screens/generateMnemoric/GenerateMnemoricScreen";
import StoredSecurelyWalletScreen from "../../components/screens/storedSecurelyWallet/StoredSecurelyWalletScreen";
import {WalletRegisteredInfo} from "../../api/bittensor/types";
import {AccountRegisterInfo, WalletsInfo} from "../../modals";
import MainWalletAuthorizedScreen from "../../components/screens/mainWalletAuthorized/MainWalletAuthorizedScreen";
import AccessWalletScreen from "../../components/screens/accessWallet/AccessWalletScreen";
import ForgetWalletScreen from "../../components/screens/forgetWallet/ForgetWalletScreen";
import ReceiveWalletScreen from "../../components/screens/receiveWallet/ReceiveWalletScreen";
import SendWalletScreen from "../../components/screens/sendWallet/SendWalletScreen";
import PassAmountForSendSend from "../../components/screens/passAmountForSend/PassAmountForSendSend";
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const Wallet: NextPage = () => {
    const router = useRouter()
    useEffect(()=>{
        router.push("/");
    }, [])

    return null;

    const [open, setOpen] = useState(false);
    const [screen, setScreen] = useState<WalletSteps>();
    const [walletRegisteredInfo, setWalletRegisteredInfo] = useState<{walletInfo: WalletRegisteredInfo, stepsAvailable: WalletSteps[]}|null>();
    const [accountRegisterInfo, setAccountRegisterInfo] = useState<{accountInfo: AccountRegisterInfo, stepsAvailable: WalletSteps[]}|null>()
    const [walletInfo, setWalletInfo] = useState<WalletsInfo>({});
    const devData = true;

    useEffect(()=>{
        if(devData){
            setScreen(WalletSteps.ShowAuthorizedHome);
            setWalletInfo({
                coldWallet:{
                    address: "5EFsuE2k19SkNDcXb31yXrmCRUYSpcV1r3YcDos9oTysi5pK",
                    balance: "9.9",
                },
                hotWallet:{
                    address: "5EFsuE2k19SkNDcXb31yXrmCRUYSpcV1r3YcDos9oTysi5pK",
                    balance: "99.9",
                },
                walletName: "Wawdf"
            });
        }
        else{
            setScreen(WalletSteps.ShowHome);
        }
    }, [])

    useEffect(()=>{
        if(screen&&walletRegisteredInfo&&!walletRegisteredInfo.stepsAvailable.includes(screen)){
            setWalletRegisteredInfo(null);
        }

        if(screen&&accountRegisterInfo&&!accountRegisterInfo.stepsAvailable.includes(screen)){
            setAccountRegisterInfo(null);
        }
    }, [screen])

    //region open pages events
    const openHomeScreen = () => {
        setScreen(WalletSteps.ShowHome);
    }

    const openCreateWallet = () => {
        setScreen(WalletSteps.CreateWallet);
    }

    const openCreateNewWallet = () => {
        setScreen(WalletSteps.CreateNewWallet);
    }

    const openGenerateMnemoric = () =>{
        setScreen(WalletSteps.GenerateMnemoric);
    }

    const openImportWallet = () => {
        setScreen(WalletSteps.ImportWallet);
    }

    const backToHome = () => {
        setScreen(WalletSteps.ShowHome)
    }

    const openStoredSecurely = () => {
        setScreen(WalletSteps.StoredSecurely);
    }

    const openAccessToWallet = () => {
        setScreen(WalletSteps.AccessToWallet);
    }

    const openShowAuthorizedHome = () => {
        setScreen(WalletSteps.ShowAuthorizedHome);
    }

    const openForgetWallet = () => {
        setScreen(WalletSteps.ForgetWallet);
    }

    const openReceiveWallet = () => {
        setScreen(WalletSteps.ReceiveWallet);
    }

    const openSentToWallet = () => {
        setScreen(WalletSteps.SentToWallet);
    }

    const openPassAmountForSend = () => {
        setScreen(WalletSteps.PassAmountForSend);
    }
    //endregion

    const moveToSecurity = ()=>{
        const walletName = localStorage.getItem("walletName");
        if(walletName){
            setWalletInfo({walletName})
            openAccessToWallet();
        }
    }

    const accessHandler = ()=>{
        const walletName = localStorage.getItem("walletName");
        if(walletName){
            setWalletInfo({walletName})
            openAccessToWallet();
        }else{
            toast('You don\'t have an account', { hideProgressBar: true, autoClose: 2000, type: 'warning' ,position:'top-center' })
        }
    }

    const generateMnemoricHandler = (accountInfo: AccountRegisterInfo, walletInfo:WalletRegisteredInfo)=>{
        createWalletInfo(walletInfo, [WalletSteps.GenerateMnemoric]);
        createAccountInfo(accountInfo,[WalletSteps.GenerateMnemoric, WalletSteps.StoredSecurely]);
        openGenerateMnemoric();
    }

    const storedSecurityHandler = (walletInfo:WalletRegisteredInfo)=>{
        createWalletInfo(walletInfo, [WalletSteps.GenerateMnemoric, WalletSteps.StoredSecurely]);
        openStoredSecurely();
    }

    const registerWalletHandler = (accountInfo: AccountRegisterInfo, walletInfo:WalletRegisteredInfo)=>{
        localStorage.setItem("walletName", accountInfo.walletName)
        createWalletInfo(
            walletInfo,
            [WalletSteps.ShowAuthorizedHome]
        );
        createAccountInfo(
            accountInfo,
            [WalletSteps.ShowAuthorizedHome]
        );
    }

    const accessWalletAuthorizedHandler = ()=>{
        openShowAuthorizedHome();
    }

    const mainAuthorizedCancelHandler = () =>{
        moveToSecurity();
        openHomeScreen();
    }

    const forgotWallet = () => {
        localStorage.removeItem("walletName")
        setWalletInfo({});
        setAccountRegisterInfo(null);

        setScreen(WalletSteps.ShowHome);
    }

    const cancelForgotWalletHandler = () => {
        if(walletInfo.coldWallet){
            setScreen(WalletSteps.ShowAuthorizedHome);
        } else {
            setScreen(WalletSteps.ShowHome);
        }
    }

    const openForgotWalletScreen = () => {
        openForgetWallet();
    }

    //region screens utilits
    const createWalletInfo = (walletInfo: WalletRegisteredInfo, stepsAvailable: WalletSteps[]) => {
        setWalletRegisteredInfo({walletInfo, stepsAvailable});
    }

    const createAccountInfo = (accountInfo: AccountRegisterInfo, stepsAvailable: WalletSteps[]) => {
        setAccountRegisterInfo({accountInfo, stepsAvailable});
    }
    //endregion

    return (
        <LayoutOne
            title={"Wallet"}
            description={"Wallet"}
            hideFooter={true}
            hideHeader={true}
        >
            <div className={"z-[9999999] fixed w-full h-full top-0 left-0 right-0 bottom-0 " +
                "flex items-center justify-center"}>
                <div className={"absolute text-center min-h-[348px] min-w-[300px] m-auto rounded-[10px] border-black " +
                    "bg-white shadow-2xl border-solid border-[#DFDFDF] "}>
                    {
                        (()=>{
                            switch (screen) {
                                //authorized and no authorized
                                case WalletSteps.ShowHome:
                                    return <MainWalletScreen
                                        createHandler={openCreateWallet}
                                        accessHandler={accessHandler}
                                        numberOf={"0.00"}
                                        importHandler={openImportWallet}
                                    />
                                case WalletSteps.ForgetWallet:
                                    return <ForgetWalletScreen
                                        forgetHandler={forgotWallet}
                                        cancel={cancelForgotWalletHandler}
                                    />

                                //Not authorized
                                case WalletSteps.CreateWallet:
                                    return <CreateWalletScreen
                                        cancel={backToHome}
                                        createNewHandler={openCreateNewWallet}
                                        signInHandler={()=>{}}
                                    />
                                case WalletSteps.ImportWallet:
                                    return <ImportWalletScreen
                                        cancel={backToHome}
                                        createNewHandler={()=>{}}
                                        signInHandler={()=>{}}
                                    />
                                case WalletSteps.CreateNewWallet:
                                    return <CreateNewWalletScreen
                                        cancel={backToHome}
                                        back={openCreateWallet}
                                        generateMnemoricHandler={generateMnemoricHandler}
                                    />
                                case WalletSteps.GenerateMnemoric:
                                    return <GenerateMnemoricScreen
                                        walletInfo={walletRegisteredInfo?.walletInfo as WalletRegisteredInfo}
                                        cancel={backToHome}
                                        back={openCreateNewWallet}
                                        storedSecurityHandler={storedSecurityHandler}
                                    />
                                case WalletSteps.StoredSecurely:
                                    return <StoredSecurelyWalletScreen
                                        walletInfo={walletRegisteredInfo?.walletInfo as WalletRegisteredInfo}
                                        cancel={backToHome}
                                        back={openGenerateMnemoric}
                                        accountInfo={accountRegisterInfo?.accountInfo as AccountRegisterInfo}
                                        registerWalletHandler={registerWalletHandler}
                                    />


                                //Authorized
                                case WalletSteps.AccessToWallet:
                                    return <AccessWalletScreen
                                        walletName={walletInfo.walletName as string}
                                        accessHandler={accessWalletAuthorizedHandler}
                                        forgotHandler={openForgotWalletScreen}
                                        cancel={backToHome}
                                    />
                                case WalletSteps.ShowAuthorizedHome:
                                    return <MainWalletAuthorizedScreen
                                        cancelHandler={mainAuthorizedCancelHandler}
                                        shareHandler={()=>{}}
                                        forgotHandler={openForgotWalletScreen}
                                        receiveHandler={openReceiveWallet}
                                        walletInfo={walletInfo}
                                        sendHandler={openSentToWallet}
                                    />
                                case WalletSteps.ReceiveWallet:
                                    return <ReceiveWalletScreen
                                        cancelHandler={openShowAuthorizedHome}
                                        forgotHandler={openForgotWalletScreen}
                                        walletInfo={walletInfo}
                                    />
                                case WalletSteps.SentToWallet:
                                    return <SendWalletScreen
                                        cancelHandler={openShowAuthorizedHome}
                                        forgotHandler={openForgotWalletScreen}
                                        continueOperation={openPassAmountForSend}
                                    />
                                case WalletSteps.PassAmountForSend:
                                    return <PassAmountForSendSend
                                        backHandler={openSentToWallet}
                                        cancelHandler={openShowAuthorizedHome}
                                        forgotHandler={openForgotWalletScreen}
                                        continueOperation={()=>{}}
                                    />
                            }
                        })()
                    }
                </div>
            </div>
            {open &&
                <BottomWalletPopup
                    title={""}
                    text={""}
                    buttonText={""}
                    closePopup={() => setOpen(false)}
                />
            }
        </LayoutOne>
    );
};

export default Wallet;

