import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../features/carSlice";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Car from "./Car";

export default function CarComponentPage() {
  const dispatch = useDispatch();
  const { searchedCars, status, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(searchedCars);
  if (status === "loading") {
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
  }

  if (status === "failed") {
    toast.error(error);
  }

  return (
    <div className="px-4 py-8">
      <ToastContainer />

      {status === "success" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedCars.map((car) => (
            <Car key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
