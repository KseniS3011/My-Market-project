import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",

    initialState: { products: 0, likes: 0},

    reducers: {

        addProducts: (prevState, action) => {
            return {
                products: 1 - prevState.products,
                likes: prevState.likes,
            };
        },

        addLikes: (prevState, action) => {
            return {
                products: prevState.products,
                likes: 1 - prevState.likes
            };
        },
    },
});

export const { addProducts, addLikes } = cartSlice.actions;

export default cartSlice.reducer;