import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../OrderSlice/orderSlice";
const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});
export default store;
