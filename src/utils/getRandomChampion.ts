import { fetchChampionList } from './serverApi';

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const getRandomChampionData = async () => {
  const fetchChampions = await fetchChampionList();
  const champions = Object.values(fetchChampions.data.data);

  const randomChampionKey = getRandomInt(champions.length - 1);
  const randomChampion = champions[randomChampionKey];

  return randomChampion;
};
