import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { SwimmingPoolConfigProvider } from '~/contexts/SwimmingPoolConfigContext';
import { PoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { getCategoryIdBySlug } from '~/utils/category';
import { getSwimmingPoolCategoryPaths } from '~/utils/swimming-pool';
import {
  getLectureCapacity,
  getSheetTabId,
} from '~/utils/swimming-pool-application';

type SwimmingPoolApplicationPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

export default function SwimmingPoolApplicationPage({
  poolId,
  categoryId,
  applicationsOpen,
  lectureCapacity,
}: SwimmingPoolApplicationPageProps) {
  return (
    <SwimmingPoolConfigProvider swimmingPoolId={poolId}>
      <ApplicationFormContextProvider
        swimmingPoolId={poolId}
        categoryId={categoryId}
        lectureCapacity={lectureCapacity ?? undefined}
      >
        <PoolApplicationPage
          categoryId={categoryId}
          applicationsOpen={applicationsOpen}
        />
      </ApplicationFormContextProvider>
    </SwimmingPoolConfigProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ poolId: string; categoryId: string }>
) => {
  const poolId = ctx.params?.poolId as string;
  const categoryId = getCategoryIdBySlug(ctx.params?.categoryId as string);

  return {
    props: {
      poolId,
      categoryId,
      applicationsOpen: Boolean(getSheetTabId(poolId, categoryId)),
      lectureCapacity: getLectureCapacity(poolId, categoryId) ?? null,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getSwimmingPoolCategoryPaths((pool) => pool.applicationCategories),
    fallback: false,
  };
};
