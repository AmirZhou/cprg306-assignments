"use client";

import data from "./items.json";
import AddItemForm from "./addItemForm";
import Flyout from "./flyout";
import ItemList from "./ItemList";
import { useState } from "react";
import randomId from '@/utils/randomId';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false); // control the state of the flyout
  const [items, setItems] = useState(data);

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
    <div className={`w-screen min-h-screen flex items-start pt-20 justify-center bg-slate-50 font-poppins`}>
      <ItemList items={items} onAddItem={handleAddItem} onSetItems={handleSetItems} />
      {isOpen &&
        <Flyout isOpen={isOpen} >
          <AddItemForm onClose={() => { setIsOpen(false) }} onSubmit={(item) => handleSubmit(item)} />
        </Flyout>
      }
    </div>
  )
}