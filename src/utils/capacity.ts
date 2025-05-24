import { SwimmingCategoryId } from '~/types';

const capacityIdMap: Record<string, number> = {
  [SwimmingCategoryId.BASIC]: 20,
  [SwimmingCategoryId.ADVANCED]: 15,
  [SwimmingCategoryId.CONDITION]: 15,
  [SwimmingCategoryId.ADULT]: 12,
  [SwimmingCategoryId.KINDERGARTEN]: 25,
  [SwimmingCategoryId.SCHOOL]: 25,
};

export function getCapacityByCategoryId(categoryId: string) {
  return capacityIdMap[categoryId] ?? 0;
}
