import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import { SwimmingPoolConfigProvider } from '~/contexts/SwimmingPoolConfigContext';
import { getPreliminaryLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { PreliminaryPoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { getCategoryIdBySlug } from '~/utils/category';
import { isSwimmingPoolVisible } from '~/utils/swimming-pool';
import { getSheetTabId } from '~/utils/swimming-pool-application';

type SwimmingPoolPreliminaryApplicationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function SwimmingPoolPreliminaryApplicationPage({
  poolId,
  categoryId,
  applicationsOpen,
}: SwimmingPoolPreliminaryApplicationPageProps) {
  return (
    <SwimmingPoolConfigProvider swimmingPoolId={poolId}>
      <ApplicationFormContextProvider
        swimmingPoolId={poolId}
        categoryId={categoryId}
        preliminary
      >
        <PreliminaryPoolApplicationPage
          categoryId={categoryId}
          applicationsOpen={applicationsOpen}
        />
      </ApplicationFormContextProvider>
    </SwimmingPoolConfigProvider>
  );
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ poolId: string; categoryId: string }>
) => {
  const poolId = ctx.params?.poolId as string;

  // Server-rendered for any URL, so unknown and unpublished pools have to be rejected here
  if (!isSwimmingPoolVisible(poolId)) {
    return { notFound: true as const };
  }

  const categoryId = getCategoryIdBySlug(ctx.params?.categoryId as string);

  const hasSheetTab = Boolean(getSheetTabId(poolId, categoryId, true));

  const preliminaryLectures = hasSheetTab
    ? await getPreliminaryLecturesForSwimmingPoolAndCategory(categoryId, poolId)
    : [];

  return {
    props: {
      poolId,
      categoryId,
      applicationsOpen: hasSheetTab && preliminaryLectures.length > 0,
    },
  };
};
