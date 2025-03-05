import Item from "./Item";

interface CategoryListProps {
  items: { id: string; name: string; category: string; quantity: number }[];
}

export default function CategoryList({ items }: CategoryListProps) {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof items>,
  );

  return (
    <div className="flex w-full flex-col justify-start gap-4">
      {Object.entries(groupedItems) // Convert object to array of [key, value]
        .map(([category, items]) => (
          <div
            className="rounded-lg border border-gray-400 bg-gray-300 p-4 capitalize"
            key={category}
          >
            <h3 className="border-b-2 px-2 pb-2 pt-1 font-semibold">
              {category}
            </h3>
            {items.map((item, i) => (
              <Item key={item.id} {...item} bgColor="bg-gray-300" />
            ))}
          </div>
        ))}
    </div>
  );
}
