import type { SwimmingCategoryId } from './index';

export enum SwimmingPoolId {
  LUZANKY = 'luzanky',
}

/**
 * Application settings for one category of a swimming pool.
 *
 * - `sheetTabId`: GID of the Google Sheets tab (NEXT_PUBLIC_SPREADSHEET_ID) where applications are written
 *   and from which lecture occupancy is calculated.
 * - `preliminarySheetTabId`: GID of the tab for preliminary applications.
 * - `templateId`: SendGrid template ID of the confirmation email.
 * - `capacity`: maximum number of applications per time slot.
 */
export type CategoryApplicationConfig = {
  sheetTabId: number;
  // Schools and kindergartens have no preliminary applications.
  preliminarySheetTabId?: number;
  templateId: string;
  capacity: number;
};

export type SwimmingPoolApplicationConfig = {
  // Verified sender in SendGrid.
  emailSender?: string;
  categories: Partial<Record<SwimmingCategoryId, CategoryApplicationConfig>>;
};
