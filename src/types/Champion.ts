export type Champions = {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
};

export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  lore?: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
  partype: string;
  stats: { [key: string]: number };
};

export interface Image {
  full: string;
  sprite: Sprite;
  x: number;
  y: number;
  w: number;
  h: number;
}

export enum Sprite {
  Champion0PNG = 'champion0.png',
  Champion1PNG = 'champion1.png',
  Champion2PNG = 'champion2.png',
  Champion3PNG = 'champion3.png',
  Champion4PNG = 'champion4.png',
  Champion5PNG = 'champion5.png'
}

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export enum Tag {
  Assassin = 'Assassin',
  Fighter = 'Fighter',
  Mage = 'Mage',
  Marksman = 'Marksman',
  Support = 'Support',
  Tank = 'Tank'
}
