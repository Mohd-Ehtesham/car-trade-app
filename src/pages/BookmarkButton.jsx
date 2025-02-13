import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

export default function BookmarkButton() {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleBookmark() {
    if (!user) {
      navigate("/login");
      return;
    }

    alert("Car is bookmarked successfully");

    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000); // ✅ Delay navigation to show toast
  }

  return (
    <button
      onClick={handleBookmark}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:cursor-pointer"
    >
      Bookmark
    </button>
  );
}
