'use server';

import { Champions } from '@/types/Champion';
import { DetailData } from '@/types/ChampionDetail';
import { ItemList } from '@/types/Item';

// 버전
export async function fetchLatestVersion() {
  const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const version: string[] = await versions.json();

  return version;
}

// 챔피언 목록
export async function fetchChampionList() {
  const version = await fetchLatestVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`);
  const data: Champions = await res.json();

  return {
    data,
    revalidate: 86400 // 1초 후에 페이지 재생성
  };
}

// 챔피언 상세정보
export async function fetchChampionDetail(id: string) {
  const version = await fetchLatestVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`);
  const data: DetailData = await res.json();

  return data;
}

// 아이템 목록
export async function fetchItemList() {
  const version = await fetchLatestVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/item.json`);
  const data: ItemList = await res.json();

  return data;
}
