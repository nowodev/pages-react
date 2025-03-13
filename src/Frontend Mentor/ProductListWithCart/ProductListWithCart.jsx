import emptyCart from "/product-list-images/illustration-empty-cart.svg";
import addToCart from "/product-list-images/icon-add-to-cart.svg";
import carbonNeutral from "/product-list-images/icon-carbon-neutral.svg";
import data from "./data.json";
import { useEffect, useRef, useState } from "react";
import { classNames } from "../../functions";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

function ProductListWithCart() {
  const [products] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const totalItemCount = cartItems.reduce(
    (acc, item) => item.quantity + Number(acc),
    0
  );
  const [confirmOrder, setConfirmOrder] = useState(false);

  const orderTotal = cartItems.reduce(
    (acc, item) => item.total + Number(acc),
    []
  );

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape" && confirmOrder === true) {
          setConfirmOrder(false);
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [confirmOrder]
  );

  function handleStartNew() {
    setCartItems([]);
    setActiveProducts([]);
    setConfirmOrder(false);
  }

  function handleShowConfirmation() {
    setConfirmOrder((confirm) => !confirm);
  }

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
    <div className="p-4 lg:p-10 bg-amber-50">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-10 text-3xl font-bold">Desserts</h1>

          <div className="grid gap-10 lg:grid-cols-3">
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

        <div className="max-w-lg">
          <div className="py-5 bg-white px-7 rounded-2xl">
            <h2 className="text-xl font-bold text-amber-600">
              Your Cart ({totalItemCount})
            </h2>

            <div>
              {cartItems.length === 0 && (
                <div className="flex flex-col items-center mt-10">
                  <img src={emptyCart} alt="" />
                  <p className="mt-3 text-base font-medium text-center text-amber-700">
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

                  <div className="flex p-3 mt-4 space-x-2 rounded-lg bg-amber-100">
                    <img src={carbonNeutral} alt="Carbon Neutral" />
                    <p>
                      This is a{" "}
                      <span className="font-bold">carbon-neutral</span> delivery
                    </p>
                  </div>

                  <SecondaryButton
                    className="mt-4"
                    onClick={handleShowConfirmation}
                    text="Confirm Order"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {confirmOrder && (
        <OrderConfirmed
          cartItems={cartItems}
          orderTotal={orderTotal}
          onCloseModal={handleShowConfirmation}
          onStartNew={handleStartNew}
        />
      )}
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

  const screenWidth = window.innerWidth;

  return (
    <div>
      <div className="mb-4 text-center w-fit">
        <img
          src={
            screenWidth <= 480
              ? product.image.mobile
              : screenWidth > 480 && screenWidth <= 768
              ? product.image.tablet
              : product.image.desktop
          }
          className={classNames(
            active ? "border-3 border-amber-500" : "",
            "rounded-2xl"
          )}
          alt={product.name}
        />

        {!active && (
          <div className="-mt-7">
            <button
              onClick={() => onAdd(product)}
              className="inline-flex items-center px-8 py-3 text-base font-semibold bg-white border cursor-pointer border-amber-500 rounded-3xl h-fit gap-x-3 hover:text-amber-500"
            >
              <img src={addToCart} alt="Add" />
              Add to Cart
            </button>
          </div>
        )}

        {active && (
          <div className="-mt-7">
            <SecondaryButton
              onClick={() => onAdd(product)}
              className="inline-flex items-center justify-between !w-44 gap-x-3"
            >
              <MinusCircleIcon
                onClick={() => onDecrement(product.id)}
                className="cursor-pointer size-5"
              />
              <span>
                {
                  activeProducts.filter((a) => a.id === product.id).at(0)
                    .quantity
                }
              </span>
              <PlusCircleIcon
                onClick={() => onIncrement(product.id)}
                className="cursor-pointer size-5"
              />
            </SecondaryButton>
          </div>
        )}
      </div>
      <h2 className="text-sm text-amber-700">{product.category}</h2>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-base font-semibold text-amber-600">
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
        <p className="inline-flex space-x-3 font-extralight text-amber-700">
          <span className="font-semibold text-amber-600">
            {cartItem.quantity}x
          </span>
          <span>@{Number(cartItem.price).toFixed(2)}</span>
          <span>${Number(cartItem.total).toFixed(2)}</span>
        </p>
      </div>

      <XCircleIcon
        onClick={() => onDelete(cartItem.id)}
        className="cursor-pointer size-7 text-amber-300 hover:text-amber-600"
      />
    </div>
  );
}

function OrderConfirmed({ cartItems, orderTotal, onCloseModal, onStartNew }) {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-10 bg-black/50"
        onClick={onCloseModal}
      ></div>

      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-center mx-auto md:inset-0">
        <div className="p-8 mx-auto space-y-5 bg-white shadow-2xl w-xl rounded-t-2xl md:rounded-xl">
          <CheckCircleIcon
            className="text-green-600 size-10"
            onClick={onCloseModal}
          />
          <div>
            <h2 className="text-5xl font-semibold">Order Confirmed</h2>
            <p className="mt-3 text-lg font-medium text-amber-800">
              We hope you enjoy your food!
            </p>
          </div>

          <div className="p-5 bg-amber-50 rounded-xl max-h-96 overflow-auto">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center justify-between py-4 border-b border-gray-100"
              >
                <div className="flex items-center space-x-5">
                  <img
                    className="rounded-2xl size-16"
                    src={cartItem.image.thumbnail}
                    alt=""
                  />
                  <div>
                    <p className="text-base font-semibold">{cartItem.name}</p>
                    <p className="font-bold text-amber-600">
                      {cartItem.quantity}x{" "}
                      <span className="ml-3 font-light">
                        @ ${Number(cartItem.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-base font-bold">
                  ${Number(cartItem.total).toFixed(2)}
                </p>
              </div>
            ))}

            <p className="inline-flex items-center justify-between w-full mt-5 text-base">
              Order Total{" "}
              <span className="text-2xl font-bold">
                ${Number(orderTotal).toFixed(2)}
              </span>
            </p>
          </div>

          <SecondaryButton onClick={onStartNew} text="Start New Order" />
        </div>
      </div>
    </div>
  );
}

function SecondaryButton({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "w-full p-3 text-base font-semibold text-white cursor-pointer bg-amber-800 rounded-3xl"
      )}
    >
      {text ?? children}
    </button>
  );
}

export default ProductListWithCart;
