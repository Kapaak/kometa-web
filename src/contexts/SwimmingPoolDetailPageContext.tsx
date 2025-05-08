import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetSwimmingPoolById } from '~/adapters/swimmingPoolAdapter';
import { useGetSwimmingPoolDetailPageById } from '~/adapters/swimmingPoolDetailAdapter';
import { SanitySwimmingPool, TransformedSwimmingPoolDetail } from '~/domains';

type SwimmingPoolDetailPageContextType = {
  swimmingPool?: SanitySwimmingPool;
  swimmingPoolDetail?: TransformedSwimmingPoolDetail;
  isLoading?: boolean;
};

const SwimmingPoolDetailPageContext =
  createContext<SwimmingPoolDetailPageContextType>({
    swimmingPool: undefined,
    swimmingPoolDetail: undefined,
    isLoading: false,
  });

interface Props extends PropsWithChildren {
  swimmingPoolId: string;
  categoryId?: string;
}

export function SwimmingPoolDetailPageContextProvider({
  swimmingPoolId,
  categoryId,
  children,
}: Props) {
  const { data: swimmingPool } = useGetSwimmingPoolById(swimmingPoolId);
  const { data: swimmingPoolDetail, isLoading } =
    useGetSwimmingPoolDetailPageById(swimmingPoolId, categoryId);

  return (
    <SwimmingPoolDetailPageContext.Provider
      value={{
        swimmingPool,
        swimmingPoolDetail,
        isLoading,
      }}
    >
      {children}
    </SwimmingPoolDetailPageContext.Provider>
  );
}

export const useSwimmingPoolDetailPageContext = () => {
  return useContext(SwimmingPoolDetailPageContext);
};
