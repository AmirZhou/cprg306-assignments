"use client";
import { useState, useCallback } from "react";
import { PlusIcon, MinusIcon } from "@/components/Icons";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = useCallback(() => {
    setQuantity(prev => prev < 20 ? prev + 1 : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => prev > 1 ? prev - 1 : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-24 mx-auto justify-between ">
      <span>
        <MinusIcon onClick={decrement} />
      </span>
      <span className="w-8 text-center">{quantity}</span>
      <span>
        <PlusIcon onClick={increment} />
      </span>
    </div>);
}

