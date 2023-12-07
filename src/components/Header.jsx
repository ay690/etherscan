import React, { useState, useEffect } from "react";
import { PiGasPumpLight } from "react-icons/pi";
import { BsBrightnessLow } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import axios from "axios";

const Header = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const [gasPrice, setGasPrice] = useState(null);
  
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const ethResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        setEthPrice(ethResponse.data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    };

    fetchEthPrice();

  }, []);

  return (
    <div className="w-full h-[50px] bg-white border-b px-10 shadow-lg hidden sm:flex">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <p className="hidden text-gray-400 text sm:block">
            ETH Price:{" "}
            <a href="#" className="text text-[#0784C3]">
              ${(ethPrice)?.toFixed(2)}
            </a>
          </p>
          <div className="flex items-center justify-center hidden gap-2 sm:flex">
            <PiGasPumpLight />
            <p>
              Gas:{" "}
              <a href="#" className="text text-[#0784C3]">
                36 Gwei
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-3">
            <li className="hidden rounded-lg hover:bg-gray-300 sm:block">
              <button>
                <BsBrightnessLow
                  size={30}
                  style={{
                    padding: "3px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </li>
            <li className="hidden rounded-lg hover:bg-gray-300 sm:block">
              <button>
                <FaEthereum
                  size={30}
                  style={{
                    padding: "3px",
                    cursor: "pointer",
                  }}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

