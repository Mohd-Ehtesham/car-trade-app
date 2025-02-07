import PropTypes from "prop-types";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

export default function BookmarkButton({ carId }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBookmark() {
    if (!user) {
      navigate("/login"); // Redirect if not logged in
      return;
    } else {
      navigate("/");
    }
    console.log(`Car ${carId} bookmarked!`);
  }

  return (
    <button
      onClick={handleBookmark}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Bookmark
    </button>
  );
}

// ✅ Add prop validation
BookmarkButton.propTypes = {
  carId: PropTypes.string.isRequired, // or PropTypes.number if it's a number
};
