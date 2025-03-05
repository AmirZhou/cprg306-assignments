import data from "./items.json";
import Item from "./Item";
import TableHeader from "./TableHeader";
import { useState } from "react";

interface ItemListProps extends React.ComponentProps<"div"> {}

export default function ItemList() {
  const [items, setItems] = useState(data);
  const [isCategoryView, setIsCategoryView] = useState(false);

  return (
    <div className="flex h-full w-3/4 min-w-96 flex-col items-center justify-center gap-2">
      <div className="flex w-full justify-between">
        <h2 className="text-4xl">Shopping List</h2>
        <span>Add</span>
      </div>
      <div className="flex w-full justify-start gap-4">
        <span className="rounded-l border bg-lime-700 px-2 py-1">
          Normal View
        </span>
        <span className="rounded-l border bg-lime-700 px-2 py-1">
          Category View
        </span>
      </div>

      {!isCategoryView && (
        <div className="w-full rounded-lg border border-gray-400 bg-gray-300 p-4">
          <TableHeader />
          {items.map((item, i) => (
            <Item
              key={item.id}
              {...item}
              bgColor={i % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
