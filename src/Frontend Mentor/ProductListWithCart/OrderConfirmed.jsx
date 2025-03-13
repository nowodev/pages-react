import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { SecondaryButton } from "./Button";

export default function OrderConfirmed({
  cartItems,
  orderTotal,
  onCloseModal,
  onStartNew,
}) {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 z-10 bg-black/50"
        onClick={onCloseModal}
      ></div>

      <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-center m-auto md:w-fit md:h-fit md:inset-0">
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

          <div className="p-5 overflow-auto bg-amber-50 rounded-xl max-h-72">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center justify-between py-4 border-b border-gray-100"
              >
                <div className="flex items-center space-x-5">
                  <img
                    className="rounded-2xl size-16"
                    src={cartItem.image.thumbnail}
                    alt={cartItem.name}
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
