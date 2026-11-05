import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

import { swimmingCategories } from '~/constants/categories';
import { PoolApplicationPage } from '~/screens/pool-application-page';
import { ApplicationFormContextProvider } from '~/screens/pool-application-page/contexts/ApplicationFormContext';
import { SwimmingPoolId } from '~/types/swimming-pool';
import { getCategoryIdBySlug } from '~/utils/category';
import {
  getLectureCapacity,
  getSheetTabId,
} from '~/utils/swimming-pool-application';

type LuzankyPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function LuzankyPoolApplicationPage({
  categoryId,
  applicationsOpen,
  lectureCapacity,
}: LuzankyPageProps) {
  return (
    <ApplicationFormContextProvider
      swimmingPoolId={SwimmingPoolId.LUZANKY}
      categoryId={categoryId}
      lectureCapacity={lectureCapacity ?? undefined}
    >
      <PoolApplicationPage
        categoryId={categoryId}
        applicationsOpen={applicationsOpen}
      />
    </ApplicationFormContextProvider>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ categoryId: string }>
) => {
  const categoryId = getCategoryIdBySlug(ctx.params?.categoryId as string);

  return {
    props: {
      categoryId,
      applicationsOpen: Boolean(
        getSheetTabId(SwimmingPoolId.LUZANKY, categoryId)
      ),
      lectureCapacity:
        getLectureCapacity(SwimmingPoolId.LUZANKY, categoryId) ?? null,
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
