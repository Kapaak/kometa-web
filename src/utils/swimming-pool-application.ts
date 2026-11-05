import {
  DEFAULT_EMAIL_SENDER,
  swimmingPoolApplicationConfig,
} from '~/constants/swimming-pools/applications';
import { SwimmingCategoryId } from '~/types';
import {
  CategoryApplicationConfig,
  SwimmingPoolId,
} from '~/types/swimming-pool';

function getCategoryApplicationConfig(
  swimmingPoolId: string,
  categoryId: string
): Partial<CategoryApplicationConfig> {
  return (
    swimmingPoolApplicationConfig[swimmingPoolId as SwimmingPoolId]
      ?.categories?.[categoryId as SwimmingCategoryId] ?? {}
  );
}

export function getSheetTabIdByCategoryId(
  swimmingPoolId: string,
  categoryId: string
) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId).sheetTabId;
}

export function getPreliminarySheetTabIdByCategoryId(
  swimmingPoolId: string,
  categoryId: string
) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId)
    .preliminarySheetTabId;
}

export function getTemplateIdByCategoryId(
  swimmingPoolId: string,
  categoryId: string
) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId).templateId;
}

export function getCapacityByCategoryId(
  swimmingPoolId: string,
  categoryId: string
) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId).capacity ?? 0;
}

export function getEmailSenderBySwimmingPoolId(swimmingPoolId?: string) {
  return (
    swimmingPoolApplicationConfig[swimmingPoolId as SwimmingPoolId]
      ?.emailSender ?? DEFAULT_EMAIL_SENDER
  );
}
