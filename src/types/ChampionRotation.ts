export interface ChampionRotation {
  data: Data;
}

export interface Data {
  freeChampionIds: number[];
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
}
