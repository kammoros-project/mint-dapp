import { ConnectWallet } from "@thirdweb-dev/react";
import Container from "./Container";

function Header() {
    return (
        <div className="bg-slate-900 text-white">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="uppercase text-xl font-semibold">Kammoros NFT Mint</span>
                    </div>
                    <div>
                        <ConnectWallet accentColor="#f97316" colorMode="light"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header