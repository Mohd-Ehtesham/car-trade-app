import Logo from "./Logo";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedCars } from "../features/carSlice";

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    // If query is empty, reset the search to show all cars
    dispatch(searchedCars(query));
  }, [query, dispatch]);
  console.log(query);
  return (
    <div className="flex items-center gap-2 bg-[#f5f5f5] h-12">
      <FormLabel htmlFor="search">
        <Logo
          src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/search.svg"
          alt="search..."
          className="h-5 w-5 mx-3"
        />
      </FormLabel>

      <FormInput
        type="text"
        id="search"
        name="search"
        placeholder="Enter make of car"
        className="border-b w-72"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}
