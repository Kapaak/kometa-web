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
  //Schools will not be available to create and application
  const categoriesWithoutSchools = swimmingCategories.filter(
    (category) => category.name !== 'school'
  );

  return {
    paths: categoriesWithoutSchools.map((category) => ({
      params: { categoryId: category.path },
    })),
    fallback: false,
  };
};
