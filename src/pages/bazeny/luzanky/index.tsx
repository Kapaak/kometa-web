import { GetStaticPropsContext } from 'next';
import { SwimmingPoolDetailPageContextProvider } from '~/contexts/SwimmingPoolDetailPageContext';
import { LuzankyPoolScreen } from '~/screens/luzanky-pool-page';
import { SwimmingPoolId } from '~/types';

//TODO:
// - pridat link v sanity na tuhle stranku na /bazeny/luzanky

export default function LuzankyPoolPage() {
  return (
    <SwimmingPoolDetailPageContextProvider
      swimmingPoolId={SwimmingPoolId.LUZANKY}
    >
      <LuzankyPoolScreen />
    </SwimmingPoolDetailPageContextProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ categoryId: string }>
) => {
  const { categoryId } = ctx.params ?? {};

  return {
    props: {
      categoryId,
    },
  };
};
