import React, { useEffect, useState } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

const TWITTER_LINK = `https://twitter.com/Rafael41603219`;

const App = () => {

  const [walletAddress, setWalletAddress] = useState(null);

  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if(solana.isPhantom) {
          console.log("Phantom wallet encontrada!! 🥳");
          const response = await solana.connect({onlyIfTrusted: true});
          console.log("Conectado con la llave pública: ", response.publicKey.tostring());

          setWalletAddress(response.publicKey.toString());

        }
      } else {
        alert("Wallet no encontrada 😞. Descarga phantom wallet 👻");
      }
    } catch(error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      console.log("Connected with Public Key: ", response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wattet-button"
    onclick={connectWallet()}>
      Connect 🔌
    </button>
  );

  /** useEffect se llama una vez en el montaje del componente cuando
  * ese segundo parámetro (el []) esta vacío.
  */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      {/* This was solely added for some styling fanciness */}
      <div className={walletAddress ? 'authed-container' : 'container'}>
        <div className="header-container">
          <p className="header">👾 Solana Dapp</p>
          <p className="sub-text">
            Please connect your wallet to Solana Dapp
          </p>
          {/* Render your connect to wallet button right here*/}
          {!walletAddress && renderNotConnectedContainer()}
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
