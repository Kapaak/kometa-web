import { useQuery } from '@tanstack/react-query';

import { GetAPICourse } from '~/domains';

type AvailableCoursesProps = {
  filter?: {
    age?: number;
    gender?: string;
    skillLevel?: string;
    day?: string[] | string;
    time?: string[] | string;
    place?: string[] | string;
  };
};

export function useAvailableCourses({ filter }: AvailableCoursesProps) {
  const { data, isError, isLoading } = useQuery<GetAPICourse[]>({
    queryKey: ['availableCourses', filter],
    queryFn: async () => {
      const params = new URLSearchParams(filter as Record<string, string>);

      const response = await fetch(`/api/courses?${params.toString()}`);
      const data = await response.json();
      return data;
    },
  });

  return { data, isError, isLoading };
}
