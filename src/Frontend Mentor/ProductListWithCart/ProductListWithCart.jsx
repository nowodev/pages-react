import emptyCart from "/product-list-images/illustration-empty-cart.svg";
import carbonNeutral from "/product-list-images/icon-carbon-neutral.svg";
import data from "./data.json";
import { useEffect, useState } from "react";
import { SecondaryButton } from "./Button";
import ProductCard from "./ProductCard";
import OrderConfirmed from "./OrderConfirmed";
import CartItem from "./CartItem";

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

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-content-center">
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

        <div className="max-wlg">
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

export default ProductListWithCart;
