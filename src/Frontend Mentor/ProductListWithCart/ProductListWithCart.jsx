import emptyCart from "./assets/images/illustration-empty-cart.svg";
import addToCart from "./assets/images/icon-add-to-cart.svg";
import carbonNeutral from "./assets/images/icon-carbon-neutral.svg";
import data from "./data.json";
import { useRef, useState } from "react";
import { classNames } from "../../functions";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function ProjectListWithCart() {
  const [products] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const totalItemCount = cartItems.reduce(
    (acc, item) => item.quantity + Number(acc),
    0
  );

  const orderTotal = cartItems.reduce(
    (acc, item) => item.total + Number(acc),
    []
  );

  function handleAddToCart(product) {
    if (cartItems.find((c) => c.id === product.id)) return;

    const values = { ...product, quantity: 1, total: 1 * product.price };
    setCartItems((cart) => [...cart, values]);
    setActiveProducts((activeProduct) => [...activeProduct, values]);
  }

  function handleIncrement(id) {
    const newCart = cartItems.map((c) => {
      if (c.id !== id) return c;

      const updatedQuantity = c.quantity + 1;
      const updatedTotal = c.price * updatedQuantity;

      return { ...c, quantity: updatedQuantity, total: updatedTotal };
    });
    setCartItems(newCart);
    setActiveProducts(newCart);
  }

  function handleDecrement(id) {
    const newCart = cartItems
      .map((c) => {
        if (c.id !== id) return c;

        const updatedQuantity = c.quantity - 1;
        const updatedTotal = c.price * updatedQuantity;

        return { ...c, quantity: updatedQuantity, total: updatedTotal };
      })
      .filter((item) => item.quantity > 0);

    setCartItems(newCart);
    setActiveProducts(newCart);
  }

  function handleDelete(id) {
    const newCart = cartItems.filter((c) => c.id !== id);
    setCartItems(newCart);
    setActiveProducts(newCart);
  }

  return (
    <div className="p-10 bg-rose-50">
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <h1 className="mb-10 text-3xl font-bold">Desserts</h1>

          <div className="grid grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                activeProducts={activeProducts}
                onAdd={handleAddToCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="py-5 bg-white px-7 rounded-2xl">
            <h2 className="text-xl font-bold text-rose-600">
              Your Cart ({totalItemCount})
            </h2>

            <div>
              {cartItems.length === 0 && (
                <div className="flex flex-col items-center mt-10">
                  <img src={emptyCart} alt="" />
                  <p className="mt-3 text-base font-medium text-center text-rose-700">
                    Your added items will appear here
                  </p>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="w-full mt-3">
                  {cartItems.map((cartItem) => (
                    <CartItem
                      key={cartItem.id}
                      cartItem={cartItem}
                      onDelete={handleDelete}
                    />
                  ))}

                  <p className="inline-flex items-center justify-between w-full mt-4 text-sm">
                    Order Total{" "}
                    <span className="text-2xl font-bold">
                      ${Number(orderTotal).toFixed(2)}
                    </span>
                  </p>

                  <div className="flex p-3 mt-4 space-x-2 rounded-lg bg-rose-100">
                    <img src={carbonNeutral} alt="Carbon Neutral" />
                    <p>
                      This is a{" "}
                      <span className="font-bold">carbon-neutral</span> delivery
                    </p>
                  </div>

                  <button className="w-full p-3 mt-3 text-base font-semibold text-white border cursor-pointer bg-rose-600 rounded-3xl">
                    Confirm Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  activeProducts,
  onAdd,
  onIncrement,
  onDecrement,
}) {
  let active = useRef(false);

  active = activeProducts.filter((c) => c.id === product.id).at(0)?.id
    ? true
    : false;

  return (
    <div>
      <div className="mb-4 text-center">
        <img
          src={product.image.desktop}
          className={classNames(
            active ? "border-3 border-rose-500" : "",
            "rounded-2xl"
          )}
          alt={product.name}
        />

        {!active && (
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center px-8 py-3 -mt-40 text-base font-semibold bg-white border cursor-pointer border-rose-500 rounded-3xl h-fit gap-x-3 hover:text-rose-500"
          >
            <img src={addToCart} alt="Add" />
            Add to Cart
          </button>
        )}

        {active && (
          <div
            onClick={() => onAdd(product)}
            className="inline-flex items-center justify-between p-3 -mt-40 text-base font-semibold text-white border w-44 bg-rose-600 rounded-3xl h-fit gap-x-3"
          >
            <MinusCircleIcon
              onClick={() => onDecrement(product.id)}
              className="cursor-pointer size-5"
            />
            <span>
              {activeProducts.filter((a) => a.id === product.id).at(0).quantity}
            </span>
            <PlusCircleIcon
              onClick={() => onIncrement(product.id)}
              className="cursor-pointer size-5"
            />
          </div>
        )}
      </div>
      <h2 className="text-sm text-rose-700">{product.category}</h2>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-base font-semibold text-rose-600">
        ${Number(product.price).toFixed(2)}
      </p>
    </div>
  );
}

function CartItem({ cartItem, onDelete }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
      <div>
        <p className="text-lg font-semibold">{cartItem.name}</p>
        <p className="inline-flex space-x-3 font-extralight text-rose-700">
          <span className="font-semibold text-rose-600">
            {cartItem.quantity}x
          </span>
          <span>@{Number(cartItem.price).toFixed(2)}</span>
          <span>${Number(cartItem.total).toFixed(2)}</span>
        </p>
      </div>

      <XCircleIcon
        onClick={() => onDelete(cartItem.id)}
        className="cursor-pointer size-7 text-rose-300 hover:text-rose-600"
      />
    </div>
  );
}
