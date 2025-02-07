import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

// Define available images for each car type
const carImages = {
  SUV: 7,
  Pickup: 5,
  Convertible: 7,
  Sedan: 4,
};

export default function Car({ car }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const type = car.type || "SUV"; // Default to SUV if type is missing

  // Ensure type exists in carImages, default to 'SUV' if not found
  const availableImages = carImages[type] || carImages["SUV"];

  // Generate a random image number based on available images
  const randomImageNumber = Math.floor(Math.random() * availableImages) + 1;
  const carImage = availableImages
    ? `/images/cars/${type}/${randomImageNumber}.jpg`
    : `/images/cars/default.jpg`;

  function handleCart() {
    dispatch(
      addToCart({
        id: car.id,
        make: car.make,
        model: car.model,
        type: car.type,
        year: car.year,
        image: carImage,
      })
    );
    navigate("/cart");
  }

  return (
    <div className="w-full bg-[#f4f4f4] rounded-lg shadow-md p-4 min-h-[350px] flex flex-col justify-between">
      <div>
        <img
          src={carImage}
          alt="Car"
          className="w-full h-48 sm:h-40 object-cover rounded-t-lg"
          onError={(e) => (e.target.src = "/images/cars/default.jpg")}
        />
      </div>

      <div className="text-center mt-4 text-sm sm:text-base">
        <p className="font-bold">
          Make: <span className="font-normal">{car.make}</span>
        </p>
        <p className="font-bold">
          Model: <span className="font-normal">{car.model}</span>
        </p>
        <p className="font-bold">
          Type: <span className="font-normal">{car.type}</span>
        </p>
        <p className="font-bold">
          Year: <span className="font-normal">{car.year}</span>
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md text-sm sm:text-base hover:bg-green-900 transition-all"
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    carImage: PropTypes.string,
  }).isRequired,
};
