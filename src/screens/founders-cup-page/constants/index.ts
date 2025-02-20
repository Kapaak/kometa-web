type ContestTimeTable = {
  id: number;
  title: string;
  group: string;
};

export const CONTEST_TIME_TABLE_PART1: ContestTimeTable[] = [
  { id: 1, title: '50 m volný způsob', group: 'žačky C' },
  { id: 2, title: '50 m volný způsob', group: 'žáci C' },
  { id: 3, title: '200 m polohový závod', group: 'žačky B' },
  { id: 4, title: '200 m polohový závod', group: 'žáci B' },
  { id: 5, title: '50 m prsa', group: 'žačky C' },
  { id: 6, title: '50 m prsa', group: 'žáci C' },
  { id: 7, title: '100 m znak', group: 'žačky A' },
  { id: 8, title: '100 m znak', group: 'žáci A' },
  { id: 9, title: '100 m motýlek', group: 'žačky B' },
  { id: 10, title: '100 m motýlek', group: 'žáci B' },
  { id: 11, title: '50 m znak', group: 'žačky C' },
  { id: 12, title: '50 m znak', group: 'žáci C' },
  { id: 13, title: '100 m prsa', group: 'žačky A' },
  { id: 14, title: '100 m prsa', group: 'žáci A' },
  { id: 15, title: '100 m znak', group: 'žačky B' },
  { id: 16, title: '100 m znak', group: 'žáci B' },
];

export const CONTEST_TIME_TABLE_PART2: ContestTimeTable[] = [
  { id: 17, title: '50 m motýlek', group: 'žačky C' },
  { id: 18, title: '50 m motýlek', group: 'žáci C' },
  { id: 19, title: '100 m volný způsob', group: 'žačky A' },
  { id: 20, title: '100 m volný způsob', group: 'žáci A' },
  { id: 21, title: '100 m prsa', group: 'žačky B' },
  { id: 22, title: '100 m prsa', group: 'žáci B' },
  { id: 23, title: '100 m polohový závod', group: 'žačky C' },
  { id: 24, title: '100 m polohový závod', group: 'žáci C' },
  { id: 25, title: '100 m motýlek', group: 'žačky A' },
  { id: 26, title: '100 m motýlek', group: 'žáci A' },
  { id: 27, title: '100 m volný způsob', group: 'žačky B' },
  { id: 28, title: '100 m volný způsob', group: 'žáci B' },
  { id: 29, title: '200 m polohový závod', group: 'žačky A' },
  { id: 30, title: '200 m polohový závod', group: 'žáci A' },
];

type CupResultHistoryImage = {
  src: string;
  name: string;
  aspectRatio: string;
  value: string;
};

export const CUP_RESULT_HISTORY_IMAGES: CupResultHistoryImage[] = [
  {
    src: '/images/cups/pohar-jiriho-gazarka.jpg',
    name: 'Pohár Jířího GAZÁRKA',
    aspectRatio: '2225/2293',
    value: 'pohar-gazarek',
  },
  {
    src: '/images/cups/pohar-otakara-vlacika.jpg',
    name: 'Pohár JUDr. Otakara VLÁČILÍKA',
    aspectRatio: '1080/2309',
    value: 'pohar-vlacilik',
  },
  {
    src: '/images/cups/pohar-frantiska-majdy.jpg',
    name: 'Pohár Prof. Františka MAJDY',
    aspectRatio: '1080/2351',
    value: 'pohar-majda',
  },
  {
    src: '/images/cups/pohar-vognarku.jpg',
    name: 'Pohár bratří VOGNÁRKŮ',
    aspectRatio: '135/187',
    value: 'pohar-vognarek',
  },
  {
    src: '/images/cups/pohar-antonina-novotneho.jpg',
    name: 'Stříbrný věnec prim. MUDr. Antonína NOVOTNÉHO',
    aspectRatio: '2224/5359',
    value: 'pohar-novotny',
  },
  {
    src: '/images/cups/pohar-karla-hnatka.jpg',
    name: 'Pohár Karla HNÁTKA',
    aspectRatio: '1080/2287',
    value: 'pohar-hnatek',
  },
];
