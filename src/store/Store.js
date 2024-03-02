import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import cartUiSliceDashbord from "./shopping-cart/cartUiSliceDashbord";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    cartUiDash: cartUiSliceDashbord.reducer,
  },
});

export default store;
