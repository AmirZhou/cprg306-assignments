"use client";

import AddItemForm from "./addItemForm";
import Flyout from "./flyout";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true); // control the state of the flyout

  return (
    <div className={`w-screen min-h-screen p-2 flex items-center justify-center bg-slate-50`}>
      <Flyout isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
        <AddItemForm />
      </Flyout>
    </div>
  )
}