import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await axios.get(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  return response.data;
});

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    all: [],
    filtered: [],
    visibleCount: 20,
    loading: false,
  },
  reducers: {
    loadMore: (state) => {
      state.visibleCount += 20;
    },
    filterByRegion: (state, action) => {
      if (action.payload === "All") {
        state.filtered = state.all;
      } else {
        state.filtered = state.all.filter((c) => c.region === action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.all = action.payload;
        state.filtered = action.payload;
        state.loading = false;
      });
  },
});

export const { loadMore, filterByRegion } = countrySlice.actions;
export default countrySlice.reducer;
