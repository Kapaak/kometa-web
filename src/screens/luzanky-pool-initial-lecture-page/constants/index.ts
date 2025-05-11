import { SwimmingCategoryId } from '~/types';

type InitialLectureInformation = {};

export const initialLectureInformation: Record<
  string,
  InitialLectureInformation
> = {
  [SwimmingCategoryId.BASIC]: {
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
        ' Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ' Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
      ],
    },
  },
  [SwimmingCategoryId.ADVANCED]: {
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
        ' Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ' Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
      ],
    },
  },
  [SwimmingCategoryId.CONDITION]: {
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
        ' Děti mají k dispozici společné šatny, kde si je převezme trenér. Doprovod má nárok na doprovodný čip (černý), který je platný na 15 minut a slouží k pomoci s převlékáním nebo oblékáním dítěte.',
        ' Doprovod obdrží první čip při vstupu, který umožní vstup do areálu a následně se při odchodu vloží do turniketu pro opuštění bazénu. Po skončení lekce dostane doprovod druhý čip, opět na 15 minut, aby mohl dítě vyzvednout. Stejně jako u prvního čipu je nutné ho při odchodu vložit do turniketu stejně jako modrý čip dítěte. Černý čip nesmí být použit k uzamčení skříňky, jinak nebude možné opustit areál.',
      ],
    },
  },
  [SwimmingCategoryId.ADULT]: {},
  [SwimmingCategoryId.KINDERGARTEN]: {},
  [SwimmingCategoryId.SCHOOL]: {},
};
