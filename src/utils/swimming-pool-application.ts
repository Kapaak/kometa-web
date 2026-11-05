import {
  DEFAULT_EMAIL_SENDER,
  swimmingPoolApplicationConfig,
} from '~/constants/swimming-pools/applications';
import { SwimmingCategoryId } from '~/types';
import { SwimmingPoolId } from '~/types/swimming-pool';

// Application config is resolved on the server only (API routes, getStaticProps).
// The client sends just the pool and category.

function getSwimmingPoolApplicationConfig(swimmingPoolId: string) {
  return swimmingPoolApplicationConfig[swimmingPoolId as SwimmingPoolId];
}

export function getSpreadsheetId(swimmingPoolId: string) {
  return getSwimmingPoolApplicationConfig(swimmingPoolId)?.spreadsheetId;
}

export function getCategoryApplicationConfig(
  swimmingPoolId: string,
  categoryId: string
) {
  return getSwimmingPoolApplicationConfig(swimmingPoolId)?.categories[
    categoryId as SwimmingCategoryId
  ];
}

export function getSheetTabId(
  swimmingPoolId: string,
  categoryId: string,
  preliminary = false
) {
  const category = getCategoryApplicationConfig(swimmingPoolId, categoryId);

  return preliminary ? category?.preliminarySheetTabId : category?.sheetTabId;
}

export function getTemplateId(swimmingPoolId: string, categoryId: string) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId)?.templateId;
}

export function getLectureCapacity(swimmingPoolId: string, categoryId: string) {
  return getCategoryApplicationConfig(swimmingPoolId, categoryId)
    ?.lectureCapacity;
}

export function getEmailSenderBySwimmingPoolId(swimmingPoolId: string) {
  return (
    getSwimmingPoolApplicationConfig(swimmingPoolId)?.emailSender ??
    DEFAULT_EMAIL_SENDER
  );
}
