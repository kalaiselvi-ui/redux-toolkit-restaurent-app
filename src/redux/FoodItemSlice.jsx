import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    foodItems:[],
    allFoodItems: [], 
    searchTerm:''
  }
  
export const FoodItemSlice = createSlice({
    name:'fooditem',
    initialState,
    reducers:{
        setFoodItems(state, action){
            state.foodItems = action.payload;
            state.allFoodItems = action.payload; 
        },
        filterByCategory(state, action){
           const category = action.payload;
           if(category === 'All'){
            state.foodItems = state.allFoodItems;
            console.log('All Food Items:', state.allFoodItems);
           }
           else{
            state.foodItems = state.allFoodItems.filter((item)=> item.category === category);
            console.log("selected category", state.foodItems)
           }
        },
        setSearchTerm(state, action){
           state.searchTerm = action.payload;
           state.foodItems = state.allFoodItems.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
        }

    }
})

export const { setFoodItems, filterByCategory, setSearchTerm } = FoodItemSlice.actions;

export default FoodItemSlice.reducer;

