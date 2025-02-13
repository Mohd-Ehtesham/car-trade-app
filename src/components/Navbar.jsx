import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import { HiUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/carSlice";
import { Link } from "react-router-dom";
import Search from "./Search";
import Logo from "./Logo";

export default function Navbar() {
  const dispatch = useDispatch();
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo
            className="h-7"
            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/cartrade_logo_238-48.png"
            alt="CarTrade Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-6">
          <Link
            to="/login"
            className="flex items-center hover:bg-[#f07e7c] rounded-full px-4 py-2"
          >
            <HiUser />
            <div className="flex flex-col ml-2 text-sm">
              <span>Sign In</span>
              <span>Account</span>
            </div>
          </Link>

          <a
            href="https://www.cartrade.com/car-loan/"
            className="hover:bg-[#f07e7c] px-4 py-2 hover:text-white font-bold text-sm rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Car Loan
          </a>

          <a
            href="https://www.cartrade.com/sell-used-car/?originid=35"
            className="hover:bg-[#f07e7c] px-4 py-2 hover:text-white font-bold text-sm rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sell Car
          </a>

          <a
            href="https://www.cartrade.com/news/"
            className="hover:bg-[#f07e7c] px-4 py-2 hover:text-white font-bold text-sm rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            News & Reviews
          </a>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative flex items-center hover:bg-[#f07e7c] rounded-full px-4 py-2">
              <AiOutlineShoppingCart className="text-2xl" />
              <span className="text-red-500 bg-[#ffc221] rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs font-bold">
                {totalQuantity}
              </span>
              <span className="text-sm ml-2">${totalPrice}</span>
            </div>
          </Link>

          <Search />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg absolute top-14 left-0 w-full p-5 transition-all duration-300 ease-in-out`}
      >
        <Link
          to="/login"
          className="block py-2 text-center text-gray-700 hover:bg-[#f07e7c] hover:text-white rounded-md"
        >
          Sign In / Account
        </Link>

        <a
          href="https://www.cartrade.com/car-loan/"
          className="block py-2 text-center text-gray-700 hover:bg-[#f07e7c] hover:text-white rounded-md"
        >
          Car Loan
        </a>

        <a
          href="https://www.cartrade.com/sell-used-car/?originid=35"
          className="block py-2 text-center text-gray-700 hover:bg-[#f07e7c] hover:text-white rounded-md"
        >
          Sell Car
        </a>

        <a
          href="https://www.cartrade.com/news/"
          className="block py-2 text-center text-gray-700 hover:bg-[#f07e7c] hover:text-white rounded-md"
        >
          News & Reviews
        </a>

        {/* Mobile Cart - Adjusted Size */}
        <Link
          to="/cart"
          className="flex justify-center items-center mt-4 py-2 px-4 bg-gray-100 rounded-md hover:bg-[#f07e7c] hover:text-white transition"
        >
          <AiOutlineShoppingCart className="text-2xl" />
          <span className="ml-2 text-sm">Cart (${totalPrice})</span>
          <span className="text-red-500 bg-[#ffc221] rounded-full w-5 h-5 flex items-center justify-center ml-2 text-xs font-bold">
            {totalQuantity}
          </span>
        </Link>

        <div className="mt-3">
          <Search />
        </div>
      </div>
    </nav>
  );
}
