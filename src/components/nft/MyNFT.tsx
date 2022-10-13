import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react"
import contracts from "../../contracts"

interface INFTCollection {
    contractAddress: string
}

function NFTCollection({ contractAddress }: INFTCollection) {

    const address = useAddress();
    const { contract } = useContract(contractAddress)

    const { data: ownedNfts, isLoading } = useOwnedNFTs(contract, address);

    return (
        <>
            {isLoading ? <div className="text-center text-sm text-white font-semibold">Loading...</div> :
                <>
                    {ownedNfts?.map((nft, key) => (
                        <div>
                            <ThirdwebNftMedia
                                metadata={nft.metadata}
                                className="rounded-xl"
                            />
                            <h3 className="text-xs text-white font-semibold text-center mt-2">{nft.metadata.name}</h3>
                        </div>
                    ))}
                </>
            }
        </>
    )
}

function MyNFT() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16">
            {contracts.map((data, key) => <NFTCollection key={key} contractAddress={data.contractAddress} />)}
        </div>
    )
}

export default MyNFT