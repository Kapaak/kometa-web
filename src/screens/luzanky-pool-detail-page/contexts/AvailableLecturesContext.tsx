import { createContext, PropsWithChildren, useContext } from 'react';
import { SanityLecture } from '~/domains';
import { useAvailableLectures } from '../hooks/useAvailableLectures';

type AvailableLecturesContextType = {
  availableLectures?: SanityLecture[];
  isLoading?: boolean;
  isError?: boolean;
};

const AvailableLecturesContext = createContext<AvailableLecturesContextType>({
  availableLectures: [],
  isLoading: false,
  isError: false,
});

interface Props extends PropsWithChildren {
  categoryId: string;
}

export function AvailableLecturesContextProvider({
  categoryId,
  children,
}: Props) {
  const { availableLectures, isLoading, isError } =
    useAvailableLectures(categoryId);

  return (
    <AvailableLecturesContext.Provider
      value={{
        availableLectures,
        isLoading,
        isError,
      }}
    >
      {children}
    </AvailableLecturesContext.Provider>
  );
}

export const useAvailableLecturesContext = () => {
  return useContext(AvailableLecturesContext);
};
