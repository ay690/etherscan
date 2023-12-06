import { useContext, useState } from "react";
import moment from "moment";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

function Blocks() {
  const { blocksData } = useContext(DataContext);
  const [formattedBlocks, setFormattedBlocks] = useState([]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(blocksData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedBlocks = blocksData.slice(startIndex, endIndex);

  const blocks = paginatedBlocks.map((blockData, index) => {
    const timestamp = moment(blockData.timestamp * 1000);
    const formattedTimestamp = timestamp.format("LLL");
    const age = timestamp.fromNow();
    return (
      <div key={index} className="flex py-4">
        <p className="w-2/12 text-[#357BAD]">
          <Link to={`/block/${blockData.number}`}>{blockData.number}</Link>
        </p>
        <p className="w-2/12">{age}</p>
        <p className="w-1/12 text-[#357BAD]">
          <Link to={`/txs?block=${blockData.number}`}>
            {blockData.transactions.length}
          </Link>
        </p>
        <p className="w-3/12 text-[#357BAD]">
          <Link to={`/address/${blockData.miner}`}>
            {blockData.miner.slice(0, 16)}...
          </Link>
        </p>
        <p className="w-2/12">{blockData.gasUsed}</p>
        <p className="w-2/12">{blockData.gasLimit}</p>
        <p className="w-2/12">{blockData.baseFeeInGwei} Gwei</p>
      </div>
    );
  });

  return (
    <section className="px-8 py-4 mx-24 my-8 bg-white border divide-y rounded-lg">
      <p className="pb-4 text-sm text-[#6C757E]">
        Block #{blocksData[blocksData.length - 1]?.number} to #
        {blocksData[0]?.number} (Total of {blocksData.length} Blocks)
      </p>
      <div className="flex py-4 bg-sky-50">
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Block</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Age</p>
        <p className="w-1/12 py-3 text-[#6C757E] font-bold">Txn</p>
        <p className="w-3/12 py-3 text-[#6C757E] font-bold">Fee Recipient</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Gas Used</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Gas Limit</p>
        <p className="w-2/12 py-3 text-[#6C757E] font-bold">Base Fee</p>
      </div>
      {blocks}
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
        <div className="flex items-center mt-2">
          <span className="mr-2">Page</span>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="px-2 py-1 border rounded"
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

export default Blocks;
