import { CookieConsentType } from '~/types';

type CookieSettingsData = {
  title: string;
  description: string;
  name: CookieConsentType;
};

//https://support.google.com/tagmanager/answer/13802165?hl=en
export const cookieSettingsData: CookieSettingsData[] = [
  {
    title: 'Statistika',
    description:
      'Pomáhají nám sledovat, jak návštěvníci používají webové stránky, což nám umožňuje zlepšovat jejich výkon a uživatelský zážitek.',
    name: CookieConsentType.ANALYTICS_STORAGE,
  },
  {
    title: 'Marketing',
    description:
      'Tyto soubory cookie shromažďují informace o vašich aktivitách na webu, aby mohly zobrazovat relevantní reklamy a optimalizovat marketingové kampaně.',
    name: CookieConsentType.AD_STORAGE,
  },
  {
    title: 'Personalizace',
    description:
      'Tyto cookies ukládají informace o vašich preferencích, což umožňuje personalizaci obsahu, například výběr jazyka nebo regionu.',
    name: CookieConsentType.AD_PERSONALIZATION,
  },
  {
    title: 'Uchování dat',
    description:
      'Umožňují sdílení obsahu na sociálních sítích a sledování interakcí s našimi příspěvky na těchto platformách.',
    name: CookieConsentType.AD_USER_DATA,
  },
];
