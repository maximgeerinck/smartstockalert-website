import { supabase } from "../lib/supabase";

export const getStocks = () => {
  return supabase
    .from("stocks")
    .select("ticker, latest_price")
    .not("latest_price", "is", null)
    .limit(10);
};

export type StocksQuery = Awaited<ReturnType<typeof getStocks>>;
