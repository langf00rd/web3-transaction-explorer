import { TransactionExplorerTable } from "@/components/transaction-explorer-table";
import { ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT } from "@/lib/constants";

export default async function Home() {
  const response = await fetch(ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT).then(
    (res) => res.json(),
  );

  if (response.status != "1") throw Error(response.result);

  return (
    <>
      <div className="hero h-[35vh] flex items-center justify-center text-white">
        <h1 className="text-3xl font-medium">USDT Transaction Explorer</h1>
      </div>
      <main className="max-w-5xl w-[90%] mx-auto mb-10 bg-white -mt-20 rounded-2xl shadow-xl p-10 pb-0">
        <b>Latest Transactions</b>
        <TransactionExplorerTable data={response.result ?? []} />
      </main>
    </>
  );
}
