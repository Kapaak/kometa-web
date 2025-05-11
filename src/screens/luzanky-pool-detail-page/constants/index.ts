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
  skillLevelSection?: {
    data: {
      title: string;
      descriptions?: { label?: string; text: string }[];
    }[];
    actionButtonLabel?: string;
  };
  aboutSection?: {
    description?: string;
    lectureFocus?: string[];
  };
  initialLectureSection?: {
    requiredEquipment: {
      items: string[];
      description?: string;
    };
    arrivalTime: {
      descriptions: string[];
    };
    childHandoverProcess?: {
      descriptions: string[];
    };
  };
};

export const luzankyPoolDetailInformation: Record<string, PoolInformation> = {
  [SwimmingCategoryId.BASIC]: {
    heroSection: {
      description:
        'Tento kurz je určen pro děti, které teprve začínají s plaváním, nebo pro ty, které už ovládají základy, jako je potápění, kopání a bublání, ale potřebují se naučit správnou techniku plaveckých stylů, zejména znaku a kraula.',
      duration: 45,
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
    initialLectureSection: {
      requiredEquipment: {
        items: [
          'Plavky, ručník, plavecké brýle (bez zakrytí nosu)',
          'Plavecká čepice (není povinná, ale pomáhá udržet vlasy z očí)',
          'Volitelně můžete přibalit mýdlo a pantofle',
        ],
        description:
          'Doporučujeme vybírat plavky, které dobře přiléhají k tělu a neomezují pohyb. U dívek je vhodné vyhnout se volánkům, u chlapců pak dlouhým kraťasovým plavkám, které zvyšují odpor vody a mohou ztěžovat plavání.',
      },
      arrivalTime: {
        descriptions: [
          'Doporučujeme přijít 15 minut před začátkem lekce. Trenér bude čekat u turniketu poblíž pokladen a rozdá dětem čipy (modré) pro vstup do areálu bazénu. Příchod je možný nejpozději 5 minut před začátkem lekce, aby děti měly dostatek času na převlečení a přípravu. Pozdní příchody mohou narušit časový harmonogram lekce.',
          'Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ],
      },
      childHandoverProcess: {
        descriptions: [
          'Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
        ],
      },
    },
  },
  [SwimmingCategoryId.ADVANCED]: {
    heroSection: {
      description:
        'Tento kurz plavání je ideální pro děti, které již zvládly základní plavecké dovednosti a chtějí je dále rozvíjet.',
      duration: 45,
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
    initialLectureSection: {
      requiredEquipment: {
        items: [
          'Plavky, ručník, plavecké brýle (bez zakrytí nosu)',
          'Plavecká čepice (není povinná, ale pomáhá udržet vlasy z očí)',
          'Volitelně můžete přibalit mýdlo a pantofle',
        ],
        description:
          'Doporučujeme vybírat plavky, které dobře přiléhají k tělu a neomezují pohyb. U dívek je vhodné vyhnout se volánkům, u chlapců pak dlouhým kraťasovým plavkám, které zvyšují odpor vody a mohou ztěžovat plavání.',
      },
      arrivalTime: {
        descriptions: [
          'Doporučujeme přijít 15 minut před začátkem lekce. Trenér bude čekat u turniketu poblíž pokladen a rozdá dětem čipy (modré) pro vstup do areálu bazénu. Příchod je možný nejpozději 5 minut před začátkem lekce, aby děti měly dostatek času na převlečení a přípravu. Pozdní příchody mohou narušit časový harmonogram lekce.',
          'Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ],
      },
      childHandoverProcess: {
        descriptions: [
          'Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
        ],
      },
    },
  },
  [SwimmingCategoryId.CONDITION]: {
    heroSection: {
      description:
        'Tento kurz je určen pro děti, které již zvládají základní plavecké styly a chtějí se zaměřit na zlepšení své techniky a vytrvalosti.',
      duration: 45,
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
    initialLectureSection: {
      requiredEquipment: {
        items: [
          'Plavky, ručník, plavecké brýle (bez zakrytí nosu)',
          'Plavecká čepice (není povinná, ale pomáhá udržet vlasy z očí)',
          'Volitelně můžete přibalit mýdlo a pantofle',
        ],
        description:
          'Doporučujeme vybírat plavky, které dobře přiléhají k tělu a neomezují pohyb. U dívek je vhodné vyhnout se volánkům, u chlapců pak dlouhým kraťasovým plavkám, které zvyšují odpor vody a mohou ztěžovat plavání.',
      },
      arrivalTime: {
        descriptions: [
          'Doporučujeme přijít 15 minut před začátkem lekce. Trenér bude čekat u turniketu poblíž pokladen a rozdá dětem čipy (modré) pro vstup do areálu bazénu. Příchod je možný nejpozději 5 minut před začátkem lekce, aby děti měly dostatek času na převlečení a přípravu. Pozdní příchody mohou narušit časový harmonogram lekce.',
          'Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ],
      },
      childHandoverProcess: {
        descriptions: [
          'Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
        ],
      },
    },
  },
  [SwimmingCategoryId.ADULT]: {
    heroSection: {
      description:
        'Plavání i pro dospělé – zlepšíte si techniku, zapracujete na kondici a zrelaxujete ve vodě.',
      duration: 45,
      poolParameters: {
        poolLength: '25 m',
        depth: 'mezi 120 a 160 cm',
        waterTemperature: '27 °C',
      },
    },
    aboutSection: {
      description:
        'Kurzy plavání pro dospělé jsou navrženy tak, aby vám pomohly zlepšit vaši techniku, kondici a radost z pohybu ve vodě. Bez ohledu na to, jestli se chcete naučit základy nebo zdokonalit své plavecké dovednosti, jsme tu pro vás. Věříme, že plavání by mělo být zábavou, výzvou a cestou k celkovému zlepšení kondice.',
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
    initialLectureSection: {
      requiredEquipment: {
        items: [
          'Plavky',
          'Plavecké brýle',
          'Ručník',
          'Případně plaveckou čepici (není podmínkou)',
        ],
      },
      arrivalTime: {
        descriptions: [
          'Doporučujeme přijít 15 minut před začátkem lekce. Dospělí mají k dispozici plastové kartičky pro vstup do areálu, které vám umožní vstup 15 min před začátkem lekce.',
          'Po tréninku máte 30 minut na převlečení, takže si prosím hlídejte čas. Pokud odejdete později karta se zablokuje a za její odblokování je pokuta 50 Kč.',
          'Na ktartu se vybírá záloha 500 Kč před první lekcí kurzu, proto prosím na první lekci přijďte všas a s přesnou hotovostí na zálohu (500 Kč). Tato záloha vám bude vrácena při vrácení karty na poslední hodině kurzu.',
        ],
      },
    },
  },
  [SwimmingCategoryId.KINDERGARTEN]: {
    heroSection: {
      description:
        'Naše dopolední kurzy plavání jsou určené pro předškoláky a mladší školní děti. Jsou navržené tak, aby děti zvládly základy plavání přímo v rámci výuky – bez potřeby dalších odpoledních kurzů.',
      duration: 45,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
      description:
        'Díky propojení se školní docházkou šetříme rodičům čas i peníze, a zároveň zajišťujeme, že se děti učí plavat pod vedením zkušených profesionálů',
      lectureFocus: [
        'Hravou formou se seznamujeme s vodním prostředím.',
        'Děti se naučí základy plaveckých stylů, jako je znak a kraul.',
        'Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci.',
      ],
    },
  },
  [SwimmingCategoryId.SCHOOL]: {
    heroSection: {
      description:
        'Naše dopolední kurzy plavání jsou určené pro předškoláky a mladší školní děti. Jsou navržené tak, aby děti zvládly základy plavání přímo v rámci výuky – bez potřeby dalších odpoledních kurzů.',
      duration: 45,
      poolParameters: {
        poolLength: '16 m',
        depth: '90 cm',
        waterTemperature: '31 °C',
      },
    },
    aboutSection: {
      description:
        'Díky propojení se školní docházkou šetříme rodičům čas i peníze, a zároveň zajišťujeme, že se děti učí plavat pod vedením zkušených profesionálů',
      lectureFocus: [
        'Hravou formou se seznamujeme s vodním prostředím.',
        'Děti se naučí základy plaveckých stylů, jako je znak a kraul.',
        'Získávají důvěru ve své plavecké dovednosti a zlepšují koordinaci.',
      ],
    },
  },
};
