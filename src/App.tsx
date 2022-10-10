import Header from "./components/layout/Header";
import Multiwrap from "./components/nft/Multiwrap";
import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <div className="h-screen bg-slate-800">
      <div className="flex flex-col gap-8">
        <Header />
        <Promotion />
        <Multiwrap />
      </div>
    </div>
  );
}
