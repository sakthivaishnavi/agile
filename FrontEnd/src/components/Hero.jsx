import React, { useState } from 'react';
import biriyani from '../assets/biriyani.jpeg'; 
import mushroom from '../assets/mushroom-biryani.jpg';
import noodles from '../assets/noodles.jpeg';
import parotta from '../assets/parotta.jpg';

const Hero = () => {
  const [cart, setCart] = useState([]);

  const menuItems = [
    { name: "Chicken Biriyani", type: "Non-Vegetarian", price: 180, image: biriyani },
    { name: "Mushroom Biriyani", type: "Vegetarian", price: 150, image: mushroom },
    { name: "Veg Noodles", type: "Vegetarian", price: 120, image: noodles },
    { name: "Parotta", type: "Vegetarian", price: 20, image: parotta },
  ];

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div>
      <div>
        <h2 className='text-4xl font-bold font-mono px-10 pt-24'>
          Check out our Menu
        </h2>
        <div className="grid grid-cols-4 gap-6 px-10 py-6">
          {menuItems.map((item, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.name} 
                width={250} 
                height={150}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3 className="text-2xl font-bold mt-4">{item.name}</h3>
              <p className="text-lg mt-2">{item.type}</p>
              <p className="text-lg mt-2 font-semibold">Price: ₹{item.price}</p>
              <button 
                onClick={() => handleAddToCart(item)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
