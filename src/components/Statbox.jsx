import React from "react";
import { ChartSvg, Chart } from "../assests";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEthereum } from "react-icons/fa";

const Statbox = () => {
  return (
    <div className="w-full py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <section className="w-full mt-[-10.5rem] pb-[5rem]">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4 md:m-4 border border-[#222222] rounded-lg shadow-lg">
            <section className="flex flex-col justify-between w-full text-gray-500 letter-spacing-[0.01rem] p-[0.5rem 1rem] border-r border-[#222222]">
              <section className="flex items-center w-[15rem] h-[5rem] pl-8">
                <section className="text-center w-[2.2rem]">
                  <FaEthereum size={20} />
                </section>
                <section className="flex flex-col">
                  <p>ETHER PRICE</p>
                  <p className="text-gray-500">$2155.49</p>
                </section>
              </section>
              <span className="border-b border-[#222222] w-full"></span>
              <section className="flex items-center w-[15rem] h-[5rem] pl-8">
                <section className="text-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-gray-500 text-[1.3rem] mr-2.5"
                  />
                </section>

                <section className="flex flex-col">
                  <p>MARKET CAP</p>
                  <p className="text-gray-500">$265,999,891,221.00</p>
                </section>
              </section>
              <span className="border-b border-[#222222] w-full"></span>
            </section>

            <section className="flex flex-col justify-between w-full text-gray-500 letter-spacing-[0.01rem] p-[0.5rem 1rem] border-r border-[#222222]">
              <section className="flex items-center w-[15rem] h-[5rem] pl-8">
                <section className="text-center">
                  <FontAwesomeIcon
                    icon={faServer}
                    className="text-gray-500 text-[1.3rem] mr-2.5"
                  />
                </section>
                <section className="flex flex-col">
                  <p>TRANSACTIONS</p>
                  <p className="text-gray-500">2178.75 M</p>
                </section>
              </section>
              <span className="border-b border-[#222222] w-full"></span>
              <section className="flex items-center w-[15rem] h-[5rem] pl-8">
                <section className="text-center">
                  <FontAwesomeIcon
                    icon={faGauge}
                    className="text-gray-500 text-[1.3rem] mr-2.5"
                  />
                </section>
                <section className="flex flex-col">
                  <p>LAST FINALIZED BLOCK</p>
                  <p className="text-gray-500">18713973</p>
                </section>
              </section>
              <span className="border-b border-[#222222] w-full"></span>
            </section>

            <section className="flex flex-col w-full">
              <section className="flex flex-col items-center justify-between p-2">
                <p className="font-bold text-gray-500">
                  Average Transaction Value
                </p>
                <img src={Chart} alt="Chart" className="w-full pt-1" />
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Statbox;
