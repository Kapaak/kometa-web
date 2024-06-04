import { useQuery } from '@tanstack/react-query';

import { GetAPICourse } from '~/domains';

type AvailableCoursesProps = {
  filter?: {
    skillLevel?: string;
    day?: string;
    time?: string;
    age?: number;
  };
};

export function useAvailableCourses({ filter }: AvailableCoursesProps) {
  const { data, isError, isLoading } = useQuery<GetAPICourse[]>({
    queryKey: ['availableCourses'],
    queryFn: async () => {
      const params = new URLSearchParams(filter as Record<string, string>);

      const response = await fetch(`/api/courses?${params.toString()}`);
      const data = await response.json();
      return data;
    },
  });

  return { data, isError, isLoading };
}
