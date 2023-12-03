import React from "react";
import { PiGasPumpLight } from "react-icons/pi";
import { BsBrightnessLow } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-white border-b px-10 shadow-lg hidden sm:flex">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <p className="text text-gray-400 hidden sm:block">
            ETH Price:{" "}
            <a href="#" className="text text-[#0784C3]">
              $2,155.49{" "}
              <a href="#" className="text text-[#008186]">
                (+2.69%)
              </a>
            </a>
          </p>
          <div className="flex gap-2 items-center justify-center hidden sm:flex">
            <PiGasPumpLight />
            <p>
              Gas:{" "}
              <a href="#" className="text text-[#0784C3]">
                30 Gwei
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-3">
            <li className="rounded-lg hover:bg-gray-300 hidden sm:block">
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
            <li className="rounded-lg hover:bg-gray-300 hidden sm:block">
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
