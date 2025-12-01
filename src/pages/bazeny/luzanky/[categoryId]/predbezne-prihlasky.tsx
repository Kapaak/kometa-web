import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { swimmingCategories } from '~/constants/categories';
import { getPreliminaryLecturesForSwimmingPoolAndCategory } from '~/libs/sanity/api/lecture';
import { PreliminaryPoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { SwimmingPoolId } from '~/types';
import { getCategoryIdBySlug } from '~/utils/category';

interface LuzankyPageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

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

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ categoryId: string }>
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
