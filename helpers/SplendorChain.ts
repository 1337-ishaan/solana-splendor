import { Chain } from 'wagmi'

export const splendor = {
  id: 111_8,
  name: 'Splendor',
  network: 'splendor',
  nativeCurrency: {
    decimals: 18,
    name: 'Splendor Mainnet',
    symbol: 'SPL',
  },
  rpcUrls: {
    public: { http: ['https://rpc.splendor.org'] },
    default: { http: ['https://rpc.splendor.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'Splendor Explorer', url: 'https://splendorexplorer.com' },
    default: { name: 'Splendor Explorer', url: 'https://splendorexplorer.com' },
  },
} as Chain;