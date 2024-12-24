import React from 'react'
import Cart from '../components/Cart'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'

const Home = ({ isCartOpen, toggleCart }) => {
  return (
    <div>
      <CategoryMenu />
      <FoodItems />
      {isCartOpen && <Cart toggleCart={toggleCart}/>}
    </div>
  )
}

export default Home