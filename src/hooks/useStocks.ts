import { useQuery } from "@tanstack/react-query";
import { getStocks } from "../queries/stocks";

export function getCacheKey() {
  return ["stocks"];
}

function useStocksQuery() {
  const key = getCacheKey();
  return useQuery(
    key,
    async () => {
      const data = await getStocks().then((result) => {
        return result.data;
      });
      return data;
    },
    {
      refetchInterval: 60000,
    }
  );
}

export default useStocksQuery;
