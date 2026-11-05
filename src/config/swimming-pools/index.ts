import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

import { kraviHoraConfig } from './kravi-hora';
import { luzankyConfig } from './luzanky';

export const swimmingPoolConfigs: Record<SwimmingPoolId, SwimmingPoolConfig> = {
  [SwimmingPoolId.LUZANKY]: luzankyConfig,
  [SwimmingPoolId.KRAVI_HORA]: kraviHoraConfig,
};
