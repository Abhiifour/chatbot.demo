import { createSlice } from "@reduxjs/toolkit";

const BotSlice = createSlice({
    name: "BotSlice",
    initialState: {
      message: [],
    },
    reducers: {
      sendMessage: (state, action) => {
       
       const currMessage = state.message.pop();
      },
      recieveMessage: (state, action) => {
        const currMessage = action.payload.message;
      
        state.message.push(currMessage);
       
      },
      setTimeMessage: (state,action) => {
        const time = action.payload.time;
        const day = action.payload.day;
        const date = action.payload.date;
      }
     
    },
  });

  
export default BotSlice.reducer;

export const { addToCart, removeFromCart , removeCartItem } = BotSlice.actions;
