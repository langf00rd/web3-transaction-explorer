import { TransactionExplorerTable } from "@/components/transaction-explorer-table";
import { ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT } from "@/lib/constants";

export default async function Home() {
  const response = await fetch(ETHERSCAN_USDT_TRANSACTIONS_ENDPOINT).then(
    (res) => res.json(),
  );

  if (response.status != "1") throw Error(response.result);

  return (
    <main className="max-w-5xl mx-auto mt-5">
      <b>Latest Transactions</b>
      <TransactionExplorerTable data={response.result ?? []} />
    </main>
  );
}
