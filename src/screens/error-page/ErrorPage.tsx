import { Button, MaxWidth, VerticalStack } from '~/ui/components/atoms';
import { PageLayout } from '~/ui/components/templates';

import * as S from './ErrorPage.style';

export function ErrorPageScreen() {
  return (
    <PageLayout>
      <S.ErrorPage>
        <MaxWidth>
          <S.ErrorPageContainer>
            <VerticalStack gap="2rem" textAlign="center">
              <S.Title>ups, vedle!</S.Title>
              <S.Description>
                Je nám to líto, stránka kterou hledáte není k dispozici.
              </S.Description>
              <Button>
                <S.Link href="/" passHref>
                  Zpět na hlavní stránku
                </S.Link>
              </Button>
            </VerticalStack>
          </S.ErrorPageContainer>
        </MaxWidth>
      </S.ErrorPage>
    </PageLayout>
  );
}
