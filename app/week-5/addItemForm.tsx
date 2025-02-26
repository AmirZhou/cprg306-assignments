import {
  CrossIcon,
  MinusIcon,
  PlusIcon,
  DropdownIcon,
} from "@/components/Icons";
import { useState } from "react";

export default function AddItemForm() {
  const [quantity, setQuantity] = useState(1);

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
            <CrossIcon />
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

                {/* category */}
                <div className="flex h-10 flex-1 items-center justify-between rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-gray-900">
                  <select
                    className="h-full w-full flex-1 appearance-none rounded-md border-none px-2 text-sm outline-none"
                    id="category"
                  >
                    {/* the following categories should not be hard coded */}
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select>
                  <div className="flex h-full items-center pr-2">
                    <DropdownIcon className="hover:stroke-violet-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* the button */}
            <button className="h-10 w-24 self-end rounded-full bg-gray-900 font-poppins text-gray-200 hover:bg-gray-800">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
