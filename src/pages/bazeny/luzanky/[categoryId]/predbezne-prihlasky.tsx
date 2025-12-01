import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getPreliminaryLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { PreliminaryPoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { SwimmingPoolId } from '~/types';
import { getCategoryIdBySlug } from '~/utils/category';

interface LuzankyPageProps
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function LuzankyPoolPreliminaryApplicationPage({
  categoryId,
  hasLectures,
}: LuzankyPageProps) {
  return (
    <ApplicationFormContextProvider
      swimmingPoolId={SwimmingPoolId.LUZANKY}
      categoryId={categoryId}
      preliminary
    >
      <PreliminaryPoolApplicationPage
        categoryId={categoryId}
        hasLectures={hasLectures}
      />
    </ApplicationFormContextProvider>
  );
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ categoryId: string }>
) => {
  const { categoryId } = ctx.params ?? {};

  const preliminaryLectures =
    await getPreliminaryLecturesForSwimmingPoolAndCategory(
      getCategoryIdBySlug(categoryId as string),
      SwimmingPoolId.LUZANKY
    );

  return {
    props: {
      hasLectures: preliminaryLectures.length > 0,
      categoryId: getCategoryIdBySlug(categoryId as string),
    },
  };
};
