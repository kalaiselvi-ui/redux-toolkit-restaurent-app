import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { setSearchTerm } from '../redux/FoodItemSlice';

const Navbar = ({ toggleCart }) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.cartItems)
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm))
  }
  // const totalQuantity = useSelector((state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0))
  return (
    <div className="bg-yellow-500 h-20 fixed z-50 top-0 w-full">
      <div className="container mx-auto md:px-10 py-3 px-1 h-full">
        <nav className="w-full h-full">
          <div className="flex md:justify-between justify-around md:flex-row flex-col items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="md:h-10 h-8 object-contain" />
            </Link>

            {/* Search and Cart */}
            <div className="flex items-center gap-3">
              <form action="" className="flex">
                <input
                  type="search"
                  name='search'
                  placeholder="Search here"
                  className="px-3 md:py-2 py-1 rounded-md md:w-96 border outline-none"
                  autoComplete='off'
                  onChange={handleSearchChange}
                />
              </form>
              <div
                onClick={toggleCart}
                className='rounded-full h-10 w-10 flex items-center justify-center relative cursor-pointer' >
                <FaShoppingCart className='flex items-center text-2xl' />
                {
                  totalQuantity.length > 0 &&
                  <span className='absolute bg-white text-sm items-center flex justify-center w-5 h-5 rounded-full -top-2 -right-1'>
                    {totalQuantity.length}
                  </span>
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
