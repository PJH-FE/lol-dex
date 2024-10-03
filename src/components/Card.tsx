import { ChampionProps } from '@/types/ChampionDetail';
import Image from 'next/image';
import Link from 'next/link';

const Card: React.FC<ChampionProps> = ({ champion }) => {
  return (
    <Link href={`/champions/${champion.id}`} className="w-40">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
        alt="Picture of the author"
        width={500}
        height={500}
        unoptimized
      />
    </Link>
  );
};
export default Card;
