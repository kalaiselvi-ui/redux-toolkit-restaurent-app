import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/cartSlice';

const FoodCard = ({ id, name, img, price, desc, rating, category }) => {
  
    const dispatch = useDispatch();

    const handleAddToCart = (e) =>{
        // alert('adee');
        e.stopPropagation();
        e.preventDefault();
       dispatch(addToCart({id, name, img, price, quantity: 1, totalPrice: price}));
       toast.success("Item added to the cart!");

    }

    return (
        <div>
            <div className=''>
                <Link to={`/items/${id}`} className='bg-white shadow-lg flex flex-col rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    <div>
                        <img src={img} alt="" className='w-full h-48 object-contain' />
                    </div>
                    <div className='px-3 py-2 flex flex-col justify-between gap-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-bold text-lg max-w-40 w-full min-h-6 line-clamp-1'>{name}</h3>
                            <p className='text-md font-semibold text-gray-800'>₹ {price}</p>
                        </div>
                        <p className='text-xs min-h-[50px] line-clamp-2'>{desc}</p>
                        <p className='font-medium text-md text-gray-600'>Category: {category}</p>
                        <div className='flex justify-between items-center mb-2'>
                          <span className='bg-green-500 text-sm rounded-md px-2 py-1.5 w-fit flex h-fit gap-1 items-center'><FaStar />{rating}</span>
                          <button className='flex items-center font-semibold text-white text-md justify-center w-fit text-center bg-yellow-500 outline-none border-none rounded-md px-3 py-1.5 hover:bg-yellow-600' 
                          onClick={handleAddToCart} >Add to cart</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FoodCard