"use client";

import AddItemForm from "./addItemForm";
import Flyout from "./flyout";
import ItemList from "./ItemList";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false); // control the state of the flyout


  const handleAddItem = (isDisplayAddingForm) => {
    setIsOpen(isDisplayAddingForm);
  };


  return (
    <div className={`w-screen min-h-screen flex items-start pt-20 justify-center bg-slate-50 font-poppins`}>
      <ItemList onAddItem={handleAddItem} />
      {isOpen &&
        <Flyout isOpen={isOpen} >
          <AddItemForm onClose={() => { setIsOpen(false) }} />
        </Flyout>
      }
    </div>
  )
}