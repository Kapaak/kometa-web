import { AvailableCoursesScreen } from '~/screens/AvailableCoursesScreen';
import { AvailableCoursesFilterProvider } from '~/screens/AvailableCoursesScreen/contexts';

export default function AvailableCoursesPage() {
  return (
    <AvailableCoursesFilterProvider>
      <AvailableCoursesScreen />
    </AvailableCoursesFilterProvider>
  );
}
