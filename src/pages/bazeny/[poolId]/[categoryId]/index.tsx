import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { SwimmingPoolConfigProvider } from '~/contexts/SwimmingPoolConfigContext';
import { SwimmingPoolDetailScreen } from '~/screens/swimming-pool-detail-page';
import { SwimmingPoolDetailPageContextProvider } from '~/screens/swimming-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { getCategoryIdBySlug } from '~/utils/category';
import { getSwimmingPoolCategoryPaths } from '~/utils/swimming-pool';

type SwimmingPoolCategoryPageProps = InferGetStaticPropsType<
  typeof getStaticProps
>;

export default function SwimmingPoolCategoryPage({
  poolId,
  categoryId,
}: SwimmingPoolCategoryPageProps) {
  return (
    <SwimmingPoolConfigProvider swimmingPoolId={poolId}>
      <SwimmingPoolDetailPageContextProvider
        swimmingPoolId={poolId}
        categoryId={categoryId}
      >
        <SwimmingPoolDetailScreen categoryId={categoryId} />
      </SwimmingPoolDetailPageContextProvider>
    </SwimmingPoolConfigProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ poolId: string; categoryId: string }>
) => {
  return {
    props: {
      poolId: ctx.params?.poolId as string,
      categoryId: getCategoryIdBySlug(ctx.params?.categoryId as string),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getSwimmingPoolCategoryPaths((pool) => pool.categories),
    fallback: false,
  };
};
