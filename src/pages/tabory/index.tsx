import type { InferGetStaticPropsType } from 'next';

import { SanityCamps } from '~/domains';
import { getCamps } from '~/libs/sanity';
import { CampsScreen } from '~/screens/CampsScreen';
import { transformCamp } from '~/utils/transform';

interface KidsCoursesPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function KidsCoursesPage({ camps }: KidsCoursesPageProps) {
  return <CampsScreen camps={camps} />;
}

export async function getStaticProps() {
  const camps: SanityCamps[] = await getCamps();

  const transformedCamps = camps.map(transformCamp);

  return {
    props: {
      camps: transformedCamps,
    },
    revalidate: 10,
  };
}
