"use client"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const endpoint = useMemo(()=> clusterApiUrl("devnet"),[]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div>{children}</div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider> 
  );
}

