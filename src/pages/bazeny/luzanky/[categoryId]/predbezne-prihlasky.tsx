import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { getPreliminaryLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { PreliminaryPoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { SwimmingPoolId } from '~/types/swimming-pool';
import { getCategoryIdBySlug } from '~/utils/category';
import { getSheetTabId } from '~/utils/swimming-pool-application';

type LuzankyPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function LuzankyPoolPreliminaryApplicationPage({
  categoryId,
  applicationsOpen,
}: LuzankyPageProps) {
  return (
    <ApplicationFormContextProvider
      swimmingPoolId={SwimmingPoolId.LUZANKY}
      categoryId={categoryId}
      preliminary
    >
      <PreliminaryPoolApplicationPage
        categoryId={categoryId}
        applicationsOpen={applicationsOpen}
      />
    </ApplicationFormContextProvider>
  );
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ categoryId: string }>
) => {
  const categoryId = getCategoryIdBySlug(ctx.params?.categoryId as string);

  const hasSheetTab = Boolean(
    getSheetTabId(SwimmingPoolId.LUZANKY, categoryId, true)
  );

  const preliminaryLectures = hasSheetTab
    ? await getPreliminaryLecturesForSwimmingPoolAndCategory(
        categoryId,
        SwimmingPoolId.LUZANKY
      )
    : [];

  return {
    props: {
      categoryId,
      applicationsOpen: hasSheetTab && preliminaryLectures.length > 0,
    },
  };
};
