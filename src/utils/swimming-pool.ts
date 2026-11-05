import { swimmingPoolConfigs } from '~/config/swimming-pools';
import { swimmingCategories } from '~/constants/categories';
import { SwimmingCategoryId } from '~/types';
import { SwimmingPoolConfig, SwimmingPoolId } from '~/types/swimming-pool';

export function getSwimmingPoolConfig(swimmingPoolId: string) {
  return swimmingPoolConfigs[swimmingPoolId as SwimmingPoolId];
}

/**
 * Unpublished pools are visible only outside production
 * (localhost, Vercel preview) so they can be reviewed before launch.
 */
export function getVisibleSwimmingPools() {
  const showUnpublished =
    process.env.NODE_ENV === 'development' ||
    process.env.VERCEL_ENV === 'preview';

  return Object.values(swimmingPoolConfigs).filter(
    (pool) => pool.published || showUnpublished
  );
}

export function isSwimmingPoolVisible(swimmingPoolId: string) {
  return getVisibleSwimmingPools().some(({ id }) => id === swimmingPoolId);
}

export function getSwimmingPoolPath(swimmingPoolId: string) {
  return `/bazeny/${swimmingPoolId}`;
}

/**
 * Pools that have their own page on this site link to it instead of the URL
 * stored in Sanity. Unpublished pools keep the Sanity URL in production.
 */
export function resolveSwimmingPoolUrl(
  swimmingPoolSlug?: string | null,
  sanityUrl?: string | null
) {
  return swimmingPoolSlug && isSwimmingPoolVisible(swimmingPoolSlug)
    ? getSwimmingPoolPath(swimmingPoolSlug)
    : (sanityUrl ?? null);
}

// Returns getStaticPaths paths in the form /bazeny/[poolId].
export function getSwimmingPoolPaths() {
  return getVisibleSwimmingPools().map((pool) => ({
    params: { poolId: pool.id },
  }));
}

// Returns getStaticPaths paths in the form /bazeny/[poolId]/[categoryId].
export function getSwimmingPoolCategoryPaths(
  getCategories: (pool: SwimmingPoolConfig) => SwimmingCategoryId[]
) {
  return getVisibleSwimmingPools().flatMap((pool) =>
    getCategories(pool).flatMap((categoryId) => {
      const slug = swimmingCategories.find(
        (category) => category.name === categoryId
      )?.path;

      return slug ? [{ params: { poolId: pool.id, categoryId: slug } }] : [];
    })
  );
}
