import type { InferGetStaticPropsType } from 'next';

import { SanityKidsCourse } from '~/domains';
import { getKidsCourses } from '~/libs/sanity';
import { KidsCoursesScreen } from '~/screens/KidsCoursesScreen';
import { transformKidsCourse } from '~/utils/transform';

interface KidsCoursesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function KidsCoursesPage({ kidsCourses }: KidsCoursesPageProps) {
  return <KidsCoursesScreen courses={kidsCourses} />;
}

export async function getStaticProps() {
  const kidsCourses: SanityKidsCourse[] = await getKidsCourses();

  const transformedKidsCourses = kidsCourses.map(transformKidsCourse);

  return {
    props: {
      kidsCourses: transformedKidsCourses,
    },
    revalidate: 10,
  };
}
