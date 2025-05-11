import { SwimmingCategoryId } from '~/types';

const sheetIdByCategoryId: Record<string, number> = {
  [SwimmingCategoryId.BASIC]: 508666225,
  [SwimmingCategoryId.ADVANCED]: 646592576,
  [SwimmingCategoryId.CONDITION]: 1180547156,
  [SwimmingCategoryId.ADULT]: 84149580,
  [SwimmingCategoryId.KINDERGARTEN]: 1925580387,
  [SwimmingCategoryId.SCHOOL]: 1899142510,
};

export function getSpreadsheetIdByCategoryId(categoryId: string) {
  return sheetIdByCategoryId[categoryId];
}
