import Container from "../layout/Container"
import NFTDrop from "./NFTDrop"

const contracts = [
    { contractAddress: "0xffd8C7E320f5f2A9B08c638FdDe8058fc6973E90", bonus: "7,000" },
    { contractAddress: "0xD2691468e178D90eC6F37d6B625894fEaE8c4B7f", bonus: "14,000" },
    { contractAddress: "0x6a42B176D20e1D41Df505FA5bCd845ecC1852Ab5", bonus: "28,000" },
    { contractAddress: "0x1180738A859c0910c3adD347Afc6F5dF6a56d3a4", bonus: "40,000" },
    { contractAddress: "0x5b08e5B662D97b38f502E67BC48eD69376bcE1c9", bonus: "70,000" },
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