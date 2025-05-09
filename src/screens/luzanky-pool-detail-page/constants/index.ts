import { SwimmingCategoryId } from '~/types';

type PoolInformation = {
  heroSection: {
    description?: string;
    duration?: number;
    poolParameters: {
      poolLength: string;
      depth?: string;
      waterTemperature: string;
    };
  };
  skillLevelSection: {
    data: {
      title: string;
      descriptions?: { label?: string; text: string }[];
    }[];
    actionButtonLabel?: string;
  };
  aboutSection?: {
    description: string;
    lectureFocus: string[];
  };
};

export const luzankyPoolDetailInformation: Record<string, PoolInformation> = {
  [SwimmingCategoryId.BASIC]: {
    heroSection: {
      description:
        'Tento kurz je určen pro děti, které teprve začínají s plaváním, nebo pro ty, které už ovládají základy, jako je potápění, kopání a bublání, ale potřebují se naučit správnou techniku plaveckých stylů, zejména znaku a kraula.',
      duration: 55,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
      description:
        'Od prvních temp u rybiček až po závodní družstvo se snažíme vytvářet prostředí, kde děti nejen zdokonalují své plavecké dovednosti, ale zároveň si užívají cestu k vlastním cílům a mají z plavání radost. V našem klubu mohou zůstat po celý život – ať už se rozhodnou pro dráhu závodního plavce, nebo si plavání ponechají jako sport, který jim přináší pohyb a radost z vody.',
      lectureFocus: [
        'Hravou formou se seznamujeme s vodním prostředím.',
        'Děti se naučí základy plaveckých stylů, jako je znak a kraul.',
        'Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci.',
      ],
    },
    skillLevelSection: {
      data: [
        {
          title: 'Rozdělení do skupin',
          descriptions: [
            {
              label: 'Rybička',
              text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání.',
            },
            {
              label: 'Delfínek',
              text: 'Pro děti, které už zvládají potápění, kopání a bublání. Zaměřujeme se na výuku základů plaveckých stylů, zejména znaku a kraula, s cílem zlepšit techniku a koordinaci.',
            },
          ],
        },
      ],
    },
  },
  [SwimmingCategoryId.ADVANCED]: {
    heroSection: {
      description:
        'Tento kurz plavání je ideální pro děti, které již zvládly základní plavecké dovednosti a chtějí je dále rozvíjet.',
      duration: 55,
      poolParameters: {
        poolLength: '25 m',
        depth: 'mezi 120 a 160 cm',
        waterTemperature: '27 °C',
      },
    },
    skillLevelSection: {
      data: [
        {
          title: 'Co když dítě je dovednostmi na pomezí',
          descriptions: [
            {
              text: 'Pokud dítě není zcela připravené na tuto úroveň, ale již má některé dovednosti, doporučujeme přihlásit ho na termín, kde probíhají jak kurzy základního, tak zdokonalovacího plavání. Díky tomu bude moci dítě střídat malý a velký bazén podle potřeby, což mu pomáhá adaptovat se na nové prostředí vlastním tempem.',
            },
          ],
        },
      ],
    },
    aboutSection: {
      description:
        'Od prvních temp u rybiček až po závodní družstvo se snažíme vytvářet prostředí, kde děti nejen zdokonalují své plavecké dovednosti, ale zároveň si užívají cestu k vlastním cílům a mají z plavání radost. V našem klubu mohou zůstat po celý život – ať už se rozhodnou pro dráhu závodního plavce, nebo si plavání ponechají jako sport, který jim přináší pohyb a radost z vody.',
      lectureFocus: [
        'Zdokonalování techniky plaveckých stylů (znak, kraul, prsa a základy motýla).',
        'Rozvíjíme výdrž, koodrinaci a rychlosti.',
        'Učíme děti správnou techniku obrátek startů a závodních dovedností.',
        'Hravou formou motivujeme děti k překonávání vlastních hranic.',
      ],
    },
  },
  [SwimmingCategoryId.CONDITION]: {
    heroSection: {
      description:
        'Tento kurz je určen pro děti, které již zvládají základní plavecké styly a chtějí se zaměřit na zlepšení své techniky a vytrvalosti.',
      duration: 55,
      poolParameters: {
        poolLength: '25 m',
        depth: 'mezi 120 a 160 cm',
        waterTemperature: '27 °C',
      },
    },
    skillLevelSection: {
      data: [
        {
          title: 'Co když dítě je dovednostmi na pomezí',
          descriptions: [
            {
              text: 'Pokud dítě není zcela připravené na tuto úroveň, ale již má některé dovednosti, doporučujeme přihlásit ho na termín, kde probíhají jak kurzy základního, tak zdokonalovacího plavání. Díky tomu bude moci dítě střídat malý a velký bazén podle potřeby, což mu pomáhá adaptovat se na nové prostředí vlastním tempem.',
            },
          ],
        },
      ],
    },
    aboutSection: {
      description:
        'Od prvních temp u rybiček až po závodní družstvo se snažíme vytvářet prostředí, kde děti nejen zdokonalují své plavecké dovednosti, ale zároveň si užívají cestu k vlastním cílům a mají z plavání radost. V našem klubu mohou zůstat po celý život – ať už se rozhodnou pro dráhu závodního plavce, nebo si plavání ponechají jako sport, který jim přináší pohyb a radost z vody.',
      lectureFocus: [
        'Zlepšení techniky všech čtyř plaveckých stylů.',
        'Zvládnutí startovních skoků a obrátek.',
        'Rozvoj fyzické kondice a koordinace.',
        'Podpora sebedůvěry a radosti z pohybu.',
      ],
    },
  },
  [SwimmingCategoryId.ADULT]: {
    heroSection: {
      description:
        'Tento kurz je určen pro děti, které teprve začínají s plaváním, nebo pro ty, které už ovládají základy, jako je potápění, kopání a bublání, ale potřebují se naučit správnou techniku plaveckých stylů, zejména znaku a kraula.',
      duration: 55,
      poolParameters: {
        poolLength: '25 m',
        depth: 'mezi 120 a 160 cm',
        waterTemperature: '27 °C',
      },
    },
    aboutSection: {
      description:
        'Kurzy plavání pro dospělé jsou navrženy tak, aby vám pomohly zlepšit vaši techniku, kondici a radost z pohybu ve vodě. Bez ohledu na to, jestli se chcete naučit základy nebo zdokonalit své plavecké dovednosti, jsme tu pro vás. Věříme, že plavání by mělo být zábavou, výzvou a cestou k celkovému zlepšení kondice.',
      lectureFocus: [
        'Základy plaveckých stylů: kraul, znak, prsa a motýlek.',
        'Šipky a obrátky.',
        'Jak zlepšit techniku plavání a efektivitu pohybu ve vodě.',
        'Jak zlepšit svou fyzickou kondici a vytrvalost.',
      ],
    },
    skillLevelSection: {
      data: [
        //TODO: potrebuju doplnit
        // {
        //   title: 'Rozdělení do skupin',
        //   descriptions: [
        //     {
        //       label: 'Rybička',
        //       text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání.',
        //     },
        //     {
        //       label: 'Delfínek',
        //       text: 'Pro děti, které už zvládají potápění, kopání a bublání. Zaměřujeme se na výuku základů plaveckých stylů, zejména znaku a kraula, s cílem zlepšit techniku a koordinaci.',
        //     },
        //   ],
        // },
      ],
    },
  },
  [SwimmingCategoryId.KINDERGARTEN]: {
    heroSection: {
      description:
        'Naše dopolední kurzy plavání jsou určené pro předškoláky a mladší školní děti. Jsou navržené tak, aby děti zvládly základy plavání přímo v rámci výuky – bez potřeby dalších odpoledních kurzů. Díky propojení se školní docházkou šetříme rodičům čas i peníze, a zároveň zajišťujeme, že se děti učí plavat pod vedením zkušených profesionálů.',
      duration: 55,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
      description: '', //TODO: doplnit
      lectureFocus: [
        'Hravou formou se seznamujeme s vodním prostředím.',
        'Děti se naučí základy plaveckých stylů, jako je znak a kraul.',
        'Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci.',
      ],
    },
    skillLevelSection: {
      data: [
        //TODO: potrebuju doplnit
        // {
        //   title: 'Rozdělení do skupin',
        //   descriptions: [
        //     {
        //       label: 'Rybička',
        //       text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání.',
        //     },
        //     {
        //       label: 'Delfínek',
        //       text: 'Pro děti, které už zvládají potápění, kopání a bublání. Zaměřujeme se na výuku základů plaveckých stylů, zejména znaku a kraula, s cílem zlepšit techniku a koordinaci.',
        //     },
        //   ],
        // },
      ],
    },
  },
  [SwimmingCategoryId.SCHOOL]: {
    heroSection: {
      description:
        'Naše dopolední kurzy plavání jsou určené pro předškoláky a mladší školní děti. Jsou navržené tak, aby děti zvládly základy plavání přímo v rámci výuky – bez potřeby dalších odpoledních kurzů. Díky propojení se školní docházkou šetříme rodičům čas i peníze, a zároveň zajišťujeme, že se děti učí plavat pod vedením zkušených profesionálů.',
      duration: 55,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
      description: '', //TODO: doplnit
      lectureFocus: [
        'Hravou formou se seznamujeme s vodním prostředím.',
        'Děti se naučí základy plaveckých stylů, jako je znak a kraul.',
        'Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci.',
      ],
    },
    skillLevelSection: {
      data: [
        //TODO: potrebuju doplnit
        // {
        //   title: 'Rozdělení do skupin',
        //   descriptions: [
        //     {
        //       label: 'Rybička',
        //       text: 'Tento level je určen pro děti, které se teprve seznamují s vodou. Hravé cvičení s pomůckami pomáhá dětem zvládnout základní dovednosti, jako je foukání do vody, potápění a první kopání.',
        //     },
        //     {
        //       label: 'Delfínek',
        //       text: 'Pro děti, které už zvládají potápění, kopání a bublání. Zaměřujeme se na výuku základů plaveckých stylů, zejména znaku a kraula, s cílem zlepšit techniku a koordinaci.',
        //     },
        //   ],
        // },
      ],
    },
  },
};
