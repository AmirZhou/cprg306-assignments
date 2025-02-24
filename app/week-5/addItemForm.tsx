import { CrossIcon } from "@/components/Icons";

export default function AddItemForm() {
  return (
    <>
      <div className="flex h-full w-full flex-col gap-12 px-8 py-10">
        {/* everyting except the button */}
        <div className="flex flex-col gap-4">
          {/* title */}
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Add Item</h2>
            <CrossIcon />
          </div>

          {/* name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          {/* quantity and category, in one line*/}
          <div className="flex w-full gap-4">
            {/* quantity */}
            <div>
              <label htmlFor="quantity">Quantity</label>
              {/* this could use the add and minus button, besides a input */}
              <input type="number" id="quantity" />
            </div>
            {/* category */}
            {/* it could use a default category, if use wouildn't borther select any */}
            <div>
              <label htmlFor="category">Category</label>
              <select id="category">
                {/* the following categories should not be hard coded */}
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
          </div>
        </div>

        {/* the button */}
        <button>Add</button>
      </div>
    </>
  );
}
