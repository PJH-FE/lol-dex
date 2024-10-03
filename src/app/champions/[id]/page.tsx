import SkinCard from '@/components/Skin';
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

  console.log(championInfo);

  return (
    <>
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
        <div className="inner flex items-start">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championInfo.id}_0.jpg`}
            alt={championInfo.id}
            width={500}
            height={500}
            unoptimized
          />
          <div className="info">
            <div>{championInfo.name}</div>

            <div>{championInfo.title}</div>
            <div>{championInfo.lore}</div>
            <ul className="skills flex gap-4 items-start max-w-80">
              <li className="skill group relative w-1/5">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/passive/${championInfo.passive.image.full}`}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  unoptimized
                />
                <span className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-white rounded-md text-black">
                  P
                </span>
                <div className="absolute hidden group-hover:block">
                  {championInfo.passive.name}
                  <div dangerouslySetInnerHTML={{ __html: championInfo.passive.description }} />
                </div>
              </li>

              {championInfo.spells.map((spell) => {
                return (
                  <li key={spell.id} className="skill group relative w-1/5">
                    <Image
                      src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/spell/${spell.image.full}`}
                      alt={spell.name}
                      width={500}
                      height={500}
                      unoptimized
                    />
                    <span className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 bg-white rounded-md text-black">
                      {spell.id.slice(-1)}
                    </span>
                    <div className="absolute hidden group-hover:block">
                      {spell.name}
                      <div dangerouslySetInnerHTML={{ __html: spell.description }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="skins">
          <h3>Skins</h3>

          <div className="flex flex-wrap">
            {championInfo.skins.map((skin) => {
              return <SkinCard key={skin.id} skin={skin} name={championInfo.name} championId={championInfo.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Champions;
