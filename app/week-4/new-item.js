"use client";
import { useState, useCallback } from "react";

export default function NewItem() {
  const { quantity, setQuantity } = useState(1);

  const increment = useCallback(() => {
    setQuantity(prev => prev < 20 ? prev + 1 : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decrement = useCallback(() => {
    setQuantity(prev => prev > 0 ? prev - 1 : prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="">
    <span></span>
    <span>{quantity}</span>
    <span></span>
    </div>
}

