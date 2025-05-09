import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetSwimmingPoolById } from '~/adapters/swimmingPoolAdapter';
import { useGetSwimmingPoolDetailPageById } from '~/adapters/swimmingPoolDetailAdapter';
import { SanitySwimmingPool, TransformedSwimmingPoolDetail } from '~/domains';

type SwimmingPoolDetailPageContextType = {
  categoryId: string;
  swimmingPool?: SanitySwimmingPool;
  swimmingPoolDetail?: TransformedSwimmingPoolDetail;
  isLoading?: boolean;
};

const SwimmingPoolDetailPageContext =
  createContext<SwimmingPoolDetailPageContextType>({
    categoryId: '',
    swimmingPool: undefined,
    swimmingPoolDetail: undefined,
    isLoading: false,
  });

interface Props extends PropsWithChildren {
  swimmingPoolId: string;
  categoryId: string;
}

export function SwimmingPoolDetailPageContextProvider({
  swimmingPoolId,
  categoryId,
  children,
}: Props) {
  //TODO: swimmingPool se mozna nepouziva nikde, jeste potreba zjistit
  const { data: swimmingPool } = useGetSwimmingPoolById(swimmingPoolId);
  const { data: swimmingPoolDetail, isLoading } =
    useGetSwimmingPoolDetailPageById(swimmingPoolId, categoryId);

  return (
    <SwimmingPoolDetailPageContext.Provider
      value={{
        categoryId,
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
