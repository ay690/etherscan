import { useEffect, useContext } from "react";
import { Chart, ChartSvg } from "./assests";
import {
  Header,
  Header2,
  Main,
  Search,
  Statbox,
  AddressDetails,
  Block,
  Blocks,
  Transaction,
  Transactions
} from "./components";
import "./App.css";
import { DataContext } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const { getBlockInformation, blocksData, transactions } =
    useContext(DataContext);

  useEffect(() => {
    getBlockInformation();
    // console.log("blocksData:", blocksData);
    // console.log("transactions:", transactions);
  }, []);

  return (
    <>
      <Header />
      <Header2 />
     
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Search />
              <Statbox />
              <Main />
            </>
          }
        />
        <Route path="/" element={<Main />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/block/:blockNumberOrHash" element={<Block />} />
        <Route path="/txs" element={<Transactions />} />
        <Route path="/tx/:hash" element={<Transaction />} />
        <Route path="/address/:address" element={<AddressDetails />} />
      </Routes>
    </>
  );
}

export default App;
