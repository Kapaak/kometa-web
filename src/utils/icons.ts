import {
  Archive,
  Backpack,
  Boot,
  CalendarCheck,
  Carrot,
  Checks,
  ClipboardText,
  Coin,
  CreditCard,
  EnvelopeOpen,
  File,
  FirstAid,
  Goggles,
  HandCoins,
  HouseLine,
  Lifebuoy,
  MapPin,
  Money,
  Paperclip,
  Shuffle,
  Smiley,
  SmileyXEyes,
  Swap,
  SwimmingPool,
  TreePalm,
} from '@phosphor-icons/react/dist/ssr';

export type AvailableIcons =
  | 'ClipboardText'
  | 'Coin'
  | 'Swap'
  | 'Checks'
  | 'CreditCard'
  | 'Money'
  | 'HandCoins'
  | 'TreePalm'
  | 'Backpack'
  | 'FirstAid'
  | 'Shuffle'
  | 'File'
  | 'Paperclip'
  | 'EnvelopeOpen'
  | 'SmileyXEyes'
  | 'Smiley'
  | 'MapPin'
  | 'HouseLine'
  | 'Boot'
  | 'CalendarCheck'
  | 'Archive'
  | 'SwimmingPool'
  | 'Goggles'
  | 'Lifebuoy'
  | 'Carrot';

export const getAvailableIconByName = (iconName?: AvailableIcons) => {
  switch (iconName) {
    case 'ClipboardText':
      return ClipboardText;
    case 'Coin':
      return Coin;
    case 'Swap':
      return Swap;
    case 'Checks':
      return Checks;
    case 'CreditCard':
      return CreditCard;
    case 'Money':
      return Money;
    case 'HandCoins':
      return HandCoins;
    case 'TreePalm':
      return TreePalm;
    case 'Backpack':
      return Backpack;
    case 'FirstAid':
      return FirstAid;
    case 'Shuffle':
      return Shuffle;
    case 'File':
      return File;
    case 'Paperclip':
      return Paperclip;
    case 'EnvelopeOpen':
      return EnvelopeOpen;
    case 'SmileyXEyes':
      return SmileyXEyes;
    case 'Smiley':
      return Smiley;
    case 'MapPin':
      return MapPin;
    case 'HouseLine':
      return HouseLine;
    case 'Boot':
      return Boot;
    case 'CalendarCheck':
      return CalendarCheck;
    case 'Archive':
      return Archive;
    case 'SwimmingPool':
      return SwimmingPool;
    case 'Goggles':
      return Goggles;
    case 'Lifebuoy':
      return Lifebuoy;
    case 'Carrot':
      return Carrot;
    default:
      return TreePalm;
  }
};
