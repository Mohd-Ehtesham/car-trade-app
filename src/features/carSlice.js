import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: {
        limit: "10",
        page: "0",
      },
      headers: {
        "x-rapidapi-key": "c73f942941msh6bd48a3df1013f6p1cd656jsn0e42ba280833",
        "x-rapidapi-host": "car-data.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return await response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const carSlice = createSlice({
  name: "cars",
  initialState: {
    allCars: [],
    searchedCars: [],
    status: "idle",
    error: null,
  },
  reducers: {
    searchedCars: (state, action) => {
      const query = action.payload.toLowerCase();
      if (!query) {
        state.searchedCars = state.allCars;
      } else {
        state.searchedCars = state.allCars.filter((car) =>
          car.type.toLowerCase().includes(query)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "success";
        state.allCars = action.payload;
        state.searchedCars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { searchedCars } = carSlice.actions;
export default carSlice.reducer;
