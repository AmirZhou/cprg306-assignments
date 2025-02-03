/**
 * Render a single item in the shop list
 *
 * @param string name - the name of the item
 * @param int quantity - the quantity of the item
 * @param string category - the category of the item
 * @example
 * <Item name="apple" quantity={3} category="fruit" />
 */
export default function Item({ name, quantity, category }) {
  return (
    <div className="w-72 p-4 rounded-md font-poppins text-slate-400  bg-slate-900 flex flex-col gap-2 hover:translate-x-1 transition-all duration-100">
      <h2 className="font-semibold capitalize">{name}</h2>
      <p>
        Buy{' '}
        <span className="italic font-semibold text-lime-500">{quantity}</span>{' '}
        in{' '}
        <span className="font-semibold text-stone-500 uppercase">
          {category}
        </span>
      </p>
    </div>
  );
}
