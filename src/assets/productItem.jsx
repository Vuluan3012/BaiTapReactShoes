import React from "react";

export default function ProductItem({ item, setStateModal, onAddToCart }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-contain bg-white p-4 cursor-pointer"
        onClick={() => setStateModal(item)}
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
        <button
          onClick={() => onAddToCart(item)}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}