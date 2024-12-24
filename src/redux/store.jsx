import { configureStore } from '@reduxjs/toolkit'
import foodItemReducer from './FoodItemSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        fooditem: foodItemReducer,
        cart: cartReducer
    },
  })

