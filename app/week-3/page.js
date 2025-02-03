import ItemList from './item-list';

export default function Page() {
  return (
    <div className='w-screen min-h-screen p-2 flex flex-col gap-4 bg-slate-700'>
      <h1 className='font-poppins font-bold text-slate-300 text-4xl'>Shopping List</h1>
      <ItemList />
    </div>);
}