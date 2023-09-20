import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import useStocksQuery from "../../hooks/useStocks";
import { StocksQuery } from "../../queries/stocks";

interface Props {}

const columnHelper = createColumnHelper<StocksQuery["data"]>();

const columns = [
  columnHelper.accessor("ticker", {
    cell: (info) => info.getValue(),
    header: "Ticker",
  }),
  columnHelper.accessor("latest_price", {
    cell: (info) => `$${parseFloat(info.getValue() as string).toFixed(2)}`,
    header: "Latest price $",
    meta: {
      isNumeric: true,
    },
  }),
];

export const StocksDataTable: React.FC<Props> = ({}) => {
  const { data: stocksData } = useStocksQuery();

  return <DataTable columns={columns as any} data={stocksData ?? []} />;
};
