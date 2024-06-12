import { useRouter } from 'next/router';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Filter = Record<string, string>;

type ContextData = {
  filter: Filter;
  setFilter: (newFilter: Filter) => void;
};

export const AvailableCoursesFilterContext = createContext<ContextData>({
  filter: {},
  setFilter: () => void 0,
});

export function AvailableCoursesFilterProvider({
  children,
}: PropsWithChildren) {
  const [filter, setFilter] = useState<Filter>({});

  const router = useRouter();

  const handleSetFilter = useCallback((newFilter: Filter) => {
    setFilter(newFilter);
  }, []);

  useEffect(() => {
    setFilter(router.query as Filter);
  }, [router.query]);

  return (
    <AvailableCoursesFilterContext.Provider
      value={{
        filter,
        setFilter: handleSetFilter,
      }}
    >
      {children}
    </AvailableCoursesFilterContext.Provider>
  );
}

export function useAvailableCoursesFilterContext() {
  return useContext(AvailableCoursesFilterContext);
}
