import { useSelector } from "react-redux";
import { useState, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompareModal from "./CompareModal";
import BookmarkButton from "./BookmarkButton";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const [selectedCars, setSelectedCars] = useState([]);
  const modalRef = useRef(null);

  const handleSelectCar = useCallback((car) => {
    setSelectedCars((prevSelected) => {
      if (prevSelected.some((selected) => selected._id === car._id)) {
        return prevSelected.filter((selected) => selected._id !== car._id);
      }
      if (prevSelected.length >= 2) return prevSelected;
      return [...prevSelected, car];
    });
  }, []);

  const handleCompare = () => {
    if (selectedCars.length === 2 && modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <NavLink
          to="/"
          className="text-blue-600 text-lg my-3 text-center w-full max-w-lg"
        >
          <div className="bg-[#C4D9FF] flex items-center justify-center rounded-md p-4 text-center mt-30">
            Want to select more cars!
          </div>
        </NavLink>

        <div className="w-full max-w-6xl mx-auto">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className={`flex flex-col sm:flex-row justify-between items-center bg-[#FBF8EF] my-2 p-4 rounded-lg shadow-md w-full ${
                selectedCars.some((selected) => selected._id === item._id)
                  ? "border-4 border-blue-500"
                  : ""
              }`}
            >
              <div className="w-full sm:w-1/3 flex justify-center">
                <img
                  src={`https://cartrade-backend.onrender.com${item.image}`}
                  alt={`${item.make} ${item.model}`}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-md object-cover"
                  onError={(e) => (e.target.src = "/default-car.png")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6 text-center mt-4 sm:mt-0">
                <div>
                  <p className="font-extrabold">Make</p>
                  <span>{item.make}</span>
                </div>
                <div>
                  <p className="font-extrabold">Model</p>
                  <span>{item.model}</span>
                </div>
                <div>
                  <p className="font-extrabold">Price</p>
                  <span>${item.price}</span>
                </div>
                <div>
                  <p className="font-extrabold">Year</p>
                  <span>{item.year}</span>
                </div>
                <BookmarkButton />
              </div>
              <button
                onClick={() => handleSelectCar(item)}
                className={`mt-4 sm:mt-0 px-3 py-2 rounded-md text-white transition w-full sm:w-auto hover:cursor-pointer ${
                  selectedCars.some((selected) => selected._id === item._id)
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {selectedCars.some((selected) => selected._id === item._id)
                  ? "Deselect"
                  : "Select"}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleCompare}
          disabled={selectedCars.length < 2}
          className={`px-4 py-2 rounded-md my-4 w-full max-w-xs text-center hover:cursor-pointer ${
            selectedCars.length === 2
              ? "bg-blue-600 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        >
          Compare Selected Cars
        </button>

        <CompareModal ref={modalRef} cars={selectedCars} />
      </div>
      <Footer />
    </>
  );
}
