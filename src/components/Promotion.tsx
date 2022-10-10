import Container from "./layout/Container"
import Countdown from 'react-countdown';

// const data = [
//     { amount: 100, value: 500, bonus: 70000 },
//     { amount: 167, value: 300, bonus: 40000 },
//     { amount: 250, value: 200, bonus: 28000 },
//     { amount: 500, value: 100, bonus: 14000 },
//     { amount: 1000, value: 50, bonus: 7000 },
// ]

function Promotion() {

    return (
        <div>
            <Container>
                <div className="p-4 border-2 border-emerald-400 rounded text-slate-100">
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

{/* <h2 className="text-xl font-bold uppercase">Pre-Launch Bonus</h2>
                            <p className="my-4">Mint your NFTs before the launch and receive a <span className="underline">bonus airdrop</span> of tokens.</p>
                            <p>
                                <span className="mr-2">Time until launch:</span>
                                
                            </p> */}
{/* <div>
                            <table>
                                <thead>
                                    <tr>
                                        <td className="border-2 border-slate-800 py-2 px-4 text-right bg-slate-800/40">Quantity</td>
                                        <td className="border-2 border-slate-800 py-2 px-4 text-right bg-slate-800/40">Value (BUSD)</td>
                                        <td className="border-2 border-slate-800 py-2 px-4 text-right bg-slate-800/40">Airdrop (Bonus)</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((d, k) => (
                                        <tr key={k}>
                                            <td className="border-2 border-slate-800 py-2 px-4 text-right">{d.amount}</td>
                                            <td className="border-2 border-slate-800 py-2 px-4 text-right">{d.value}</td>
                                            <td className="border-2 border-slate-800 py-2 px-4 text-right">{d.bonus}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> */}