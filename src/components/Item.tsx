import { ItemProps } from '@/types/Item';
import Image from 'next/image';

const Item: React.FC<ItemProps> = ({ item, version }) => {
  return (
    <>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
        alt="Picture of the author"
        width={500}
        height={500}
        unoptimized
        className="w-40"
      />
      <div>{item.name}</div>
      <div>가격:{item.gold.total}</div>
      <div>판매:{item.gold.sell}</div>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </>
  );
};
export default Item;
