import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { SwimmingPoolConfigProvider } from '~/contexts/SwimmingPoolConfigContext';
import { SwimmingPoolScreen } from '~/screens/swimming-pool-page';
import { SwimmingPoolPageContextProvider } from '~/screens/swimming-pool-page/contexts/SwimmingPoolContext';
import { getSwimmingPoolPaths } from '~/utils/swimming-pool';

type SwimmingPoolPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function SwimmingPoolPage({ poolId }: SwimmingPoolPageProps) {
  return (
    <SwimmingPoolConfigProvider swimmingPoolId={poolId}>
      <SwimmingPoolPageContextProvider swimmingPoolId={poolId}>
        <SwimmingPoolScreen />
      </SwimmingPoolPageContextProvider>
    </SwimmingPoolConfigProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ poolId: string }>
) => {
  return {
    props: {
      poolId: ctx.params?.poolId as string,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getSwimmingPoolPaths(),
    fallback: false,
  };
};
