import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'

const Cart = ({toggleCart}) => {

    const cartItems = useSelector((state) => state.cart.cartItems)
    return (
        <>
            <div className='fixed pt-5 px-4 z-50 top-0 w-[20vw] right-0 h-full bg-white'>
                {/* <FaShoppingCart className="text-red bg-red text-xl" /> */}
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-bold text-gray-800'>My Order</span>
                    <IoMdClose className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' onClick={toggleCart}/>
                </div>
                <div className=''>
                    {
                        cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <ItemCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    img={item.img}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )))
                            : (
                                <div>
                                   <p className="text-gray-600">Your cart is empty!</p>
                                </div>
                            )

                    }
                </div>
                <div className='absolute bottom-0 mb-5'>
                    <h3 className='font-bold text-gray-800'>items: </h3>
                    <h3 className='font-bold text-gray-800'>Total Amount: </h3>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
                    <button className='bg-yellow-500 font-bold p-3 text-white py-2 rounded-lg lg:w-[18vw] w-full'>Checkout</button>
                </div>
            </div>

        </>
    )
}

export default Cart