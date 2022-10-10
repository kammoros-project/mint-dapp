import Container from "./layout/Container"
import Countdown from 'react-countdown';

function Promotion() {

    return (
        <div>
            <Container>
                <div className="p-8 bg-emerald-400/80 rounded text-slate-100">
                    <h2 className="text-xl font-bold uppercase">Pre-Launch Bonus</h2>
                    <p className="my-4">Mint your NFTs before the launch and receive a <span className="underline">bonus airdrop</span> of tokens.</p>
                    <p>
                        <span className="mr-2">Time until launch:</span>
                        <Countdown date={1666308600000} />
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Promotion