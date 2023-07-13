import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems: localStorage.getItem('totalItems') ? JSON.parse(localStorage.getItem('totalItems')) : null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setTotalItems(state, value) {
            state.token = value.payload
        },

        //AddtoCart
        //removefromCart
        //clearCart

    }
})


export const { setTotalItems } = cartSlice.actions
export default cartSlice.reducer;
