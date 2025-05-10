import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="px-4 pb-24 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mt-20 flex flex-col items-center text-center gap-6 px-4 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Largest <span className="block">Crypto Marketplace</span>
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-lg text-sm sm:text-lg">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore trending cryptos.
        </p>

        {/* Responsive Search Bar */}
        <form
          onSubmit={searchHandler}
          className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-md transition focus-within:ring-2 focus-within:ring-purple-600"
        >
          <input
            onChange={inputHandler}
            required
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search crypto..."
            className="flex-grow px-4 py-2 sm:px-5 sm:py-3 text-black text-sm sm:text-base focus:outline-none"
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold transition text-sm sm:text-base rounded-r-full"
            style={{
              fontSize: "0.9rem",
              padding: "10px 12px",
            }}
          >
            Search
          </button>
        </form>
      </section>

      {/* Responsive Table */}
      <section className="max-w-6xl mx-auto mt-14 overflow-x-auto bg-gradient-to-r from-purple-900/20 to-indigo-800/20 rounded-3xl shadow-xl">
        <table className="w-full min-w-[500px] sm:min-w-[650px] md:min-w-[800px] text-sm sm:text-base text-left text-white border-separate border-spacing-y-1">
          <thead className="uppercase bg-white/5 backdrop-blur-sm text-gray-300 text-xs sm:text-sm">
            <tr>
              <th className="px-4 sm:px-6 py-3">#</th>
              <th className="px-4 sm:px-6 py-3">Coin</th>
              <th className="px-4 sm:px-6 py-3">Price</th>
              <th className="px-4 sm:px-6 py-3">24H</th>
              <th className="px-4 sm:px-6 py-3 text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {displayCoin.slice(0, 10).map((item) => (
              <tr
                key={item.id}
                onClick={() => navigate(`/coin/${item.id}`)}
                className="bg-white/10 hover:bg-white/20 transition duration-300 cursor-pointer"
              >
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  #{item.market_cap_rank}
                </td>
                <td className="px-4 sm:px-6 py-4 flex items-center gap-3 whitespace-nowrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-gray-400 text-xs uppercase">
                      {item.symbol}
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {currency.symbol} {item.current_price.toLocaleString()}
                </td>
                <td
                  className={`px-4 sm:px-6 py-4 font-semibold whitespace-nowrap ${
                    item.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                  {currency.symbol} {item.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
