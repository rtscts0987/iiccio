"use client";
import { useEffect, useState } from "react";

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-red-600 mt-10">
        The Coins! {loading ? "" : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong className="text-red-600">Loading...</strong>
      ) : (
        <select className="text-red-600">
          {coins.map((coin: any) => (
            <option key={coin.name} className="text-red-600">
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
