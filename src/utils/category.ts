import { SwimmingCategoryId, SwimmingCategorySlug } from '~/types';

export function getCategoryIdBySlug(slug: string) {
  switch (slug) {
    case SwimmingCategorySlug.BASIC:
      return SwimmingCategoryId.BASIC;
    case SwimmingCategorySlug.ADVANCED:
      return SwimmingCategoryId.ADVANCED;
    case SwimmingCategorySlug.CONDITION:
      return SwimmingCategoryId.CONDITION;
    case SwimmingCategorySlug.ADULT:
      return SwimmingCategoryId.ADULT;

    default:
      return '';
  }
}
