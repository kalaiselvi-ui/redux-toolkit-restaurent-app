  import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodData from '../FoodData';
import { setFoodItems } from '../redux/FoodItemSlice';
import FoodCard from './FoodCard';

  const FoodItems = () => {

    const dispatch = useDispatch();

    const foodItems = useSelector((state)=> state.fooditem.foodItems);
    // console.log(foodItems, 'foodItems');

    useEffect(()=>{
      dispatch(setFoodItems(FoodData))
    }, [dispatch])

    return (
      <div className='container mx-auto px-4 md:px-10 my-10'>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-x-5 gap-y-10'>
          {
            foodItems.map((food) => {
              return <FoodCard key={food.id}
                id={food.id} name={food.name}
                img={food.img} desc={food.desc}
                price={food.price} rating={food.rating}
                category={food.category} />

            })
          }
        </div>
      </div>
    )
  }

  export default FoodItems