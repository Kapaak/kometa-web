import { swimmingPoolConfigs } from '~/config/swimming-pools';
import { swimmingCategories } from '~/constants/categories';
import { SwimmingCategoryId } from '~/types';
import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

export function getSwimmingPoolConfig(swimmingPoolId: string) {
  return swimmingPoolConfigs[swimmingPoolId as SwimmingPoolId];
}

export function getSwimmingPoolPath(swimmingPoolId: string) {
  return `/bazeny/${swimmingPoolId}`;
}

// Returns getStaticPaths paths in the form /bazeny/[poolId].
export function getSwimmingPoolPaths() {
  return Object.values(swimmingPoolConfigs).map((pool) => ({
    params: { poolId: pool.id },
  }));
}

// Returns getStaticPaths paths in the form /bazeny/[poolId]/[categoryId].
export function getSwimmingPoolCategoryPaths(
  getCategories: (pool: SwimmingPoolConfig) => SwimmingCategoryId[]
) {
  return Object.values(swimmingPoolConfigs).flatMap((pool) =>
    getCategories(pool).flatMap((categoryId) => {
      const slug = swimmingCategories.find(
        (category) => category.name === categoryId
      )?.path;

      return slug ? [{ params: { poolId: pool.id, categoryId: slug } }] : [];
    })
  );
}
