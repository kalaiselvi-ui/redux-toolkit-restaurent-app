import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

const ItemCard = ({id, name, img, price, quantity}) => {

  const dispatch = useDispatch();
  const handleRemoveFromCart = (id) =>{
    console.log("Removing item with id:", id);
     dispatch(removeFromCart({id}))
  }
  console.log("Props in ItemCard:", { id, name, img, price, quantity });
  return (
    <div>
      <div className="flex shadow-md rounded-lg p-2 gap-2">
        <img src={img} className="h-[50px] w-[50px] object-contain" alt="" />
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="font-bold text-gray-800">{name}</h3>
            <span className="text-green-500 font-bold">₹ {price * quantity}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <FaTrash className="cursor-pointer"
              onClick={() => handleRemoveFromCart(id)}/>
              <div className="flex items-center space-x-2">
                <AiOutlinePlus 
                onClick={() => dispatch(increaseQuantity({id}))}
                className="border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white cursor-pointer rounded-md p-1 text-xl transition-all ease-linear" />
                <span>{quantity}</span>
                <AiOutlineMinus
                 onClick={() => dispatch(decreaseQuantity({id}))}
                 className="border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white cursor-pointer rounded-md p-1 text-xl transition-all ease-linear" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemCard;
