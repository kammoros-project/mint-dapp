import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Multiwrap from "./components/nft/Multiwrap";
import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <Header />
        <Promotion />
        <Multiwrap />
      </div>
      <Footer />
    </div>
  );
}
