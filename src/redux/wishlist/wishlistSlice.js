import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wish: [] },
  reducers: {
    addWish: (state, action) => {
      const findProduct = state.wish.find((x) => x.id == action.payload.id);

      if (!findProduct) {
        state.wish.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.wish = state.wish.filter((x) => x.id != action.payload);
    },
  },
});

export const { addWish, removeWish } = wishlistSlice.actions;
export default wishlistSlice.reducer;
