import { createContext, PropsWithChildren, useContext } from 'react';

import { SwimmingPoolConfig } from '~/types/swimming-pool';
import { getSwimmingPoolConfig } from '~/utils/swimming-pool';

const SwimmingPoolConfigContext = createContext<SwimmingPoolConfig | null>(
  null
);

interface Props extends PropsWithChildren {
  swimmingPoolId: string;
}

export function SwimmingPoolConfigProvider({
  swimmingPoolId,
  children,
}: Props) {
  return (
    <SwimmingPoolConfigContext.Provider
      value={getSwimmingPoolConfig(swimmingPoolId) ?? null}
    >
      {children}
    </SwimmingPoolConfigContext.Provider>
  );
}

export const useSwimmingPoolConfig = () => {
  const config = useContext(SwimmingPoolConfigContext);

  if (!config) {
    throw new Error(
      'useSwimmingPoolConfig must be used within SwimmingPoolConfigProvider'
    );
  }

  return config;
};
