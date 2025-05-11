import { Headline, MaxWidth } from '~/ui/components/atoms';
import { getCategoryNameByCategoryId } from '~/utils/category';
import { PoolApplicationLayout } from './components';
import { ApplicationForm } from './parts';

import { SwimmingPoolId } from '~/types';
import {
  getSpreadsheetIdByCategoryId,
  getTemplateIdByCategoryId,
} from '~/utils/sheets';
import * as S from './PoolApplicationPage.style';
import { ApplicationFormContextProvider } from './contexts/ApplicationFormContext';

interface PoolApplicationPageProps {
  categoryId: string;
}

export function PoolApplicationPage({ categoryId }: PoolApplicationPageProps) {
  const spreadsheetId = getSpreadsheetIdByCategoryId(categoryId);
  const templateId = getTemplateIdByCategoryId(categoryId);

  if (!spreadsheetId) {
    return null;
  }

  return (
    <PoolApplicationLayout>
      <MaxWidth>
        <S.Section>
          <Headline>{getCategoryNameByCategoryId(categoryId)}</Headline>
          <ApplicationFormContextProvider
            swimmingPoolId={SwimmingPoolId.LUZANKY}
            categoryId={categoryId}
          >
            <ApplicationForm
              categoryId={categoryId}
              spreadsheetId={spreadsheetId}
              templateId={templateId}
            />
          </ApplicationFormContextProvider>
        </S.Section>
      </MaxWidth>
    </PoolApplicationLayout>
  );
}
