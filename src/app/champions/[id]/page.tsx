import { fetchChampionDetail } from '@/utils/serverApi';

const Champions = async ({ params }: { params: { id: string } }) => {
  const champion = await fetchChampionDetail(params.id);
  const championInfo = champion.data[params.id];

  return <div>{championInfo.name}</div>;
};
export default Champions;
