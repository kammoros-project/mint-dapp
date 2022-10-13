import Container from "./layout/Container"
import Countdown from 'react-countdown';

function Promotion() {

    return (
        <div>
            <Container>
                <div className="p-4 border-2 border-kammoros rounded text-slate-100">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-semibold uppercase underline">Pre-launch bonus tokens</span>
                            <span className="mx-2">Mint your NFTs before the launch and receive bonus tokens!</span>
                        </div>
                        <div>
                            <Countdown date={1666308600000} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Promotion