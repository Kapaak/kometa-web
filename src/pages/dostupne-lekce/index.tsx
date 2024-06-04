import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { AvailableCoursesScreen } from '~/screens/AvailableCoursesScreen';

type AvailableCoursesPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function AvailableCoursesPage({
  age,
  gender,
}: AvailableCoursesPageProps) {
  return <AvailableCoursesScreen filter={{ age, gender }} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { age, gender } = query;

  return {
    props: {
      age: Number(age),
      gender: String(gender),
    },
  };
}
