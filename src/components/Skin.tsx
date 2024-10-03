import { Skin } from '@/types/ChampionDetail';
import Image from 'next/image';

interface SkinProps {
  skin: Skin;
  championId: string;
}

const SkinCard: React.FC<SkinProps> = ({ skin, championId }) => {
  return (
    <div className="w-1/5">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skin.num}.jpg`}
        alt="Picture of the author"
        width={500}
        height={500}
        unoptimized
      />
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
        alt="Picture of the author"
        width={500}
        height={500}
        unoptimized
      />
      <div>{skin.name}</div>
    </div>
  );
};
export default SkinCard;
