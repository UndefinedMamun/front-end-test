export interface Item {
  image: string,
  title: string,
  description: string
}

function ListItem(item: Item) {
  return (
    <div className="flex gap-5 w-full bg-gray-200 rounded-lg p-4 shadow-lg">
      <div className="w-[150px] bg-gray-300">
        <img className='w-full h-full rounded-lg' src={item.image} alt={item.title} />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h4 className="font-bold text-lg">{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default ListItem;