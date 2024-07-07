type ServicesData = {
  title: string;
  imageAlt: string;
  imageUrl: string;
  tags?: string[];
  url: string;
};

export const servicesData: ServicesData[] = [
  {
    title: 'Plavecké kurzy pro děti',
    imageAlt: 'Děti na plaveckém kurzu kometa',
    imageUrl: '/images/service/kid-swimming.png',
    url: '/kurzy-pro-deti',
  },
  {
    title: 'Závodní plavání',
    imageAlt: 'Plavec ve vodě s brýlemi',
    imageUrl: '/images/service/race-swimming.png',
    url: 'https://klubova-zona.kometaplavani.cz/tymy/zavodni-pripravka/',
  },
  {
    title: 'Vodní pólo',
    imageAlt: 'Dítě držící balón ve vodě na bazénu Kraví hora',
    imageUrl: '/images/service/waterpolo.png',
    url: 'https://klubova-zona.kometaplavani.cz/vodni-polo-o-nas/',
  },
  {
    title: 'Synchronizované plavání',
    imageAlt: 'Dvě dívky ve vodě na soutěži v synchronizovaném plavání',
    imageUrl: '/images/service/synchro.png',
    url: 'https://klubova-zona.kometaplavani.cz/synchro/synchronizovane-plavani/',
  },
  {
    title: 'Příměstské tábory',
    imageAlt: 'Skupina dětí na táboře kometa',
    imageUrl: '/images/service/camps.png',
    url: '/tabory',
  },
  {
    title: 'Plavecké kurzy pro dospělé',
    imageAlt: 'Dospělý mužna v bazénu na plaveckém kurzu',
    imageUrl: '/images/service/adult-swimming.jpg',
    url: 'https://www.plavani-luzanky.cz/',
  },
];
