import Skeleton from 'react-loading-skeleton';

import * as S from './BlogInfo.style';

export function LoadingBlogInfo() {
  return (
    <S.BlogInfo>
      <Skeleton width="80%" />
      <Skeleton width="80%" />
      <Skeleton width="80%" />
    </S.BlogInfo>
  );
}
