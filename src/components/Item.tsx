import { ItemProps } from '@/types/Item';
import Image from 'next/image';

const Item: React.FC<ItemProps> = ({ item, version }) => {
  return (
    <div className="w-[calc(25%-18px)] md:w-[calc(10%-21.6px)]">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
        alt="Picture of the author"
        width={500}
        height={500}
        unoptimized
        className="w-40"
      />

      <div dangerouslySetInnerHTML={{ __html: item.name }} />
      <div>가격:{item.gold.total}</div>
      <div>판매:{item.gold.sell}</div>
    </div>
  );
};
export default Item;
