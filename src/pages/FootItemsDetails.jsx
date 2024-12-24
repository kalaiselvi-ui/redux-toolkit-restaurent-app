import React from 'react';
import { useParams } from 'react-router-dom';
import FoodData from '../FoodData';

const FootItemsDetails = () => {
    const { id } = useParams();

    const item = FoodData.find(foodItem => foodItem.id === parseInt(id));

    if (!item) {
        return <div>Item not found!</div>;
    }

    return (
        <div>
            <div className="container mx-auto px-4 md:px-16 lg:px-24 my-10">
                <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
                <img src={item.img} alt={item.name} className="w-full h-96 object-contain mb-4" />
                <p className="text-lg">{item.desc}</p>
                <p className="text-md text-gray-600">Category: {item.category}</p>
                <p className="text-xl font-semibold mt-2">Price: ${item.price}</p>
                <span className="bg-green-500 text-sm rounded-md px-2 py-1.5 text-white">{item.rating}</span>
            </div>
        </div>
    )
}

export default FootItemsDetails