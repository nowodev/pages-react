import emptyCart from "./assets/images/illustration-empty-cart.svg";
import addToCart from "./assets/images/icon-add-to-cart.svg";
import data from "./data.json";
import { useState } from "react";

export default function ProjectListWithCart() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(data) {
    setCart((cart) => [...cart, data]);
  }

  return (
    <div className="p-10 bg-rose-50">
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <h1 className="mb-10 text-3xl font-bold">Desserts</h1>

          <div className="grid grid-cols-3 gap-10">
            {data.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="py-5 bg-white px-7 rounded-2xl">
            <h2 className="text-xl font-bold text-rose-600">Your Cart (0)</h2>

            <div className="flex flex-col items-center my-10">
              {cart.length === 0 && (
                <>
                  <img src={emptyCart} alt="" />
                  <p className="mt-3 text-base font-medium text-center text-rose-700">
                    Your added items will appear here
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <div>
      <div className="mb-4 text-center">
        <img src={product.image.desktop} className="rounded-2xl" alt="" />
        <button
          onClick={() => onAdd(product)}
          className="inline-flex items-center px-10 py-2 -mt-40 text-base font-semibold bg-white border border-rose-500 rounded-3xl h-fit gap-x-3"
        >
          <img src={addToCart} alt="" />
          Add to Cart
        </button>
      </div>
      <h2 className="text-sm text-rose-700">{product.category}</h2>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-base font-semibold text-rose-600">${product.price}</p>
    </div>
  );
}
