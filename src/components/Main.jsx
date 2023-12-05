import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { DataContext } from "../context/DataContext";

function Main() {
  const { blocksData } = useContext(DataContext);

  return (
    <div className="flex flex-col md:flex-row items-stretch px-4 md:px-24 my-[-150px]">
    <div className="w-full px-4 mb-4 mr-2 text-left border divide-y rounded-lg md:w-1/2 md:mb-0">
      <h1 className="py-4 text-xl font-bold">Latest Blocks</h1>
      {blocksData.length ? (
        blocksData.map((block, index) => {
          if (index >= 10) {
            return;
          }
  
          return (
            <div key={block.number} className="flex items-center justify-between py-4">
              <div className="flex items-center w-1/2">
                <h2 className="px-4 py-3 mr-4 bg-gray-100 rounded-lg"><SiBlockchaindotcom size={20} /></h2>
                <Link to={`/block/${block.number}`} className="text-[#357BAD] text-sm">
                  {block.number}
                </Link>
              </div>
              <div className="w-60">
                <p className="text-sm text" >
                  Fee Recipient{" "}
                  <span className="text-[#357BAD] text-sm">
                    <Link to={`/address/${block.miner}`}>
                      {block.miner.slice(0, 12)}
                    </Link>
                  </span>
                  ...
                </p>
                <p className="text-[#357BAD] text-sm">
                  <Link to={`/txs?block=${block.number}`}>
                    {block.transactions.length} txs
                  </Link>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
      <div className="p-4 text-center">
        <Link to="/blocks" className="block p-2 text-xs rounded-md bg-sky-100 text-sky-500">
          View All Blocks
        </Link>
      </div>
    </div>
  
    <div className="w-full px-4 ml-0 text-left bg-white border divide-y rounded-lg md:w-1/2 md:px-8 md:ml-2">
      <h1 className="py-4 text-xl font-bold">Latest Transactions</h1>
      {blocksData.length ? (
        blocksData[0].transactions.map((tx, index) => {
          if (index >= 10) {
            return;
          }
  
          return (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <h2 className="px-4 py-3 mr-4 bg-gray-100 rounded-full">
                  <IoDocumentTextOutline size={20} />
                </h2>
                <Link to={`/tx/${tx.hash}`} className="text-[#357BAD] text-sm">
                  {tx.hash.slice(0, 16)}...
                </Link>
              </div>
              <p className="text-sm text">
                From{" "}
                <span className="text-[#357BAD] text-sm">
                  <Link to={`/address/${tx.from}`}>
                    {tx.from.slice(0, 12)}
                  </Link>
                </span>
                ...
              </p>
              <p className="text-sm text">
                To{" "}
                <span className="text-[#357BAD] text-sm">
                  <Link to={`/address/${tx.to}`}>{tx.to.slice(0, 12)}</Link>
                </span>
                ...
              </p>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
      <div className="p-4 text-center">
        <Link to="/txs" className="block p-2 text-xs rounded-md bg-sky-100 text-sky-500">
          View All Transactions
        </Link>
      </div>
    </div>
  </div> 
  );
}

export default Main;
