import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {
    return (
        <div className="bg-slate-900 text-white">
            <div className="container mx-auto p-4 md:px-16">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="uppercase text-xl font-semibold">Kammoros NFT Mint</span>
                    </div>
                    <div>
                        <ConnectWallet accentColor="#f97316" colorMode="light"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header