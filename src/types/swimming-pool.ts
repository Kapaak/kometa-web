import type { SwimmingCategoryId } from './index';

export enum SwimmingPoolId {
  LUZANKY = 'luzanky',
}

/**
 * Application settings for one category of a swimming pool.
 *
 * - `sheetTabId`: GID of the tab in the pool's Google spreadsheet where applications are written
 *   and from which lecture occupancy is calculated.
 * - `preliminarySheetTabId`: GID of the tab for preliminary applications.
 * - `templateId`: SendGrid template ID of the confirmation email.
 * - `lectureCapacity`: maximum number of applications per lecture (day and time).
 */
export type CategoryApplicationConfig = {
  sheetTabId: number;
  // Schools and kindergartens have no preliminary applications.
  preliminarySheetTabId?: number;
  templateId: string;
  lectureCapacity: number;
};

export type SwimmingPoolApplicationConfig = {
  // ID of the pool's Google spreadsheet (document), shared with the service account.
  spreadsheetId: string;
  // Verified sender in SendGrid.
  emailSender?: string;
  categories: Partial<Record<SwimmingCategoryId, CategoryApplicationConfig>>;
};
