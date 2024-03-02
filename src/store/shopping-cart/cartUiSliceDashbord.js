import { createSlice } from "@reduxjs/toolkit";

const cartUiSliceDashbord = createSlice({
  name: "cartUiDashbord",
  initialState: { cartIsVisiable: false },
  reducers: {
    toggle(state) {
      state.cartIsVisiable = !state.cartIsVisiable;
    },
  },
});

export const cartUiDashbordActions = cartUiSliceDashbord.actions;
export default cartUiSliceDashbord;
