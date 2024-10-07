import SkinSwiper from '@/components/SkinSwiper';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};
export function generateMetadata({ params }: Props) {
  return {
    title: params.id,
    description: `Detail 페이지 : ${params.id}`
  };
}

const Champions = async ({ params }: { params: { id: string } }) => {
  const champion = await fetchChampionDetail(params.id);
  const championInfo = champion.data[params.id];

  return (
    <div className="px-4 md:px-0">
      <div className="bg fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0 ">
        <span className="dimmed absolute w-full h-full bg-[rgba(0,0,0,0.6)]"></span>
        <Image
          className="min-w-full min-h-full object-cover"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`}
          alt={championInfo.id}
          width={500}
          height={500}
        />
      </div>

      <div className="relative z-10 ">
        <div className="inner flex flex-col gap-6 md:flex-row items-start py-6">
          <picture className="w-full md:w-1/3 flex-shrink-0 h-full object-cover group-hover:scale-105 duration-300">
            <source
              media="(min-width: 768px)"
              srcSet={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championInfo.id}_0.jpg`}
            />
            <img
              className="min-w-full min-h-full object-cover"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`}
              alt={championInfo.name}
            />
          </picture>

          <div className="info flex flex-col gap-3 w-full md:w-2/3 md:py-6">
            <div className="flex flex-col md:flex-row items-center gap-3 text-2xl font-bold">
              {championInfo.name} <span className="text-lg font-bold">{championInfo.title}</span>
            </div>

            <div className="text-lg">{championInfo.lore}</div>

            <ul className="skills flex gap-4 items-start max-w-80">
              <li className="skill group relative w-1/5">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/passive/${championInfo.passive.image.full}`}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className="rounded-md"
                />
                <span className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-white text-black">
                  P
                </span>
                <div className="absolute z-20 hidden group-hover:flex flex-col gap-3 bg-[rgba(255,255,255,0.8)] min-w-60 p-4 text-black rounded-xl">
                  <h4 className="font-bold text-xl">{championInfo.passive.name}</h4>
                  <div dangerouslySetInnerHTML={{ __html: championInfo.passive.description }} />
                </div>
              </li>

              {championInfo.spells.map((spell, idx) => {
                const command = () => {
                  switch (idx) {
                    case 0:
                      return { id: 'Q', color: '#0093ff' };
                    case 1:
                      return { id: 'W', color: '#00D7B0' };
                    case 2:
                      return { id: 'E', color: '#FF8200' };
                    case 3:
                      return { id: 'R', color: '#FFFFFF' };
                    default:
                      break;
                  }
                };

                type commandType = {
                  id: string;
                  color: string;
                };

                const commandKey: commandType = command() || { id: '', color: '' };

                return (
                  <li key={spell.id} className="skill group relative w-1/5 rounded">
                    <Image
                      src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/spell/${spell.image.full}`}
                      alt={spell.name}
                      width={500}
                      height={500}
                      className="rounded-md"
                    />
                    <span
                      className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-[#202d37]"
                      style={{ color: commandKey.color }}>
                      {commandKey.id}
                    </span>
                    <div className="absolute z-20 hidden group-hover:flex flex-col gap-3 bg-[rgba(255,255,255,0.8)] min-w-60 p-4 text-black rounded-xl">
                      <h4 className="font-bold text-xl">{spell.name}</h4>
                      <div dangerouslySetInnerHTML={{ __html: spell.description }} />
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="skins mt-6">
              <h3 className="font-bold text-xl mb-4">Skins</h3>

              <SkinSwiper championInfo={championInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Champions;
