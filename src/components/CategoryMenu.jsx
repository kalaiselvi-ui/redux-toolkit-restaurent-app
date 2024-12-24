import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/FoodItemSlice';

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  }


  return (
    <div className='container mx-auto px-4 md:px-10 mt-[100px]' >
      <h3 className='font-semibold text-2xl mb-4'>Find the best Food</h3>
      <div className='flex flex-wrap gap-3'>
        {
          ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className='px-3 py-2 bg-gray-200 text-black font-bold hover:bg-green-500 rounded-lg text-sm'>{category}</button>

          ))
        }

        {/* <button className='px-3 py-2 bg-gray-200 text-black font-bold hover:bg-green-500 rounded-lg text-sm'>Breakfast</button>
            <button className='px-3 py-2 bg-gray-200 text-black font-bold hover:bg-green-500 rounded-lg text-sm'>Lunch</button>
            <button className='px-3 py-2 bg-gray-200 text-black font-bold hover:bg-green-500 rounded-lg text-sm'>Dinner</button>
            <button className='px-3 py-2 bg-gray-200 text-black font-bold hover:bg-green-500 rounded-lg text-sm'>Snacks</button> */}

      </div>
    </div>
  )
}

export default CategoryMenu