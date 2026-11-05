import type { StaticImageData } from 'next/image';

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

type ImageSource = string | StaticImageData;

export type SwimmingPoolContact = {
  phone?: string;
  // Additional phone info (e.g. when you can't get through).
  phoneNote?: string;
  email?: string;
};

export type PoolService = {
  id: string;
  title: string;
  description: string;
  // External link. If missing, the link points to the category detail of the given pool.
  href?: string;
  tags: string[];
  src: StaticImageData;
  alt: string;
  applicationDisabled?: boolean;
};

export type PoolInformation = {
  image: StaticImageData;
  heroSection: {
    description?: string;
    duration?: number;
    poolParameters?: {
      poolLength?: string;
      depth?: string;
      waterTemperature?: string;
    };
  };
  skillLevelSection?: {
    data: {
      title: string;
      descriptions?: { label?: string; text: string }[];
    }[];
    actionButtonLabel?: string;
  };
  aboutSection?: {
    description?: string;
    lectureFocus?: string[];
  };
  initialLectureSection?: {
    requiredEquipment: {
      items: string[];
      description?: string;
    };
    arrivalTime: {
      descriptions: string[];
    };
    childHandoverProcess?: {
      descriptions: string[];
    };
  };
};

export type SwimmingPoolConfig = {
  id: SwimmingPoolId;
  // Short name, e.g. for breadcrumbs.
  name: string;
  // Full name, e.g. "Bazén za Lužánkami".
  title: string;
  hero: {
    image: StaticImageData;
    imageAlt: string;
  };
  contact: SwimmingPoolContact;
  location: {
    address: string;
    description?: string;
    image?: ImageSource;
    imageAlt?: string;
    parking?: string;
    publicTransport?: string;
  };
  contactPerson: {
    name: string;
    bio?: string;
    image?: ImageSource;
    imageAlt?: string;
  };
  services: PoolService[];
  // Categories that have their own detail page for this pool.
  categories: SwimmingCategoryId[];
  // Categories that accept online applications.
  applicationCategories: SwimmingCategoryId[];
  detailInformation: Partial<Record<SwimmingCategoryId, PoolInformation>>;
  firstLectureImageAlt: string;
};
