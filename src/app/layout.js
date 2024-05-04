import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
  ZeroDevSmartWalletConnectors,
  DynamicWidget
} from "../lib/dynamic";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FiFi - DeFi Made Easy",
  description: "FiFi is a DeFi platform that makes it easy to access DeFi protocols.s",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
        environmentId: '38e11d0b-b84a-4312-b7e1-2d2283dd30ea',
        walletConnectors: [ EthereumWalletConnectors, ZeroDevSmartWalletConnectors ],
      }}>
        <Providers>
            <DynamicWagmiConnector>
              <body className={inter.className}>
              
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                
                
              </body>
            </DynamicWagmiConnector>
        </Providers>
      </DynamicContextProvider>
    </html>
  );
}
