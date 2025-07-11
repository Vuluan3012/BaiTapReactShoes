import React, { useState } from "react";
import ProductList from "./productList";
import Modal from "./modal";
import shoesData from "./data.json";
import CartModal from "./CartModal";

export default function ShoesStore() {
  const [products] = useState(shoesData);
  const [productDetail, setProductDetail] = useState(null);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const handleSetModal = (product) => setProductDetail(product);

  const handleAddCart = (product) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((p) => p.id === product.id);
    if (index === -1) {
      cartCopy.push({ ...product, qty: 1 });
    } else {
      cartCopy[index].qty += 1;
    }
    setCart(cartCopy);
  };

  const handleQty = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    );
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="relative container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Shoes Shop</h1>
        <button
          onClick={() => setOpenCart(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Open Cart ({cart.reduce((sum, item) => sum + item.qty, 0)})
        </button>
      </div>
      <ProductList
        productsData={products}
        setStateModal={handleSetModal}
        onAddToCart={handleAddCart}
      />
      <Modal content={productDetail} onClose={() => setProductDetail(null)} />
      {openCart && (
        <CartModal
          carts={cart}
          onClose={() => setOpenCart(false)}
          onChangeQty={handleQty}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
