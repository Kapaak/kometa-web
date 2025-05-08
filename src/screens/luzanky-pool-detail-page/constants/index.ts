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
      lectureFocus: [
        'Zdokonalování techniky plaveckých stylů (znak, kraul, prsa a základy motýla).',
        'Rozvíjíme výdrž, koordinaci a rychlost.',
        'Učíme děti správnou techniku obratek startů a závodních dovedností.',
        'Hravou formou motivujeme děti k překonávání vlastních hranic.',
      ],
    },
  },
  [SwimmingCategoryId.CONDITION]: {
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
      lectureFocus: [
        'Zdokonalování techniky plaveckých stylů (znak, kraul, prsa a základy motýla).',
        'Rozvíjíme výdrž, koordinaci a rychlost.',
        'Učíme děti správnou techniku obratek startů a závodních dovedností.',
        'Hravou formou motivujeme děti k překonávání vlastních hranic.',
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
      lectureFocus: [
        'Základy plaveckých stylu: kraul, znak prsa a motýlek.',
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
        //TODO: tohle zmenit - musi byt jinej popis
        'Tento kurz je určen pro děti, které teprve začínají s plaváním, nebo pro ty, které už ovládají základy, jako je potápění, kopání a bublání, ale potřebují se naučit správnou techniku plaveckých stylů, zejména znaku a kraula.',
      duration: 55,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
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
        //TODO: tohle zmenit - musi byt jinej popis
        'Tento kurz je určen pro děti, které teprve začínají s plaváním, nebo pro ty, které už ovládají základy, jako je potápění, kopání a bublání, ale potřebují se naučit správnou techniku plaveckých stylů, zejména znaku a kraula.',
      duration: 55,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
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
