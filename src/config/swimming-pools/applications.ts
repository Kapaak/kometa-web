import {
  SwimmingPoolApplicationConfig,
  SwimmingPoolId,
} from '~/types/swimming-pool';

import { kraviHoraApplicationConfig } from './kravi-hora/applications';
import { luzankyApplicationConfig } from './luzanky/applications';

// Contains no images so it can be imported in API routes.
export const swimmingPoolApplicationConfigs: Record<
  SwimmingPoolId,
  SwimmingPoolApplicationConfig
> = {
  [SwimmingPoolId.LUZANKY]: luzankyApplicationConfig,
  [SwimmingPoolId.KRAVI_HORA]: kraviHoraApplicationConfig,
};
