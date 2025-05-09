import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { swimmingCategories } from '~/constants/categories';
import { LuzankyPoolDetailScreen } from '~/screens/luzanky-pool-detail-page';
import { SwimmingPoolDetailPageContextProvider } from '~/screens/luzanky-pool-detail-page/contexts/SwimmingPoolDetailPageContext';
import { SwimmingPoolId } from '~/types';
import { getCategoryIdBySlug } from '~/utils/category';

interface LuzankyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function LuzankyPage({ categoryId }: LuzankyPageProps) {
  return (
    <SwimmingPoolDetailPageContextProvider
      swimmingPoolId={SwimmingPoolId.LUZANKY}
      categoryId={categoryId}
    >
      <LuzankyPoolDetailScreen />
    </SwimmingPoolDetailPageContextProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ categoryId: string }>
) => {
  const { categoryId } = ctx.params ?? {};

  return {
    props: {
      categoryId: getCategoryIdBySlug(categoryId as string),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: swimmingCategories.map((category) => ({
      params: { categoryId: category.path },
    })),
    fallback: false,
  };
};
