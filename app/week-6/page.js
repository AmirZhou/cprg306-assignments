"use client";

import AddItemForm from "./addItemForm";
import Flyout from "./flyout";
import ItemList from "./ItemList";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false); // control the state of the flyout

  return (
    <div className={`w-screen min-h-screen flex items-start pt-20 justify-center bg-slate-50 font-poppins`}>
      <ItemList />
      {isOpen &&
        <Flyout isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
          <AddItemForm />
        </Flyout>
      }
    </div>
  )
}