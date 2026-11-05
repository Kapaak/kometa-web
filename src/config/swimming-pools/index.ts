import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

import { luzankyConfig } from './luzanky';

export const swimmingPoolConfigs: Record<SwimmingPoolId, SwimmingPoolConfig> = {
  [SwimmingPoolId.LUZANKY]: luzankyConfig,
};
