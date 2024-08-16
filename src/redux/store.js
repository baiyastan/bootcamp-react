import { configureStore } from "@reduxjs/toolkit";

import wishReducer from "./wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishReducer,
  },
});

export default store;
