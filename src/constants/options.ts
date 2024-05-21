import { DayInWeek, Gender } from '~/types';

export const childrenGenderOptions = [
  {
    label: 'Kluk',
    value: Gender.MALE,
  },
  {
    label: 'Holka',
    value: Gender.FEMALE,
  },
];

export const dayOptions = [
  {
    label: 'Pondělí',
    value: String(DayInWeek.MONDAY),
  },
  {
    label: 'Úterý',
    value: String(DayInWeek.TUESDAY),
  },
  {
    label: 'Středa',
    value: String(DayInWeek.WEDNESDAY),
  },
  {
    label: 'Čtvrtek',
    value: String(DayInWeek.THURSDAY),
  },
  {
    label: 'Pátek',
    value: String(DayInWeek.FRIDAY),
  },
];

export const placeOptions = [
  {
    label: 'Lužánky',
    value: 'luzanky',
  },
  {
    label: 'Kraví hora',
    value: 'kravi-hora',
  },
  {
    label: 'Kohoutovice',
    value: 'kohoutovice',
  },
];

export const ageOptions = [
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '9',
    value: '9',
  },
  {
    label: '10',
    value: '10',
  },
  {
    label: '11',
    value: '11',
  },
  {
    label: '12',
    value: '12',
  },
  {
    label: '13',
    value: '13',
  },
  {
    label: '14',
    value: '14',
  },
  {
    label: '15',
    value: '15',
  },
];

export const timeOptions = [
  {
    label: '15:00',
    value: '15',
  },
  {
    label: '16:00',
    value: '16',
  },
  {
    label: '17:00',
    value: '17',
  },
  {
    label: '18:00',
    value: '18',
  },
];

export const skillLevelOptions = [
  {
    label: 'Plavec',
    value: 'advanced',
  },
  {
    label: 'Neplavec',
    value: 'beginner',
  },
];
