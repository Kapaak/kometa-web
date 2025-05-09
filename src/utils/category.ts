import {
  SwimmingCategoryId,
  SwimmingCategorySlug,
  SwimmingCategoryTranslation,
} from '~/types';

const categoryIdMap: Record<string, string> = {
  [SwimmingCategoryId.BASIC]: SwimmingCategoryTranslation.BASIC,
  [SwimmingCategoryId.ADVANCED]: SwimmingCategoryTranslation.ADVANCED,
  [SwimmingCategoryId.CONDITION]: SwimmingCategoryTranslation.CONDITION,
  [SwimmingCategoryId.ADULT]: SwimmingCategoryTranslation.ADULT,
  [SwimmingCategoryId.KINDERGARTEN]: SwimmingCategoryTranslation.KINDERGARTEN,
  [SwimmingCategoryId.SCHOOL]: SwimmingCategoryTranslation.SCHOOL,
};

const categorySlugIdMap: Record<string, string> = {
  [SwimmingCategorySlug.BASIC]: SwimmingCategoryId.BASIC,
  [SwimmingCategorySlug.ADVANCED]: SwimmingCategoryId.ADVANCED,
  [SwimmingCategorySlug.CONDITION]: SwimmingCategoryId.CONDITION,
  [SwimmingCategorySlug.ADULT]: SwimmingCategoryId.ADULT,
  [SwimmingCategorySlug.KINDERGARTEN]: SwimmingCategoryId.KINDERGARTEN,
  [SwimmingCategorySlug.SCHOOL]: SwimmingCategoryId.SCHOOL,
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
  return categorySlugIdMap[slug] || '';
}

export function getCategoryNameBySlug(slug: string): string {
  return categoryTranslationMap[slug] || '';
}

export function getCategoryNameByCategoryId(categoryId: string) {
  return categoryIdMap[categoryId] || '';
}
