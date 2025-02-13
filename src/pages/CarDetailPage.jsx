import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export default function CarDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const response = await axios.get(
          `https://cartrade-backend.onrender.com/cars/car/${id}`
        );
        setCar(response.data.carToGet);
      } catch (error) {
        console.log("Error fetching car details:", error.message);
      }
    }
    if (id) fetchCarDetails();
  }, [id]);

  if (!car)
    return (
      <div className="flex justify-center items-center h-screen">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      </div>
    );

  function handleCart(e) {
    e.stopPropagation();
    dispatch(
      addToCart({
        _id: car._id, // Ensure consistency with Redux state
        make: car.make,
        model: car.model,
        type: car.type,
        year: car.year,
        image: car.images[0],
        price: car.price, // Add price for correct calculations
      })
    );
    navigate("/cart");
  }

  return (
    <div className="bg-[#F1F0E8] p-5 md:p-10">
      {/* Car Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {car.images.map((image, index) => (
          <img
            className="h-auto w-full max-h-[400px] md:max-h-[600px] rounded-lg object-cover"
            key={index}
            src={`https://cartrade-backend.onrender.com${image}`}
            alt="Car"
          />
        ))}
      </div>

      {/* Description */}
      <div className="mt-5 text-center md:text-left">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="mt-2 text-gray-700">{car.description}</p>
      </div>

      {/* Features & Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <h3 className="text-xl font-bold">Features</h3>
          <ul className="list-disc list-inside mt-2">
            {car.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-bold">Color:</span> {car.color}
          </p>
          <p>
            <span className="font-bold">Condition:</span> {car.condition}
          </p>
          <p>
            <span className="font-bold">Fuel Type:</span> {car.fuelType}
          </p>
          <p>
            <span className="font-bold">Mileage:</span> {car.mileage}
          </p>
          <p>
            <span className="font-bold">Price:</span> ${car.price}
          </p>
          <p>
            <span className="font-bold">Transmission:</span> {car.transmission}
          </p>
          <p>
            <span className="font-bold">VIN:</span> {car.vin}
          </p>
        </div>
      </div>

      {/* Location & Owner Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <h3 className="text-xl font-bold">Location</h3>
          <p>City: {car.location.city}</p>
          <p>State: {car.location.state}</p>
          <p>Zip Code: {car.location.zipCode}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Owner Details</h3>
          <p>Contact: {car.owner.contact}</p>
          <p>Name: {car.owner.name}</p>
          <p>Phone: {car.owner.phone}</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex justify-center mt-5">
        <button
          className="bg-green-600 text-white py-2 px-6 rounded-md text-sm sm:text-base hover:bg-green-900 transition-all"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
