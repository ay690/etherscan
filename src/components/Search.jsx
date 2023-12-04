import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchSectionImage } from "../assests";

const Search = () => {
  const isSmallOrMediumScreen = () => window.innerWidth <= 768;
  return (
    <div
      className="w-[100vw] h-[400px] bg-[#142f74] border-b px-20 shadow-lg bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://etherscan.io/images/svg/waves-light.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center gap-4 py-20 ">
        <div
          className={`py-4 flex flex-col  ${
            isSmallOrMediumScreen() ? "text-sm" : "w-3/5"
          }`}
        >
          <h1 className="mb-4 text-lg font-bold text-white">
            The Ethereum Blockchain Explorer
          </h1>
          <form
            className={`w-full max-w-[600px] ${
              isSmallOrMediumScreen() ? "text-sm" : ""
            }`}
          >
            <div className="relative flex flex-col items-center w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-5 mb-2 text-gray-900 truncate border border-gray-300 rounded-lg outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-0.5 bottom-5.5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-4"
              >
                <AiOutlineSearch />
              </button>
            </div>
          </form>
          <p className="mb-4 text-sm text-white">
            Featured: Chat with any EVM address on the Blockscan Chat App{" "}
            <a href="#" className="text-[#0784C3]">
              Download Now!
            </a>
          </p>
        </div>

        <div className="hidden sm:flex">
          <img
            src={SearchSectionImage}
            className="rounded-lg h-[120px] w-[300px]"
            alt="Search Section"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
