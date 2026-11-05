import {
  SwimmingPoolApplicationConfig,
  SwimmingPoolId,
} from '~/types/swimming-pool';

import { luzankyApplicationConfig } from './luzanky';

export * from './templates';

// Contains no images so it can be imported in API routes.
export const swimmingPoolApplicationConfig: Record<
  SwimmingPoolId,
  SwimmingPoolApplicationConfig
> = {
  [SwimmingPoolId.LUZANKY]: luzankyApplicationConfig,
};
