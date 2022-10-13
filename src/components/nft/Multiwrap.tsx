import Container from "../layout/Container"
import NFTDrop from "./NFTDrop"

const contracts = [
    { contractAddress: "0x0150a8a13695FF9708bC1bACCEbaD6E3cf186eAe", bonus: "7,000" },
    { contractAddress: "0x31A81011879ab76328aD7C0c7154A2af476961c6", bonus: "14,000" },
    { contractAddress: "0xB472F2a977f7b60dBd22732308dD33210828925b", bonus: "28,000" },
    { contractAddress: "0x84307e3f9E175A0BcEeeA9BF66989Fe285206BE7", bonus: "40,000" },
    { contractAddress: "0xDCb3CcdBE6388bFDE91A1cec61D8DeD8F169f3EE", bonus: "70,000" },
]

function Multiwrap() {

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-16">
                {contracts.map((data, key) => <NFTDrop key={key} {...data} />)}
            </div>
        </Container>
    )

}

export default Multiwrap