"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import BackgroundToggle from "../components/BackgroundToggle";

export default function HomePage() {
//cursor
const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const x = event.clientX + window.scrollX;
  const y = event.clientY + window.scrollY;
if(blob){

  blob.animate({
    left: `${x}px`,
    top: `${y}px`
  }, {
    duration: 2500,
    fill: "forwards"
  });
}
};

    const{publicKey, connected } = useWallet();
    return (
        <>
        <BackgroundToggle/>
        <div id="blob"> <div id="blur"></div>
        </div>

        {/* ------------------------------------------------------cursor----------------------------------------------------------------------- */}
      {/* ------------------------------------------------------------------------------------------------------ */}
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
            <WalletMultiButton/>
            <div className="text-2xl text-center mt-4">
                {connected ? (
                    <p>Connected to wallet: {publicKey?.toBase58()}</p>
                ):(
                    <p>Please connect your wallet</p>
                )
            }
            </div>
        </div>
        </>
    )
}