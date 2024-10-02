import Card from '@/components/Card';
import { fetchChampionList } from '@/utils/serverApi';

const Champions = async () => {
  const fetchChampions = await fetchChampionList();
  const champions = Object.values(fetchChampions.data.data);

  return (
    <>
      <div>Champion</div>

      <div className="flex gap-6 flex-wrap">
        {champions.map((champion) => {
          return <Card key={champion.key} champion={champion} />;
        })}
      </div>
    </>
  );
};
export default Champions;
