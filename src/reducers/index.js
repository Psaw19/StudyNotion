import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../store/slices/authSlice'
import profileReducer from "../store/slices/profileSlice";
import cartReducer from "../store/slices/cartSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
})


export default rootReducer;