import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:'whishlist',
    initialState:[],
    reducers:{
        // to add items to the state
        addWishlistItem : (state , action)=>{
            state.push(action.payload)
        }
    }
})

export const {addWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer