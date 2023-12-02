import {TWidgetInfo} from "./types";
import {ApiAdminPanel} from "../../../api/bittensor";
import wallet from "../../../assets/icons/dashboard/wallet.svg";
import logo from "../../../assets/icons/common/splendor_logo_only.svg";
import logow from "../../../assets/icons/common/logo-white.svg";
import sdr1 from "../../../assets/icons/common/sdr.svg";
import storage from "../../../assets/icons/dashboard/storage.svg";
import sdr from "../../../assets/icons/home/splendorBlockchain/sdr.jpeg";
import dolar from "../../../assets/icons/dashboard/dolar.png";
import InfoWidget from "../info/InfoWidget";
import {useEffect, useState} from "react";
import { ethers } from 'ethers';
import axios from 'axios';
const TokensRateType = {
    USDT: 0,
    WBTC: 1
}
// Define the types for your state and functions
type PriceType = {
    type: string;
    price: string;
    nameCurrency: string;
    percentage?: string;
};

const splAddress = "0xB90E5c63Cb3847fd4313f4F4EB752b16e41d16F0"; // Define your SPL address
const spl_ABI = [
            {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_WBTC",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_CGLD",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_priceFeedWBTC",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_priceFeedCGLD",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "SplendorToken__FunctionPaused",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "SplendorToken__NotEnoughBalance",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "TokenBoughtWithCGLD",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokenBoughtWithWBTC",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "CGLD",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "WBTC",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "buySplendorWithCGLD",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "buySplendorWithWBTC",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "calculatePrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLatestCGLDInUSDPrice",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getLatestWBTCInUSDPrice",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "getPriceOfCGLDInUSD",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "getPriceOfSPLInUSD",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
]; // Define your SPL contract ABI
const getSPLPriceInUSD = async (spl_Contract: ethers.Contract): Promise<ISPLData> => {
  const _spl = ethers.utils.parseUnits("1");
  const priceCal = await spl_Contract.getPriceOfSPLInUSD(_spl);
  const price = ethers.utils.formatUnits(priceCal, 36);
  const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const percentage = res.data[0].market_cap_change_percentage_24h;
  const fixPercentage = Number(percentage).toFixed(2);

  return {
      price,
      rate: parseFloat(fixPercentage)
  };
};
const getSPLMarketcap = async (spl_Contract: ethers.Contract): Promise<string> => {
  try {
    const supply = await spl_Contract.totalSupply();
    const getSupply = ethers.utils.formatEther(supply);
    const _spl = ethers.utils.parseUnits("1");
    const priceCal = await spl_Contract.getPriceOfSPLInUSD(_spl);
    const getPriceCal = ethers.utils.formatUnits(priceCal, 36);
    const marketCap = parseFloat(getPriceCal) * parseFloat(getSupply);
    return Number(marketCap).toFixed(2);
  } catch (error) {
    return "0.00";
  }
};
interface ISPLData {
    price: string,
    rate: number
}

const InfoWidgets: React.FC = () => {
  const [splData, setSPLData] = useState<ISPLData>({ price: "0.00", rate: 0 });
  const [btcPrice, setBTCPrice] = useState<string>("0.00");
  const [marketCap, setMarketCap] = useState<string>("0.00");

  useEffect(() => {
    const fetchSPLData = async () => {
      const alchemyProvider = new ethers.providers.AlchemyProvider("homestead", 'Xr4QBiBFei5D28AOBOlpatKc0H-bT7Z_');
      const signer = new ethers.Wallet("0x5d7e47f3117cb4ce363e2825c62ee549aae53dacfa0edd8dfe7279b4f10f5d93", alchemyProvider);
      const spl_Contract = new ethers.Contract(splAddress, spl_ABI, signer);
      const data = await getSPLPriceInUSD(spl_Contract);
      setSPLData(data);
      const marketCapData = await getSPLMarketcap(spl_Contract);
      setMarketCap(marketCapData); // Asume que tienes un estado llamado marketCap
    };

    const fetchBTCData = async () => {
      const btcData = await ApiAdminPanel.getBTCPrice();
      setBTCPrice(btcData.BTC_price_usd.toFixed(2));
    };

    fetchSPLData();
    fetchBTCData();
  }, []);

    function formatNumber(numberString: string){
        const number = Number(numberString);
        if(isNaN(number))
            return numberString;
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }


    const testInfoDataWidgets: TWidgetInfo[] = [
              {
            id: 1,
            title: "SPL Marketcap",
            value: `$${formatNumber(marketCap)}`, // Aquí se usa el estado marketCap
            rate:  undefined,
            icon: wallet,
            link: '/',
        },
       {
            id: 2,
            title: "Earnings",
            value: "204 SDR",
            rate: 5,
            icon: sdr1,
            link: '/',
        },
        {
            id: 3,
            title: "SPL Price",
            value: `$${formatNumber(splData.price)}`,
            rate: parseFloat(String(splData.rate)),
            icon: logow,
            link: '/',
        },
        {
            id: 4,
            title: "SDR Price",
            value: `$ 1.332260`,
            rate: undefined,
            icon: sdr1,
            link: '/',
        }
    // ...tu array de widgets...
  ];

  return (
    <div className="flex flex-col h-screen mx-[30px] min-w-[440px]">
        {testInfoDataWidgets.map(
            button => <InfoWidget {...button} key={button.id} />
        )}
    </div>
  );
};

export default InfoWidgets;
