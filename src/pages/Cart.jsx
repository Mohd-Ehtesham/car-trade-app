import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookmarkButton from "./BookmarkButton";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <NavLink to="/" className="text-blue-600 text-lg my-3 text-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-20 bg-[#C4D9FF] flex items-center justify-center rounded-md p-4">
            Want to select more car!
          </div>
        </NavLink>
        <div className="w-full max-w-6xl mx-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-indigo-300 my-2 p-4 rounded-lg shadow-md"
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={item.image}
                  alt="Car"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-md object-cover"
                />
              </div>
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 text-center mt-4 md:mt-0">
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
                  <span>{item.price}</span>
                </div>
                <div>
                  <p className="font-extrabold">Quantity</p>
                  <span>{item.quantity}</span>
                </div>
                <div>
                  <p className="font-extrabold">Type</p>
                  <span>{item.type}</span>
                </div>
                <div>
                  <p className="font-extrabold">Year</p>
                  <span>{item.year}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <BookmarkButton carId={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
