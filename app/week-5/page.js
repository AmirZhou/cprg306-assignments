"use client";

import Flyout from "./flyOut";
import { useState } from "react";

export default function Page() {
  [isOpen, setIsOpen] = useState(true); // control the state of the flyout

  return (
    <div className={`w-screen min-h-screen p-2 flex items-center justify-center ${isOpen ? "bg-gray-400" : "bg-gray-100"}`}>
      <Flyout isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
        Add item
      </Flyout>
    </div>
  )
}