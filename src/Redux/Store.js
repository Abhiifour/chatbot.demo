import { configureStore , combineReducers} from "@reduxjs/toolkit";
import BotSlice from './Slices/BotSlice';
import UserSlice from './Slices/UserSlice';

const rootReducer = combineReducers({ 
    BotSlice,
    UserSlice
  })


export const store = configureStore({
    reducer:rootReducer,
})
