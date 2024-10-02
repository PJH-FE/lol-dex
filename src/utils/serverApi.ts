'use server';

import { Champions } from '@/types/Champion';

export async function fetchLatestVersion() {
  const versions = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
  const version: string[] = await versions.json();

  return version;
}

export async function fetchChampionList() {
  const version = await fetchLatestVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion.json`);
  const data: Champions = await res.json();

  return {
    data,
    revalidate: 86400 // 1초 후에 페이지 재생성
  };
}

export async function fetchChampionDetail(id: string) {
  const version = await fetchLatestVersion();

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version[0]}/data/ko_KR/champion/${id}.json`);
  const data: Champions = await res.json();

  return data;
}
