// import { ConnectWallet } from "@thirdweb-dev/react";
// import { useContract } from "@thirdweb-dev/react";
import Calc from "./components/Calc";
import "./styles/Home.css";

// const { contract } = useContract("0xc69e846CE992f536F7fE901c26bf6C048f9fe715")

export default function Home() {
  return (


    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        <Calc />
        </h1>
      </main>
    </div>
  );
}
