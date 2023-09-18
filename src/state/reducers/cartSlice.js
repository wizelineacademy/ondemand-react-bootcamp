import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.product.id !== action.payload.id);
        },
        qty: (state, action) => {
            const index = state.items.findIndex((item) => item.product.id === action.payload.product.id);
            state.items[index].qty = action.payload.qty;
        }
    }
});

export const {add, remove, qty} = cartSlice.actions;

export default cartSlice.reducer;