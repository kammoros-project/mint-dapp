import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Page from "./components/nft/Page";
// import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <Header />
        {/* <Promotion /> */}
        <Page />
      </div>
      <Footer />
    </div>
  );
}
