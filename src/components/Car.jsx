import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function Car({ car }) {
  console.log(car);
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/car/${car._id}`); // Navigate to CarDetailPage.jsx
  }

  return (
    <div
      className="w-full bg-[#f4f4f4] rounded-lg shadow-md p-4 min-h-[350px] flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all"
      onClick={handleCardClick} // Navigate when clicking the card
    >
      <img
        key={car._id} // Forces React to re-render
        src={`https://cartrade-backend.onrender.com${car.images[0]}`}
        alt="Car"
        className="w-full h-48 sm:h-40 object-cover rounded-t-lg"
      />

      <div className="text-center mt-4 text-sm sm:text-base">
        <p className="font-bold">
          Make: <span className="font-normal">{car.make}</span>
        </p>
        <p className="font-bold">
          Model: <span className="font-normal">{car.model}</span>
        </p>

        <p className="font-bold">
          Year: <span className="font-normal">{car.year}</span>
        </p>
      </div>
    </div>
  );
}

Car.propTypes = {
  car: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string,
    year: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
