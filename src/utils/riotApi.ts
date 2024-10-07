import { Champion } from '@/types/Champion';
import { fetchChampionList } from './serverApi';

export const getChampionRotation = async () => {
  const { data } = await fetchChampionList();
  const champions = data.data;

  const response = await fetch('/api/rotation');
  const result = await response.json();
  const rotationIds = result.data.freeChampionIds;

  const rotation: Champion[] = Object.values(champions).filter((champion) =>
    rotationIds?.includes(Number(champion.key))
  );

  return rotation;
};
