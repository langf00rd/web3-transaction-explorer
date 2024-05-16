import { TransactionExplorerTable } from "@/components/transaction-explorer-table";
import { ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT } from "@/lib/constants";

export default async function Home() {
  /** query the latest transactions from the etherscan USDT contract via the API */
  const response = await fetch(ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT);
  const responseData = await response.json();

  /** if fetch request throws an invalid status, throw an error
   * the error.tsx file will catch and display the error in the browser
   * any other type of error from the fetch request will be also be caught by the error.tsx file
   */
  if (responseData.status != "1") throw Error(responseData.result);

  return (
    <>
      <div className="hero h-[40vh] md:h-[35vh] flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="text-3xl font-medium">USDT Transaction Explorer</h1>
        <div className="text-sm px-10 flex-wrap flex gap-5 opacity-80">
          <p>
            <span className="font-medium">PRICE</span> $1.00
            <span className="text-green-400">(+0.09%)</span>
          </p>
          <p>
            <span className="font-medium">ONCHAIN MARKET CAP</span>
            $50,998,658,367.64
          </p>
          <p>
            <span className="font-medium">CIRCULATING SUPPLY MARKET CAP</span>
            $110,987,088,240.00
          </p>
        </div>
      </div>
      <main className="max-w-5xl w-[90%] mx-auto mb-10 bg-white -mt-20 rounded-2xl shadow-xl p-10 pb-0">
        <b>Latest Transactions</b>
        <TransactionExplorerTable data={responseData.result} />
      </main>
    </>
  );
}
