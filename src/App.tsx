import Header from "./components/layout/Header";
import Promotion from "./components/Promotion";

export default function Home() {
  return (
    <div className="h-screen bg-slate-800">
      <Header />
      <Promotion />
    </div>
  );
}
