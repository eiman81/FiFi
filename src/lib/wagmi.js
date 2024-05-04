import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { createConfig } from 'wagmi';

export const config = createConfig({
    chains: [sepolia],
    multiInjectedProviderDiscovery: false,
    transports: {
      [sepolia.id]: http(),
    },
  });