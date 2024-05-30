import { AvailableCoursesLayout } from './components';

import { AvailableCoursesSection } from './parts';

interface AvailableCoursesScreenProps {}

export function AvailableCoursesScreen({}: AvailableCoursesScreenProps) {
  return (
    <AvailableCoursesLayout>
      <AvailableCoursesSection />
    </AvailableCoursesLayout>
  );
}
