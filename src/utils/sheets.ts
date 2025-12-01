import { SwimmingCategoryId } from '~/types';

const sheetIdByCategoryId: Record<string, number> = {
  [SwimmingCategoryId.BASIC]: 508666225,
  [SwimmingCategoryId.ADVANCED]: 646592576,
  [SwimmingCategoryId.CONDITION]: 1180547156,
  [SwimmingCategoryId.ADULT]: 84149580,
  [SwimmingCategoryId.KINDERGARTEN]: 1925580387,
  [SwimmingCategoryId.SCHOOL]: 1899142510,
};

const preliminarySheetIdByCategoryId: Record<string, number> = {
  [SwimmingCategoryId.BASIC]: 231545265,
  [SwimmingCategoryId.ADVANCED]: 1871558121,
  [SwimmingCategoryId.CONDITION]: 76650122,
  [SwimmingCategoryId.ADULT]: 1385709919,
  //Skoly a skolky nemaji predbezne prihlasky
  [SwimmingCategoryId.KINDERGARTEN]: 0,
  [SwimmingCategoryId.SCHOOL]: 0,
};

const templateIdByCategoryId: Record<string, string> = {
  [SwimmingCategoryId.BASIC]: 'd-874de2c55ad944d890768e75b9b2969b',
  [SwimmingCategoryId.ADVANCED]: 'd-874de2c55ad944d890768e75b9b2969b',
  [SwimmingCategoryId.CONDITION]: 'd-874de2c55ad944d890768e75b9b2969b',
  [SwimmingCategoryId.ADULT]: 'd-5b15d722c6664a7e8f8c7c3152310875',
  [SwimmingCategoryId.KINDERGARTEN]: 'd-59d5da971b4b4f61851ebd6dda8af4c6',
  [SwimmingCategoryId.SCHOOL]: 'd-59d5da971b4b4f61851ebd6dda8af4c6',
};

export function getSpreadsheetIdByCategoryId(categoryId: string) {
  return sheetIdByCategoryId[categoryId];
}

export function getPreliminarySpreadsheetIdByCategoryId(categoryId: string) {
  return preliminarySheetIdByCategoryId[categoryId];
}

export function getTemplateIdByCategoryId(categoryId: string) {
  return templateIdByCategoryId[categoryId];
}
