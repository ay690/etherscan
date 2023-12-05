import { useEffect, useContext } from "react";
import { Chart, ChartSvg } from "./assests";
import { Header, Header2, Search, Statbox } from "./components";
import "./App.css";
import { DataContext } from "./components/DataContext";


function App() {
  const { getBlockInformation, blocksData, transactions } = useContext(DataContext);

  useEffect(() => {
    getBlockInformation();
    console.log("blocksData:", blocksData);
    console.log("transactions:", transactions);
}, []);

  return (
    <>
      <Header />
      <Header2 />
      <Search />
      <Statbox />
    </>
  );
}

export default App;
