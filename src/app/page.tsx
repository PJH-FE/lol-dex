import { getRandomChampionData, getRandomInt } from '@/utils/getRandomChampion';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';
import Link from 'next/link';
import itemBg from '@/assets/main_item.jpg';

export default async function Home() {
  const champ_a = await getRandomChampionData();
  const champ_b = await getRandomChampionData();

  const champion = await fetchChampionDetail(champ_a.id);
  const randomSkin = getRandomInt(champion.data[champ_a.id].skins.length - 1);
  const randomSkinNum = champion.data[champ_a.id].skins[randomSkin].num;

  return (
    <div className="flex flex-col md:flex-row md:min-h-[calc(100vh-80px)]">
      <Link
        className="relative flex items-center justify-center group w-full md:w-1/3 overflow-hidden"
        href={'/champions'}>
        <picture className="w-full h-full object-cover scale-105 group-hover:scale-110 duration-300">
          <source
            media="(min-width: 768px)"
            srcSet={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ_a.id}_${randomSkinNum}.jpg`}
          />
          <img
            className="min-w-full min-h-full object-cover"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ_a.id}_${randomSkinNum}.jpg`}
            alt={champ_a.name}
          />
        </picture>

        <span className="absolute w-full h-full flex items-center justify-center  text-3xl bg-[rgba(0,0,0,0.7)] backdrop-blur-sm group-hover:backdrop-blur-0 duration-300">
          Champions
        </span>
      </Link>
      <Link className="relative flex items-center justify-center group w-full md:w-1/3 overflow-hidden" href={'/items'}>
        <Image
          src={itemBg}
          alt="아이템 배경"
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />

        <span className="absolute w-full h-full flex items-center justify-center text-3xl bg-[rgba(0,0,0,0.7)] backdrop-blur-sm group-hover:backdrop-blur-0 duration-300">
          Items
        </span>
      </Link>
      <Link
        className="relative flex items-center justify-center group w-full md:w-1/3 overflow-hidden"
        href={'/rotation'}>
        <picture className="w-full h-full object-cover scale-105 group-hover:scale-110 duration-300">
          <source
            media="(min-width: 768px)"
            srcSet={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ_b.id}_0.jpg`}
          />
          <img
            className="min-w-full min-h-full object-cover"
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ_b.id}_0.jpg`}
            alt={champ_b.name}
          />
        </picture>
        <span className="absolute w-full h-full flex items-center  justify-center  text-3xl bg-[rgba(0,0,0,0.7)] backdrop-blur-sm group-hover:backdrop-blur-0 duration-300">
          Rotation
        </span>
      </Link>
    </div>
  );
}
