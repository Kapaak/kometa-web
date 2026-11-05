import { SwimmingCategoryId } from '~/types';
import { SwimmingPoolApplicationConfig } from '~/types/swimming-pool';

import {
  ADULT_TEMPLATE_ID,
  KID_TEMPLATE_ID,
  SCHOOL_TEMPLATE_ID,
} from '../email';

export const luzankyApplicationConfig: SwimmingPoolApplicationConfig = {
  spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID ?? '',
  emailSender: 'plavaniluzanky@kometaplavani.cz',
  categories: {
    [SwimmingCategoryId.BASIC]: {
      sheetTabId: 508666225,
      preliminarySheetTabId: 231545265,
      templateId: KID_TEMPLATE_ID,
      lectureCapacity: 20,
    },
    [SwimmingCategoryId.ADVANCED]: {
      sheetTabId: 646592576,
      preliminarySheetTabId: 1871558121,
      templateId: KID_TEMPLATE_ID,
      lectureCapacity: 15,
    },
    [SwimmingCategoryId.CONDITION]: {
      sheetTabId: 1180547156,
      preliminarySheetTabId: 76650122,
      templateId: KID_TEMPLATE_ID,
      lectureCapacity: 15,
    },
    [SwimmingCategoryId.ADULT]: {
      sheetTabId: 84149580,
      preliminarySheetTabId: 1385709919,
      templateId: ADULT_TEMPLATE_ID,
      lectureCapacity: 20,
    },
    [SwimmingCategoryId.KINDERGARTEN]: {
      sheetTabId: 1925580387,
      templateId: SCHOOL_TEMPLATE_ID,
      lectureCapacity: 25,
    },
    [SwimmingCategoryId.SCHOOL]: {
      sheetTabId: 1899142510,
      templateId: SCHOOL_TEMPLATE_ID,
      lectureCapacity: 25,
    },
  },
};
