import { useActiveClaimCondition, useClaimedNFTSupply, useContract, useContractMetadata, useUnclaimedNFTSupply, Web3Button } from "@thirdweb-dev/react"
import { BigNumber } from "ethers"
import { formatUnits } from "ethers/lib/utils"
import { useEffect, useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import Logo from "../../assets/logo.png";

interface INFTDrop {
    contractAddress: string
    bonus: string
}

function Loading() {
    return (
        <div className="animate-pulse border bg-white/10 p-4 rounded-3xl">
            <img src={Logo} className="" />
            <h3 className="text-center text-white font-semibold text-sm">Loading</h3>
        </div>
    )
}

function NFTDrop({ contractAddress, bonus }: INFTDrop) {

    const { contract } = useContract(contractAddress)
    const { data: contractMetadata, isLoading } = useContractMetadata(contract)
    const { data: unclaimedSupply } = useUnclaimedNFTSupply(contract);
    const { data: claimedSupply } = useClaimedNFTSupply(contract);
    const { data: activeClaimCondition } = useActiveClaimCondition(contract);

    const [qty, setQty] = useState<number>(1)
    const [ttl, setTtl] = useState<BigNumber>(activeClaimCondition?.price || BigNumber.from(0))

    useEffect(() => {
        if (activeClaimCondition?.price) {
            setTtl(activeClaimCondition?.price)
        }
    }, [activeClaimCondition?.price])

    function handleClick(nb: number) {
        let nQty = qty + nb
        if (nQty <= 0) {
            nQty = 1
        }
        setQty(nQty)
        const price = activeClaimCondition?.price || BigNumber.from(0)
        setTtl(price.mul(nQty))
    }

    const bonusExpired = () => {
        return Date.now() > 1666308600000
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="flex flex-col gap-8 border-2 md:border-0 px-2 pt-2 pb-8 md:p-0 rounded-3xl">
                    <div className="group relative">
                        <img src={contractMetadata?.image} alt={`${contractMetadata?.name} preview`} className="rounded-2xl w-fit" />
                        {bonusExpired() ? <></> : <div className="absolute top-0 left-0 w-full h-full bg-transparent text-white p-4 flex items-end">
                            <div className="text-xs uppercase font-semibold p-2 bg-slate-700 w-fit rounded border-2">{bonus} KMT Bonus</div>
                        </div>}
                        <div className="absolute top-0 left-0 w-full h-0 bg-slate-800 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500 text-white p-4">
                            <div className="flex flex-col justify-center items-center h-full gap-4">
                                <h2 className="text-xl font-bold">{contractMetadata?.name}</h2>
                                <div>
                                    <span>{claimedSupply?.toNumber()}</span>
                                    <span className="mx-2">/</span>
                                    <span>{(claimedSupply?.toNumber() || 0) + (unclaimedSupply?.toNumber() || 0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-emerald-400 py-2 px-4 border-2 border-slate-800 rounded-tl-xl rounded-bl-xl hover:bg-emerald-500" onClick={() => handleClick(-1)}><FaMinus /></button>
                        <div className="grow py-3 text-center border-2 border-emerald-400 rounded font-bold text-2xl text-emerald-400">{qty}</div>
                        <button className="bg-emerald-400 py-2 px-4 border-2 border-slate-800 rounded-tr-xl rounded-br-xl hover:bg-emerald-500" onClick={() => handleClick(1)}><FaPlus /></button>
                    </div>
                    <div>
                        <Web3Button
                            contractAddress={contractAddress}
                            action={async (contract) => await contract.erc721.claim(qty)}
                            onSuccess={(result) => alert(`Successfully minted ${result.length} NFT(s)`)}
                            onError={(error) => alert(error?.message)}
                            accentColor="#34d399"
                        >
                            {`Mint${qty > 1 ? ` ${qty}` : ""}${activeClaimCondition?.price.eq(0)
                                    ? " (Free)"
                                    : activeClaimCondition?.currencyMetadata.displayValue
                                        ? ` (${formatUnits(
                                            ttl,
                                            activeClaimCondition.currencyMetadata.decimals
                                        )} ${activeClaimCondition?.currencyMetadata.symbol})`
                                        : ""
                                }`}
                        </Web3Button>
                    </div>
                </div>}
        </>
    )
}

export default NFTDrop