"use client";

import React, { useState, useContext, createContext } from "react";

interface IngredientContextValue {
  ingredient: string | null;
  setIngredient: React.Dispatch<string | null>;
}

const IngredientContext = createContext<IngredientContextValue | null>(null);

export function IngredientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ingredient, setIngredient] = useState<string | null>(null);

  return (
    <IngredientContext.Provider value={{ ingredient, setIngredient }}>
      {children}
    </IngredientContext.Provider>
  );
}

export function useIngredient() {
  const context = useContext(IngredientContext);

  if (!context) {
    throw new Error("useIngredient must be used within an IngredientProvider");
  }

  return context;
}
