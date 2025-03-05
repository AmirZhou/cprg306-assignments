interface ItemProps extends React.ComponentProps<"div"> {
  id: string;
  name: string;
  quantity: number;
  category: string;
  bgColor: string;
}

export default function Item({ ...props }: ItemProps) {
  return (
    <div className={`flex w-full px-2 py-1 ${props.bgColor}`}>
      <div className="w-1/3">{props.name}</div>
      <div className="w-1/3">{props.category.toUpperCase()}</div>
      <div className="w-1/3 text-purple-800">{props.quantity}</div>
    </div>
  );
}
