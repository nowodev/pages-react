import addToCart from "/product-list-images/icon-add-to-cart.svg";
import { useRef } from "react";
import { classNames } from "../../functions";
import { PrimaryButton, SecondaryButton } from "./Button";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function ProductCard({
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
            <PrimaryButton
              onClick={() => onAdd(product)}
              className="inline-flex items-center"
            >
              <img src={addToCart} alt="Add" />
              Add to Cart
            </PrimaryButton>
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
