import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs, useTransferNFT } from "@thirdweb-dev/react"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCross, FaTimes } from "react-icons/fa";
import contracts from "../../contracts"
import Spin from "../support/Spin";

const REGEX = /^0x[a-fA-F0-9]{40}$/

interface INFTCollection {
    contractAddress: string
}

interface ITransferNFT {
    contractAddress: string
    tokenId: string
}

function TransferNFT({ contractAddress, tokenId }: ITransferNFT) {

    const [show, setShow] = useState(false)

    const address = useAddress();
    const { contract } = useContract(contractAddress)

    const {
        mutate: transferNFT,
        isLoading: isTransferring,
        error,
    } = useTransferNFT(contract);

    if (error) {
        console.error("Failed to transfer nft", error);
    }

    const { register, handleSubmit } = useForm();

    async function onSubmit(data: any) {
        const to = data.to
        await transferNFT({ to, tokenId })
    }

    if (show) {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
                <input {...register("to", { pattern: REGEX })} placeholder="Address" className="rounded px-2" />
                <button type="submit" className="py-1 px-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-400/50 uppercase" >
                    <div className="flex gap-2 items-center">
                        {isTransferring && <Spin />}
                        <span>Transfer</span>
                    </div>
                </button>

                <button onClick={() => setShow(false)} className="p-2 border border-red-400 text-red-400 rounded hover:bg-red-400/50"><FaTimes /></button>
            </form>
        )
    } else {
        return <button onClick={() => setShow(true)} className="py-1 px-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-400/50 uppercase">Transfer</button>
    }

}

function NFTCollection({ contractAddress }: INFTCollection) {

    const address = useAddress();
    const { contract } = useContract(contractAddress)

    const { data: ownedNfts, isLoading } = useOwnedNFTs(contract, address);


    return (
        <>
            {isLoading ? <tr><td>Loading...</td></tr> :
                <>
                    {ownedNfts?.map((nft, key) => (
                        <tr className="flex justify-between items-center">
                            <td className="px-8 py-2">
                                <div className="flex gap-4 items-center">
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        className="rounded h-16"
                                    />
                                    <h3 className="text-sm text-white font-semibold text-center mt-2">{nft.metadata.name}</h3>
                                </div>
                            </td>
                            <td className="px-8 py-2 flex justify-end items-center gap-4">
                                <a href="https://stake.kammorostoken.com" className="px-2 py-1 uppercase rounded border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-emerald-800 disabled:border-slate-500 disabled:bg-slate-500/20  disabled:text-slate-500">Stake</a>
                                <TransferNFT contractAddress={contractAddress} tokenId={nft.metadata.id} />
                            </td>
                        </tr>
                    ))}
                </>
            }
        </>
    )
}

function MyNFT() {
    return (
        <table className="table-fixed w-full">
            <tbody>
                {contracts.map((data, key) => <NFTCollection key={key} contractAddress={data.contractAddress} />)}
            </tbody>
        </table>
    )
}

export default MyNFT