import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetSwimmingPoolDetailPageById } from '~/adapters/swimmingPoolDetailAdapter';
import { useGetSwimmingPoolMainPageById } from '~/adapters/swimmingPoolMainAdapter';
import {
  SanitySwimmingPoolPage,
  TransformedSwimmingPoolDetail,
} from '~/domains';

type SwimmingPoolDetailPageContextType = {
  categoryId: string;
  swimmingPoolDetail?: TransformedSwimmingPoolDetail;
  swimmingPool?: SanitySwimmingPoolPage;
  isLoading?: boolean;
};

const SwimmingPoolDetailPageContext =
  createContext<SwimmingPoolDetailPageContextType>({
    swimmingPoolDetail: undefined,
    swimmingPool: undefined,
    categoryId: '',
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
  const { data: swimmingPoolDetail, isLoading } =
    useGetSwimmingPoolDetailPageById(swimmingPoolId, categoryId);

  const { data } = useGetSwimmingPoolMainPageById(swimmingPoolId);

  return (
    <SwimmingPoolDetailPageContext.Provider
      value={{
        swimmingPool: data,
        swimmingPoolDetail,
        categoryId,
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
