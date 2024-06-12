import { AvailableCoursesScreen } from '~/screens/availabe-lectures-page';
import { AvailableCoursesFilterProvider } from '~/screens/availabe-lectures-page/contexts';

export default function AvailableCoursesPage() {
  return (
    <AvailableCoursesFilterProvider>
      <AvailableCoursesScreen />
    </AvailableCoursesFilterProvider>
  );
}
