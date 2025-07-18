"use client";

import { Button } from "./ui/button";
import { Product } from "../../sanity.types";
import { useBasketStore } from "@/store/store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus, PlusCircle, PlusCircleIcon } from "lucide-react";

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  const { addItem, removeItem, getItemCount } = useBasketStore();
  const itemCount = getItemCount(product._id);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-col w-fit">
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => removeItem(product._id)}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ",
            itemCount === 0
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300",
          )}
          disabled={itemCount === 0 || disabled}
        >
          {/* Todo: show confirmation dialog when the user is reducing the last item */}
          <Minus
            size={18}
            strokeWidth={3}
            className={cn(itemCount === 0 ? "text-gray-400" : "text-gray-600")}
          />
        </button>
        <span className="w-8 text-center font-semibold">{itemCount}</span>
        <button
          onClick={() => addItem(product)}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ",
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600",
          )}
          disabled={disabled}
        >
          {/* Todo: maximum items should be equal to stock. If the items in stock are reduced. The item count is reduced too */}

          <Plus
            size={20}
            strokeWidth={3}
            className="font-bold text-white text-xl"
          />
        </button>
      </div>
      {/* <Button disabled={disabled}>Add to Basket</Button> */}
    </div>
  );
}

export default AddToBasketButton;
