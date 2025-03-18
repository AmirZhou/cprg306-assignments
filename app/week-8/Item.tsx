interface ItemProps extends React.ComponentProps<"div"> {
  id: string;
  name: string;
  quantity: number;
  category: string;
  bgColor: string;
}

export default function Item({ ...props }: ItemProps) {
  return (
    <div
      onClick={props.onClick}
      className={`flex w-full px-2 py-1 ${props.bgColor} cursor-pointer hover:bg-gray-700 hover:text-white`}
    >
      <div className="flex-1">{props.name}</div>
      <div className="flex-1">{props.category.toUpperCase()}</div>
      <div className="flex-1 text-purple-800">{props.quantity}</div>
    </div>
  );
}
