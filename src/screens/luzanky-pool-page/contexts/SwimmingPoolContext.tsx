import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetSwimmingPoolMainPageById } from '~/adapters/swimmingPoolMainAdapter';
import { SanitySwimmingPoolPage } from '~/domains';

type SwimmingPoolPageContextType = {
  swimmingPool?: SanitySwimmingPoolPage;
  isLoading?: boolean;
};

const SwimmingPoolPageContext = createContext<SwimmingPoolPageContextType>({
  swimmingPool: undefined,
  isLoading: false,
});

interface Props extends PropsWithChildren {
  swimmingPoolId: string;
}

export function SwimmingPoolPageContextProvider({
  swimmingPoolId,
  children,
}: Props) {
  const { data: swimmingPool, isLoading } =
    useGetSwimmingPoolMainPageById(swimmingPoolId);

  return (
    <SwimmingPoolPageContext.Provider
      value={{
        swimmingPool,
        isLoading,
      }}
    >
      {children}
    </SwimmingPoolPageContext.Provider>
  );
}

export const useSwimmingPoolPageContext = () => {
  return useContext(SwimmingPoolPageContext);
};
