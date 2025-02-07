import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Logo
            className="h-7"
            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/cartrade_logo_238-48.png"
            alt="CarTrade Logo"
          />
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center gap-6">
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

          <Search />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Only visible when open) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg absolute top-14 left-0 w-full p-5`}
      >
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

        <div className="mt-3">
          <Search />
        </div>
      </div>
    </nav>
  );
}
