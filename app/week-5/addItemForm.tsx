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
                    className="h-full min-w-0 rounded-md border-none px-2 text-sm outline-none"
                    // style={{ width: 0 }} // i don't really like this inline style, but without this, the input field will be too wide , w-0 wouldn't work, so i used this, update: min-w-0 works
                    // update: After adding the buttons, this no longer works. I will have to find a better way to do this, may be becausue the buttons got a default width i cant get rid of, and the input field as a result growth faster.
                    type="number"
                    id="quantity"
                  />
                  <div className="flex h-full items-center pr-2">
                    <MinusIcon />
                    <PlusIcon />
                  </div>
                </div>

                {/* category */}
                <div className="flex h-10 flex-1 items-center justify-between rounded-md border border-gray-400 focus-within:ring-1 focus-within:ring-gray-900">
                  <select
                    className="h-full min-w-0 appearance-none rounded-md border-none px-2 text-sm outline-none"
                    // style={{ width: 0 }}
                    id="category"
                  >
                    {/* the following categories should not be hard coded */}
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select>
                  <div className="flex h-full items-center pr-2">
                    <DropdownIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* the button */}
            <button className="h-10 w-24 self-end rounded-full bg-gray-900 font-poppins text-gray-200">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
