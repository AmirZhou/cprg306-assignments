import { SortAlphabaticIcon } from "@/components/Icons";

interface TableHeaderProps extends React.ComponentProps<"div"> {
  sortBy: "name" | "category" | "";
  isAscending: boolean;
  onSort: (sortType: "name" | "category") => void;
}

export default function TableHeader({
  sortBy,
  isAscending,
  onSort,
}: TableHeaderProps) {
  return (
    <div className="flex w-full border-b-2 px-2 pb-2 pt-1 font-semibold">
      <div className="w-1/3 pr-6">
        <button
          className="flex w-full justify-between"
          onClick={() => onSort("name")}
        >
          <span>Name</span>
          <SortAlphabaticIcon
            isAcsending={sortBy === "name" && isAscending}
            className={sortBy === "name" ? "text-blue-600" : "text-gray-400"}
          />
        </button>
      </div>
      <div className="flex w-1/3 justify-between pr-6">
        <button
          className="flex w-full justify-between"
          onClick={() => onSort("category")}
        >
          <span>Category</span>
          <SortAlphabaticIcon
            isAcsending={sortBy === "category" && isAscending}
            className={
              sortBy === "category" ? "text-blue-600" : "text-gray-400"
            }
          />
        </button>
      </div>
      <div className="w-1/3">Quantity</div>
    </div>
  );
}
