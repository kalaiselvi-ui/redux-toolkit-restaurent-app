import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems:[],
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem = action.payload;
            console.log('newItem', newItem);
            const itemIndex = state.cartItems.find((item)=> item.id === newItem.id);
            console.log('itemindex', itemIndex)
            if(itemIndex){
                itemIndex.quantity += 1;
                itemIndex.totalPrice += newItem.price;
            }
            else{
               state.cartItems.push({
                ...newItem,
                quantity:1,
                totalPrice: newItem.price,
               });

            }
            state.totalQuantity++;  
            state.totalPrice += newItem.price
        },
        removeFromCart(state, action){
            const newItem = action.payload;
            const findItem = state.cartItems.find((item)=> item.id === newItem.id);
            console.log("Payload received for removal:", newItem);
            
            if(findItem){
                state.totalPrice -= findItem.totalPrice;
                state.totalQuantity -= findItem.quantity;
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id);
                console.log("Updated cart items:", state.cartItems);

            }
        },
        increaseQuantity(state, action){
             const newItem = action.payload;
             const findItem = state.cartItems.find((item)=> item.id === newItem.id)
             if(findItem){
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalQuantity++;
                state.totalPrice += findItem.price;
             }
        },
        decreaseQuantity(state, action){
            const newItem = action.payload;
            const findItem = state.cartItems.find((item)=> item.id === newItem.id);

            if(findItem.quantity > 1){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price;
                state.totalQuantity--;
                state.totalPrice -= findItem.price
            }
            else{
                toast.error("Minimum quantity is 1")
            }
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer