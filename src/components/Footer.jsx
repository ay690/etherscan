import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

function Footer() {
  return (
    <div className="w-full px-20 my-[200px] bg-[#eaedf1]">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px] py-[50px]  px-5 md:px-0">
        <div className="col-span-2">
          <div className="flex items-center gap-2 justify center">
            <img
              src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
              className="h-10 cursor-pointer"
            />
            <h1 className="text-lg font-bold text">Powered by Ethereum</h1>
          </div>
          <h3 className="py-2 text-[#6D737A]">
          Etherscan is a Block Explorer and Analytics Platform for Ethereum,<br/> a decentralized smart contracts platform.
          </h3>

          <img src="https://etherscan.io/images/map.png"  className="w-1/2 h-40" />

          <div className="flex gap-4 py-3">
            <div className="p-4 bg-[black] rounded-xl">
              <FaFacebookF size={12} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[black] rounded-xl">
              <FaDribbble size={12} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[black] rounded-xl">
              <FaLinkedinIn size={12} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[black] rounded-xl">
              <FaInstagram size={12} style={{ color: "white" }} />
            </div>
            <div className="p-4 bg-[black] rounded-xl">
              <FaBehance size={12} style={{ color: "white" }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Company</h3>
          <ul className="py-4 text-[#6D737A]">
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">About Us</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Brand Assets</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Careers</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Terms & Privacy</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Bug Bounty</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Community</h3>
          <ul className="py-4 text-[#6D737A]">
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">API Documentation</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Knowledge Base</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Network Status</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Newsletters</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Diqus Comment</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold">Products & Services</h3>
          <ul className="py-4 text-[#6D737A]">
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Advertise</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Explore-as-a-Service(EaaS)</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">API Plans</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Priority Support</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Blockscan</li>
            <li className="py-2 hover:text-[#0784C3] cursor-pointer">Blockscan Chat</li>
          
          </ul>
        </div>
      </div>

      <div className="border border-b"></div>

      <div className="md:max-w-[1480px] max-w-[600px] mt-[-20px]">
        <div className="grid grid-cols-1 py-20 md:grid-cols-2 ">
          <h3 className="py-2  md:ml-[-400px] text-center">
            Etherscan &copy; 2023 (F1)
          </h3>
          <p className="py-3 md:ml-[300px] text-center">
            Donations: <span className="text text-[#0784C3] cursor-pointer">0x71c765......d8976f</span> ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
