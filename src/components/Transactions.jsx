import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";

function Transactions() {
  const { blocksData, transactions } = useContext(DataContext);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blockNumber = searchParams.get("block");

  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedTransactions = blockNumber
    ? blocksData
        .find((blockData) => blockData.number == blockNumber)
        .transactions.slice(startIndex, endIndex)
    : transactions.slice(startIndex, endIndex);

  return (
    <section className="px-8 py-4 mx-24 my-8 bg-white border divide-y rounded-lg">
      <div className="flex py-1 bg-sky-50">
        <p className="w-3/12 py-3 text-[#6C757E] font-bold">Txn Hash</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Block</p>
        <p className="w-3/12 py-3 text-[#6C757E] font-bold">From</p>
        <p className="w-3/12 py-3 text-[#6C757E] font-bold">To</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Data</p>
      </div>
      {transactionsToComponent(paginatedTransactions)}
      <div className="flex justify-between mt-4">
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 mr-2 mt-2 text-white ${
              currentPage === 1 ? "bg-gray-500" : "bg-blue-500"
            } rounded`}
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mt-2 text-white ${
              currentPage === totalPages ? "bg-gray-500" : "bg-blue-500"
            } rounded`}
          >
            Next
          </button>
        </div>
        <div>
          <span className="mr-2">Page</span>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="px-2 py-1 mt-2 border rounded"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <span className="ml-2">of {totalPages}</span>
        </div>
      </div>
    </section>
  );
}

function transactionsToComponent(txs) {
  return txs.map((tx, index) => {
    return (
      <section key={index} className="flex py-4">
        <p className="w-3/12 text-[#357BAD]">
          <Link to={`/tx/${tx.hash}`}>{tx.hash.slice(0, 16)}...</Link>
        </p>
        <p className="w-2/12 text-[#357BAD]">
          <Link to={`/block/${tx.blockNumber}`}>{tx.blockNumber}</Link>
        </p>
        <p className="w-3/12 text-[#357BAD]">
          <Link to={`/address/${tx.from}`}>{tx.from.slice(0, 16)}...</Link>
        </p>
        <p className="w-3/12 text-[#357BAD]">
          <Link to={`/address/${tx.to}`}>{tx.to.slice(0, 16)}...</Link>
        </p>
        <p className="w-2/12">{tx.data.slice(0, 16)}...</p>
      </section>
    );
  });
}

export default Transactions;
