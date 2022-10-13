import contracts from "../../contracts"
import NFTDrop from "./NFTDrop"

function Multiwrap() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-16">
            {contracts.map((data, key) => <NFTDrop key={key} {...data} />)}
        </div>
    )

}

export default Multiwrap