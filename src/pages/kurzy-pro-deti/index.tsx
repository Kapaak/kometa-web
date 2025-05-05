import type { InferGetStaticPropsType } from 'next';

import { getLectures } from '~/libs/sanity/api/lecture';
import { KidsCoursesScreen } from '~/screens/kids-courses-page';
import { transformKidsCourses } from '~/utils/transform-sanity-model';

interface KidsCoursesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function KidsCoursesPage({ kidsCourses }: KidsCoursesPageProps) {
  return <KidsCoursesScreen courses={kidsCourses} />;
}

export async function getStaticProps() {
  const kidsCourses = await getLectures();

  const transformedKidsCourses = transformKidsCourses(kidsCourses);

  return {
    props: {
      kidsCourses: transformedKidsCourses,
    },
    revalidate: 10,
  };
}
