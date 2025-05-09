import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { swimmingCategories } from '~/constants/categories';
import { PoolApplicationPage } from '~/screens/pool-application-page';
import { getCategoryIdBySlug } from '~/utils/category';

interface LuzankyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function LuzankyPoolApplicationPage({
  categoryId,
}: LuzankyPageProps) {
  return <PoolApplicationPage categoryId={categoryId} />;
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
