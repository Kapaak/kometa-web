import { AvailableCoursesLayout } from './components';

import { AvailableCoursesSection } from './parts';

interface AvailableCoursesScreenProps {
  filter?: {
    age: number;
    gender: string;
  };
}

export function AvailableCoursesScreen({
  filter,
}: AvailableCoursesScreenProps) {
  return (
    <AvailableCoursesLayout>
      <AvailableCoursesSection filter={filter} />
    </AvailableCoursesLayout>
  );
}
