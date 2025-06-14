import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './CountrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer
  }
});

export default store;