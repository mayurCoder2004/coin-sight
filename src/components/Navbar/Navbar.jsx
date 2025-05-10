import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Menu, X } from "lucide-react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setCurrency, currency } = useContext(CoinContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  return (
    <div className="w-full text-[#ddd] border-b-2 border-[#3c3c3c] px-[5%] py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          className="w-[120px] md:w-[12vw] max-w-[160px]"
        />
      </Link>

      {/* Desktop Menu */}
      <Link to={'/'}>
        <ul className="hidden md:flex gap-10 font-medium text-sm lg:text-base">
          {["Home", "Features", "Pricing", "Blog"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition duration-300 ease-in-out"
            >
              {item}
            </li>
          ))}
        </ul>
      </Link>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <select
          className="px-3 py-1.5 rounded-md border-2 border-white bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          onChange={currencyHandler}
          value={currency.name}
        >
          <option value="usd" className="text-black">
            USD
          </option>
          <option value="eur" className="text-black">
            EUR
          </option>
          <option value="inr" className="text-black">
            INR
          </option>
        </select>

        <button className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-white text-[#393939] hover:bg-gray-200 transition duration-300 ease-in-out shadow-md">
          Sign up
          <img src={arrow_icon} alt="arrow" className="w-3.5" />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {menuOpen ? (
          <X
            onClick={toggleMenu}
            className="text-white w-6 h-6 cursor-pointer transition duration-200"
          />
        ) : (
          <Menu
            onClick={toggleMenu}
            className="text-white w-6 h-6 cursor-pointer transition duration-200"
          />
        )}
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden bg-[#121212] border-t border-[#3c3c3c] shadow-lg ${
          menuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        } flex flex-col gap-4 px-[5%] text-sm font-medium md:hidden z-40`}
      >
        {["Home", "Features", "Pricing", "Blog"].map((item) => (
          <li
            key={item}
            className="list-none cursor-pointer hover:text-white transition duration-300"
          >
            {item}
          </li>
        ))}

        <select
          className="mt-3 px-3 py-1.5 rounded-md border-2 border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white transition duration-300"
          onChange={currencyHandler}
          value={currency.name}
        >
          <option value="usd" className="text-black">
            USD
          </option>
          <option value="eur" className="text-black">
            EUR
          </option>
          <option value="inr" className="text-black">
            INR
          </option>
        </select>

        <button className="mt-4 flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white text-[#393939] hover:bg-gray-200 transition duration-300 shadow-md">
          Sign up
          <img src={arrow_icon} alt="arrow" className="w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
