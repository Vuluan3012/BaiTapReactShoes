import React from "react";
import ProductItem from "./productItem";

export default function ProductList({ productsData, setStateModal, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          item={product}
          setStateModal={setStateModal}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}