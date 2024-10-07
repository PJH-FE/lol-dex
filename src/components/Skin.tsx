import { Skin } from '@/types/ChampionDetail';
import Image from 'next/image';

interface SkinProps {
  skin: Skin;
  championId: string;
  name: string;
}

const SkinCard: React.FC<SkinProps> = ({ skin, name, championId }) => {
  return (
    <>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skin.num}.jpg`}
        alt={skin.name}
        width={500}
        height={500}
        unoptimized
      />

      <div>{skin.name === 'default' ? name : skin.name}</div>
    </>
  );
};
export default SkinCard;
