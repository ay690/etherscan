import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import alchemy from "../api/alchemy";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Transaction() {
    const [txDetails, setTxDetails] = useState(
        <div className="text-center">Loading...</div>
    );
    const { hash } = useParams();

    useEffect(() => {
        async function getTransaction() {
            const info = await alchemy.core.getTransactionReceipt(hash);

            setTxDetails(
                <div className="px-8 py-4 mx-24 my-8 bg-white border divide-y rounded-lg ">
                    <h1 className="pb-3 text-[#3498DA] font-bold">Overview</h1>
                    <div className="flex">
                        <div className="w-1/2 divide-y">
                            <TitleComponent title="Transaction Hash" />
                            <TitleComponent title="Block Number" />
                            <TitleComponent title="Block Hash" />
                            <TitleComponent title="From" />
                            <TitleComponent title="To" />
                            <TitleComponent title="Gas Limit & Usage by Txn" />
                            <TitleComponent title="Gas Price" />
                        </div>
                        <div className="w-full divide-y">
                            <p className="py-6">{info.transactionHash}</p>
                            <p className="py-6 text-[#357BAD]">
                                <Link to={`/block/${info.blockNumber}`}>
                                    {info.blockNumber}
                                </Link>
                                <span className="p-2 ml-3 text-xs text-gray-500 bg-gray-100 rounded-md">
                                    {info.confirmations} Block Confirmations
                                </span>
                            </p>
                            <p className="py-6 text-[#357BAD]">
                                <Link to={`/block/${info.blockHash}`}>
                                    {info.blockHash}
                                </Link>
                            </p>
                            <p className="py-6 text-[#357BAD]">
                                <Link to={`/address/${info.from}`}>
                                    {info.from}
                                </Link>
                            </p>
                            <p className="py-6 text-[#357BAD]">
                                <Link to={`/address/${info.to}`}>
                                    {info.to}
                                </Link>
                            </p>
                            <p className="py-6">
                                {info.gasUsed.toString()}
                            </p>
                            <p className="py-6">
                                {info.effectiveGasPrice.toString() / 1000000000}{" "}
                                Gwei
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        getTransaction();
    }, []);

    return txDetails;
}

function TitleComponent({ title }) {
    return (
        <div className="flex items-center">
            <AiOutlineQuestionCircle />
            <p className="py-6 ml-2">{title}</p>
        </div>
    );
}

export default Transaction;