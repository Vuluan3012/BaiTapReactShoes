import React from "react";
import "animate.css";

export default function Modal({ content, onClose }) {
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative bg-white p-6 w-full max-w-2xl rounded-lg shadow-xl animate__animated animate__zoomIn">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={content.image} alt={content.name} className="w-full md:w-1/2 h-64 object-contain" />
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">{content.name}</h2>
            <p className="text-gray-600 italic">{content.shortDescription}</p>
            <p className="text-gray-700 text-sm">{content.description}</p>
            <p className="text-blue-700 text-xl font-semibold">${content.price}</p>
            <p className="text-sm text-gray-500 "><p className="text-sm text-gray-800 ">ALIAS:</p> {content.alias}</p>
            <p className="text-sm text-gray-500"><p className="text-sm text-gray-800  ">QUANTITY:</p> {content.quantity}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {content.categories?.map((cat, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded text-xs">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
