import ItemList from './item-list';

/**
 * Renders the week 3 page
 */
export default function Page() {
  return (
    <div className='w-screen min-h-screen p-2 flex flex-col gap-4 bg-slate-700'>
      <h1 className='text-slate-300 text-4xl'>Shopping List</h1>
      <ItemList />
    </div>);
}