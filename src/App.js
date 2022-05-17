import React, { useEffect, useState } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import idl from "./idl.json";
import './App.css';
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js"
import { Program, Provider, web3 } from "@project-serum/anchor";

const TWITTER_LINK = `https://twitter.com/Rafael41603219`;

const TEST_GIFS = [
  'https://media3.giphy.com/media/ERt4qEWqOC8fRTPcAw/giphy.gif?cid=790b76115949a99407726042743b3ae16ee5a3e13d83b9ef&rid=giphy.gif&ct=g',
	'https://media3.giphy.com/media/8uvgnTDSSpcVdVMjmf/giphy.gif?cid=790b76119d8493b42c2afb08728f3ae73a4ecf625994c58d&rid=giphy.gif&ct=g',
  "https://media1.giphy.com/media/XX0V50HI1rWAzVfABm/200w.webp?cid=ecf05e47zt35qkanc9ztuasvefce1eevbzkakz8h13ovwto3&rid=200w.webp&ct=g",
  "https://media2.giphy.com/media/13u96fd8W8yCQw/200w.webp?cid=ecf05e4790qxio33lurfyob2j4kh8zniu7iq0vy7yusuwb0m&rid=200w.webp&ct=g"
]

const { SystemProgram, Keypair } = web3;

let baseAccount = Keypair.generate();

const programID = new PublicKey(idl.metadata.address);

const network = clusterApiUrl("devnet");

const opts = {
  preflightCommitment: "processed"
}

const App = () => {

  const [walletAddress, setWalletAddress] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [gifList, setGifList] = useState([]);

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

  const sendGif = async () => {
    if (inputValue.length > 0) {
      console.log("Gif link: ", inputValue);
      setGifList([...gifList, inputValue]);
      setInputValue("");
    } else {
      console.log("Empty input. Try again 🙏🏻");
    }
  };
 
  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  }

  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wattet-button"
    onClick={connectWallet()}>
      Connect 🔌
    </button>
  );

  const renderConnectedContainer = () => {
    // If we hit this, it means the program account hasn't been initialized.
      if (gifList === null) {
        return (
          <div className="connected-container">
            <button className="cta-button submit-gif-button" onClick={createGifAccount}>
              Do One-Time Initialization For GIF Program Account
            </button>
          </div>
        )
      } 
      // Otherwise, we're good! Account exists. User can submit GIFs.
      else {
        return(
          <div className="connected-container">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendGif();
              }}
            >
              <input
                type="text"
                placeholder="Enter gif link!"
                value={inputValue}
                onChange={onInputChange}
              />
              <button type="submit" className="cta-button submit-gif-button">
                Submit
              </button>
            </form>
            <div className="gif-grid">
              {/* We use index as the key instead, also, the src is now item.gifLink */}
              {gifList.map((item, index) => (
                <div className="gif-item" key={index}>
                  <img src={item.gifLink} />
                </div>
              ))}
            </div>
          </div>
        )
      }
    }

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

  const getGifList = async() => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
      
      console.log("Got the account", account)
      setGifList(account.gifList)
  
    } catch (error) {
      console.log("Error in getGifList: ", error)
      setGifList(null);
    }
  }

  useEffect(() => {
    if(walletAddress) {
      console.log("Fetching GIF list... ");

      setGifList(TEST_GIFS);
    }
  }, [walletAddress]);

  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl, programID, provider);
      console.log("ping")
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount]
      });
      console.log("Created a new BaseAccount w/ address:", baseAccount.publicKey.toString())
      await getGifList();
  
    } catch(error) {
      console.log("Error creating BaseAccount account:", error)
    }
  }

  return (
    <div className="App">
      {/* This was solely added for some styling fanciness */}
      <div className={walletAddress ? 'authed-container' : 'container'}>
        <div className="header-container">
          <p className="header">Cypherpunk Revolution 🏴‍☠️</p>
          <p className="sub-text">
            View the cypherpunk messages...
          </p>
          {/* Render your connect to wallet button right here*/}
          {!walletAddress && renderNotConnectedContainer()}
          {/** We just need to add the inverse here!*/}
          {walletAddress && renderConnectedContainer()}
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
