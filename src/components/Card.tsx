import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionProps = {
  champion: Champion;
};

const Card: React.FC<ChampionProps> = ({ champion }) => {
  return (
    <Link href={`/champions/${champion.id}`} className="w-[calc(25%-18px)] md:w-[calc((100%/7)-(144px/7))]">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={500}
        height={500}
        unoptimized
      />
    </Link>
  );
};
export default Card;
