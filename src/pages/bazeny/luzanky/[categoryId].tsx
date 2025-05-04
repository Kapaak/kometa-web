import { swimmingCategories } from '~/constants/categories';
import { LuzankyPoolDetailScreen } from '~/screens/luzanky-pool-detail-page';

export default function BlogItemPage() {
  return <LuzankyPoolDetailScreen />;
}

export const getStaticProps = async () => {
  return {
    props: {},
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
