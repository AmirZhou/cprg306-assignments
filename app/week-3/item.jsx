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
    <div>
      <h2 className="text-black">{name}</h2>
      <p>
        Buy <span>{quantity}</span> in <span>{category}</span>
      </p>
    </div>
  );
}
