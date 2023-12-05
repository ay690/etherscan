import React, { useState } from "react";
import { Logo, hamburgerMenu, close } from "../assests";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[70px] bg-white border-b px-10">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center gap-4">
        <Link to={"/"}>
          
        <div className="flex items-center justify-center gap-2">
          <img src={Logo} alt="Logo" className="h-[25px]" />
          <p className="text text-[#343e5c] font-bold text-[20px]">Etherscan</p>
        </div>
        </Link>
        <div className="items-center hidden gap-3 md:flex">
          <ul className="flex gap-4">
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3] cursor-pointer">
              Home{" "}
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3] cursor-pointer">
              Blockchain <FaAngleDown size={10} />
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3] cursor-pointer">
              Tokens <FaAngleDown size={10} />
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3] cursor-pointer">
              NFTs <FaAngleDown size={10} />
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3] cursor-pointer">
              Resources <FaAngleDown size={10} />
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3]  cursor-pointer">
              Developers <FaAngleDown size={10} />
            </li>
            <li className="flex items-center justify-center gap-1 hover:text-[#0784C3]  cursor-pointer">
              More <FaAngleDown size={10} />
            </li>
          </ul>
          <div className="hidden md:flex">
            <button className="hover:text-[#0784C3]  bg-[#fffff] px-8 py-3 rounded-md text-black text-sm font-semibold cursor-pointer">
              Sign Up
            </button>

            <button className="hover:bg-[#4daddd] bg-[#0784C3] px-8 py-3 rounded-md text-black text-sm font-semibold cursor-pointer">
              CONNECT
            </button>
          </div>
        </div>

        <div className="md:hidden" onClick={handleToggle}>
          <img
            alt="Menu"
            src={toggle ? close : hamburgerMenu}
            className="md:hidden"
          />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            Home
          </li>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            Blockchain
            <FaAngleDown size={10} />
          </li>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            NFTs
            <FaAngleDown size={10} />
          </li>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            Resources
            <FaAngleDown size={10} />
          </li>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            Developers
            <FaAngleDown size={10} />
          </li>
          <li className="flex items-center justify-center gap-1 p-4 cursor-pointer hover:bg-gray-100">
            More
            <FaAngleDown size={10} />
          </li>
          <div className="flex flex-col gap-4 my-4">
            <button className="bg-[#fffff] px-8 py-5 rounded-md text-black font-semibold cursor-pointer">
              Sign Up
            </button>

            <button className="bg-[#0784C3] px-8 py-5 rounded-md text-black font-semibold cursor-pointer">
              CONNECT
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header2;
