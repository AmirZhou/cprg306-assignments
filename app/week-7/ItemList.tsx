import data from "./items.json";
import Item from "./Item";
import TableHeader from "./TableHeader";
import { useState } from "react";
import CategoryList from "./CategoryList";

interface ItemListProps extends React.ComponentProps<"div"> {
  onAddItem: (isDisplayAddingForm: boolean) => void;
}

export default function ItemList({ onAddItem, ...props }: ItemListProps) {
  const [items, setItems] = useState(data);
  const [isCategoryView, setIsCategoryView] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "category" | "">("");
  const [isAcsending, setIsAcsending] = useState(true);

  // ai generated code
  const handleSort = (sortType: "name" | "category" | "") => {
    setSortBy((prevSortBy) => {
      return sortType;
    });

    setIsAcsending((prevIsAscending) => {
      const newIsAscending = sortType === sortBy ? !prevIsAscending : true;

      const sortedItems = [...items].sort((a, b) =>
        newIsAscending
          ? a[sortType].localeCompare(b[sortType])
          : b[sortType].localeCompare(a[sortType]),
      );

      setItems(sortedItems);
      return newIsAscending;
    });
  };
  // ai generated code ends

  const handleToggleView = () => {
    setIsCategoryView((prevIsCategoryView) => !prevIsCategoryView);
  };

  return (
    <div className="flex h-full w-3/4 min-w-96 flex-col items-center justify-center gap-2">
      <div className="mb-4 flex w-full justify-between">
        <h2 className="text-4xl">Shopping List</h2>
        <button
          className="w-24 rounded-md border bg-gray-500 font-semibold hover:bg-gray-600 hover:text-white"
          onClick={() => onAddItem(true)}
        >
          Add
        </button>
      </div>
      <div className="flex w-full justify-start gap-4 text-white">
        <button
          onClick={handleToggleView}
          className={`rounded-md border px-2 py-1 text-sm ${isCategoryView ? "bg-lime-700 hover:bg-lime-800" : "bg-gray-500 hover:bg-gray-600"} `}
        >
          Grouped Category
        </button>
      </div>

      {!isCategoryView ? (
        <div className="w-full rounded-lg border border-gray-400 bg-gray-300 p-4 shadow-md">
          <TableHeader
            sortBy={sortBy}
            isAscending={isAcsending}
            onSort={handleSort}
          />
          {items.map((item, i) => (
            <Item
              key={item.id}
              {...item}
              bgColor={i % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}
            />
          ))}
        </div>
      ) : (
        <CategoryList items={items} />
      )}
    </div>
  );
}
