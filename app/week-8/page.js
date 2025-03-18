"use client";

import data from "./items.json";
import AddItemForm from "./addItemForm";
import Flyout from "./flyout";
import ItemList from "./ItemList";
import MealsMenu from "./mealsMenu";
import { useState } from "react";
import randomId from '@/utils/randomId';
import { IngredientProvider } from "@/app/week-8/context/ingredientContext";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false); // control the state of the flyout
  const [items, setItems] = useState(data);
  const [meanMenuIsOpen, setMeanMenuIsOpen] = useState(false);


  const handleAddItem = (isDisplayAddingForm) => {
    setIsOpen(isDisplayAddingForm);
  };

  const handleSubmit = (item) => {
    // need to handle new Item id here
    setItems(items => {
      return [...items, { ...item, id: randomId() }];
    });
    setIsOpen(false);
  }

  const handleSetItems = (newItems) => {
    setItems(newItems);
  };

  return (
    <IngredientProvider>
      <div className={`w-full min-h-screen flex items-start pt-20 justify-center bg-slate-50 font-poppins`}>
        <ItemList items={items} onAddItem={handleAddItem} onSetItems={handleSetItems} onSelectItem={() => setMeanMenuIsOpen(true)} />
        {isOpen &&
          <Flyout isOpen={isOpen} >
            <AddItemForm onClose={() => { setIsOpen(false) }} onSubmit={(item) => handleSubmit(item)} />
          </Flyout>
        }
        {meanMenuIsOpen &&
          <Flyout isOpen={meanMenuIsOpen} >
            <MealsMenu onClose={() => { setMeanMenuIsOpen(false) }} />
          </Flyout>
        }
      </div>
    </IngredientProvider>
  )
}