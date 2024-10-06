import { Skeleton, VerticalStack } from '~/ui/components/atoms';

import { LoadingBlogInfo } from '../../components';

import * as S from './BlogArticle.style';

export function LoadingBlogArticle() {
  return (
    <S.BlogArticle>
      <S.ImageContainer>
        <Skeleton style={{ position: 'absolute' }} height="100%" width="100%" />
      </S.ImageContainer>
      <S.Container>
        <S.TextContainer>
          <S.BlogArticleHeadline>
            <Skeleton width="50%" />
          </S.BlogArticleHeadline>
          <S.BlogArticleDescription>
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="80%" />
          </S.BlogArticleDescription>
        </S.TextContainer>
        <S.InfoContainer>
          <VerticalStack gap="3rem">
            <LoadingBlogInfo />
            <Skeleton height="4.6rem" width="14.431rem" />
          </VerticalStack>
        </S.InfoContainer>
      </S.Container>
    </S.BlogArticle>
  );
}
