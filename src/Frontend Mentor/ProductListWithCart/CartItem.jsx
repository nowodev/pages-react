import { XCircleIcon } from "@heroicons/react/24/outline";

export default function CartItem({ cartItem, onDelete }) {
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
