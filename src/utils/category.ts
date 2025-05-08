import {
  SwimmingCategoryId,
  SwimmingCategorySlug,
  SwimmingCategoryTranslation,
} from '~/types';

const categoryIdMap: Record<string, string> = {
  [SwimmingCategorySlug.BASIC]: SwimmingCategoryId.BASIC,
  [SwimmingCategorySlug.ADVANCED]: SwimmingCategoryId.ADVANCED,
  [SwimmingCategorySlug.CONDITION]: SwimmingCategoryId.CONDITION,
  [SwimmingCategorySlug.ADULT]: SwimmingCategoryId.ADULT,
};

const categoryTranslationMap: Record<string, string> = {
  [SwimmingCategorySlug.BASIC]: SwimmingCategoryTranslation.BASIC,
  [SwimmingCategorySlug.ADVANCED]: SwimmingCategoryTranslation.ADVANCED,
  [SwimmingCategorySlug.CONDITION]: SwimmingCategoryTranslation.CONDITION,
  [SwimmingCategorySlug.ADULT]: SwimmingCategoryTranslation.ADULT,
  [SwimmingCategorySlug.KINDERGARTEN]: SwimmingCategoryTranslation.KINDERGARTEN,
  [SwimmingCategorySlug.SCHOOL]: SwimmingCategoryTranslation.SCHOOL,
};

export function getCategoryIdBySlug(slug: string): string {
  return categoryIdMap[slug] || '';
}

export function getCategoryNameBySlug(slug: string): string {
  return categoryTranslationMap[slug] || '';
}
