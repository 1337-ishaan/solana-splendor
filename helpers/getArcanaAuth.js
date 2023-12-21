// Set up Arcana Auth 

import { AuthProvider } from "@arcana/auth";


export const getAuthProvider =  () => {
  const auth = new AuthProvider(
    "xar_test_90664d2bf2b0e2961cd475b759c248abb0091985", // App client ID
    { 
      position: 'left',         // default: right
      theme: 'light',           // default: dark
      alwaysVisible: false,     // default: true, wallet always visible
      setWindowProvider: true,  // default: false, window.ethereum not set
      connectOptions: {
        compact: true           // default: false, regular plug-and-play login UI
      },
      chainConfig: {
        chainId: '137',                    // defaults to Ethereum
        rpcUrl: 'https://polygon-rpc.com', // defaults to 'https://rpc.ankr.com/eth'
      },
  })
  try {
return auth;
  } catch (e) {
    console.log("ERROR: ", "" +e);
    // Handle exception case
  }
  return auth;
};