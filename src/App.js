import React, { useEffect } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

const TWITTER_LINK = `https://twitter.com/Rafael41603219`;

const App = () => {

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if(solana.isPhantom) {
          console.log("Phantom wallet encontrada!! 🥳");
        }
      } else {
        alert("Wallet no encontrada 😞. Descarga phantom wallet 👻");
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">👾 Solana Dapp</p>
          <p className="sub-text">
            Please connect your wallet to Solana Dapp
          </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`Built by rafaelfuentes.eth 😎`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
