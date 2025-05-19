import { createContext, PropsWithChildren, useContext } from 'react';
import { useGetSwimmingPoolDetailPageById } from '~/adapters/swimmingPoolDetailAdapter';
import { TransformedSwimmingPoolDetail } from '~/domains';

type SwimmingPoolDetailPageContextType = {
  categoryId: string;
  swimmingPoolDetail?: TransformedSwimmingPoolDetail;
  isLoading?: boolean;
};

const SwimmingPoolDetailPageContext =
  createContext<SwimmingPoolDetailPageContextType>({
    categoryId: '',
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
  const { data: swimmingPoolDetail, isLoading } =
    useGetSwimmingPoolDetailPageById(swimmingPoolId, categoryId);

  return (
    <SwimmingPoolDetailPageContext.Provider
      value={{
        categoryId,
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
