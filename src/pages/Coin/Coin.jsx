import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (currency?.name) {
      fetchCoinData();
      fetchHistoricalData();
    }
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in text-gray-800 dark:text-white">
        {/* Coin Heading */}
        <div className="flex flex-col items-center gap-6 mt-16 md:mt-24 mb-12 text-center">
          <img 
            src={coinData.image?.large} 
            alt={`${coinData.name} logo`} 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg" 
          />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {coinData.name}{" "}
            <span className="text-gray-400 dark:text-gray-300 text-xl md:text-2xl font-medium">
              ({coinData.symbol?.toUpperCase()})
            </span>
          </h1>
          
          {/* Price Change Badge */}
          {coinData.market_data?.price_change_percentage_24h && (
            <div className={`text-sm font-medium px-3 py-1 rounded-full ${
              coinData.market_data.price_change_percentage_24h >= 0
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}>
              {coinData.market_data.price_change_percentage_24h >= 0 ? "+" : ""}
              {coinData.market_data.price_change_percentage_24h.toFixed(2)}% (24h)
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="max-w-3xl w-full h-64 md:h-80 mx-auto shadow-lg p-4 md:p-6 rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl">
          <LineChart historicalData={historicalData} />
        </div>

        {/* Coin Info */}
        {coinData.market_data && (
          <div className="mt-12 mb-16">
            <dl className="max-w-3xl w-full mx-auto space-y-1 bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-md divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">Crypto Market Rank</dt>
                <dd className="font-semibold">{coinData.market_cap_rank ?? "N/A"}</dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">Current Price</dt>
                <dd className="font-semibold">
                  {currency.symbol}{" "}
                  {coinData.market_data.current_price?.[currency.name]?.toLocaleString() ?? "N/A"}
                </dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">Market Cap</dt>
                <dd className="font-semibold">
                  {currency.symbol}{" "}
                  {coinData.market_data.market_cap?.[currency.name]?.toLocaleString() ?? "N/A"}
                </dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">24 Hour High</dt>
                <dd className="font-semibold">
                  {currency.symbol}{" "}
                  {coinData.market_data.high_24h?.[currency.name]?.toLocaleString() ?? "N/A"}
                </dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">24 Hour Low</dt>
                <dd className="font-semibold">
                  {currency.symbol}{" "}
                  {coinData.market_data.low_24h?.[currency.name]?.toLocaleString() ?? "N/A"}
                </dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">24h Trading Volume</dt>
                <dd className="font-semibold">
                  {currency.symbol}{" "}
                  {coinData.market_data.total_volume?.[currency.name]?.toLocaleString() ?? "N/A"}
                </dd>
              </div>
              <div className="flex justify-between py-4">
                <dt className="font-medium text-gray-600 dark:text-gray-300">Circulating Supply</dt>
                <dd className="font-semibold">
                  {coinData.market_data.circulating_supply?.toLocaleString() ?? "N/A"}{" "}
                  {coinData.symbol?.toUpperCase()}
                </dd>
              </div>
            </dl>
          </div>
        )}
        
        {/* Description Section - Optional */}
        {coinData.description?.en && (
          <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">About {coinData.name}</h2>
            <div 
              className="prose dark:prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: coinData.description.en.split(". ").slice(0, 3).join(". ") + "." }}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Loading coin data...</p>
        </div>
      </div>
    );
  }
};

export default Coin;