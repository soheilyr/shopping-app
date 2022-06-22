import { createSlice } from "@reduxjs/toolkit";
const orderInitialState = {
  counterOrder: 0,
  counterList: [],
};
const oredersSlice = createSlice({
  name: "orderList",
  initialState: orderInitialState,
  reducers: {
    addOrder: (state, action) => {
      state.counterOrder++;
      let tekrri = false;
      state.counterList.forEach((item) => {
        if (item.id === action.payload.id) {
          item.amount++;
          tekrri = true;
        }
      });
      if (!tekrri) {
        state.counterList.push({
          name: action.payload.name,
          id: action.payload.id,
          amount: 1,
        });
      }
    },
    plusOrder: (state, action) => {
      state.counterOrder++;
      state.counterList.forEach((item) => {
        console.log(item.id, action.payload);
        if (item.id === action.payload) {
          item.amount++;
        }
      });
    },
    minusOrder: (state, action) => {
      state.counterList.forEach((item) => {
        if (item.id === action.payload) {
          state.counterOrder--;
          if (item.amount === 1) {
            state.counterList = state.counterList.filter(
              (list) => list.id !== item.id
            );
          } else {
            item.amount--;
          }

          return;
        }
      });
    },
  },
});
export default oredersSlice.reducer;
export const { addOrder, minusOrder, plusOrder } = oredersSlice.actions;
