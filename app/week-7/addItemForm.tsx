import {
  CrossIcon,
  MinusIcon,
  PlusIcon,
  DropdownIcon,
} from "@/components/Icons";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AddItemForm({ onClose, onSubmit }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Produce");

  // refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownIconRef = useRef<SVGSVGElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  useGSAP(
    () => {
      // tween for dropdown icon
      if (dropdownIconRef.current) {
        gsap.to(dropdownIconRef.current, {
          rotate: isDropdownOpen ? 180 : 0,
          duraton: 0.2,
          ease: "power2.out",
        });
      }

      // tween for dropdown menu
      if (dropdownMenuRef.current && isDropdownOpen) {
        gsap.fromTo(
          dropdownMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
        );
      }
    },
    { scope: containerRef, dependencies: [isDropdownOpen] },
  );

  const { contextSafe } = useGSAP({ scope: containerRef }); // why wouldn't i return this from the previous hook call?

  const toggleDropdown = contextSafe(() => {
    setIsDropdownOpen(!isDropdownOpen);
  });

  const selectCategory = contextSafe((category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  });

  // handle click outside with contestSafe
  useGSAP(
    () => {
      const handleClickOutside = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    { scope: containerRef },
  );

  const handleAddItem = () => {
    if (!itemName.trim()) {
      alert("Please enter an item name");
      return;
    }

    const newItem = {
      name: itemName,
      quantity: quantity,
      category: selectedCategory,
    };

    onSubmit(newItem);

    setItemName("");
    setQuantity(1);
    setSelectedCategory("Produce");
    onClose();
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity("" as unknown as number); // what does this magic do?
    } else if (!isNaN(Number(value)) && Number(value) >= 1) {
      setQuantity(Number(value)); // where this Number function
    }
  };

  return (
    <>
      <div className="h-full w-full px-8 py-10">
        <div className="flex flex-col gap-4 font-poppins">
          {/* title */}
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Add Item</h2>
            <CrossIcon onClick={onClose} />
          </div>

          <div className="flex flex-col gap-6">
            {/* name */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900" htmlFor="name">
                Name
              </label>
              {/* todo: replace the default focus style */}
              <input
                className="h-16 rounded-md border border-gray-400 px-2 text-center text-3xl font-medium outline-none focus:ring-1 focus:ring-gray-900"
                type="text"
                id="name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>

            {/* quantity and category*/}
            <div className="flex flex-col gap-2">
              <label className="text-gray-900" htmlFor="quantity">
                Quantity
              </label>

              {/* quantity */}
              <div className="flex w-full gap-3">
                <div className="flex h-10 flex-1 items-center justify-between rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-gray-900">
                  <input
                    className="h-full w-full flex-1 rounded-md border-none px-2 text-sm outline-none"
                    value={quantity}
                    onChange={handleQuantityChange}
                    type="number"
                    id="quantity"
                  />
                  <div className="flex h-full items-center pr-2">
                    <MinusIcon
                      onClick={handleDecrement}
                      className="transition-transform duration-200 hover:stroke-violet-800 active:scale-95"
                    />
                    <PlusIcon
                      onClick={handleIncrement}
                      className="transition-transform duration-200 hover:stroke-violet-800 active:scale-95"
                    />
                  </div>
                </div>

                {/* category with custom dropdown*/}
                <div
                  ref={dropdownRef}
                  className="relative flex h-10 flex-1 items-center justify-between rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-gray-900"
                >
                  <div className="flex h-10 flex-1 items-center justify-between rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-gray-900">
                    <div
                      className="flex h-full w-full cursor-pointer items-center justify-between px-2"
                      onClick={toggleDropdown}
                    >
                      <span className="text-sm">{selectedCategory}</span>
                      <div className="flex h-full items-center pr-2">
                        <DropdownIcon
                          ref={dropdownIconRef}
                          className="hover:stroke-violet-800"
                          onClick={toggleDropdown}
                        />
                      </div>
                    </div>
                  </div>

                  {/* dropdown menu */}
                  {isDropdownOpen && (
                    <div
                      ref={dropdownMenuRef}
                      className="absolute left-0 right-0 top-full z-10 mt-1 rounded-md border border-gray-400 bg-white shadow-lg"
                    >
                      {categories.map((category, index) => (
                        <div
                          key={category}
                          className={`cursor-pointer px-2 py-2 text-sm hover:bg-violet-200 ${index === 0 ? "rounded-t-md" : ""} ${index === categories.length - 1 ? "rounded-b-md" : ""}`}
                          onClick={() => selectCategory(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* the button */}
            <button
              className="h-10 w-24 self-end rounded-full bg-gray-900 font-poppins text-gray-200 hover:bg-gray-800"
              onClick={handleAddItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
