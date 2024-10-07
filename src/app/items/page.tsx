import Item from '@/components/Item';
import { fetchItemList } from '@/utils/serverApi';

const Items = async () => {
  const itemsData = await fetchItemList();
  const itemList = Object.values(itemsData.data);
  const version = itemsData.version;

  return (
    <>
      <div>Items</div>

      <div className="flex gap-6 flex-wrap">
        {itemList.map((item) => {
          return <Item key={item.name} item={item} version={version} />;
        })}
      </div>
    </>
  );
};
export default Items;
