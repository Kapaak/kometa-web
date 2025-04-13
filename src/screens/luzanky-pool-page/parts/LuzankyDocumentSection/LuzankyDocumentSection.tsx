import { Headline, MaxWidth, Text } from '~/ui/components/atoms';

import { useGetDocumentsBySwimmingPoolId } from '~/adapters/documentsAdapter';
import { Document } from '../../components/Document';
import * as S from './LuzankyDocumentSection.style';

export const LuzankyDocumentSection = () => {
  const { data } = useGetDocumentsBySwimmingPoolId('luzanky');

  return (
    <S.DocumentSection id="documents">
      <MaxWidth>
        <S.FlexContainer justify="space-between" gap="2rem">
          <S.TextContainer>
            <Headline>Dokumenty</Headline>
            <Text>Důležité dokumenty pro stáhnutí ve formě PDF.</Text>
          </S.TextContainer>
          <S.GridContainer>
            {data?.map((uploadedFile) => (
              <Document
                key={uploadedFile?.id}
                label={uploadedFile?.title}
                filePath={uploadedFile?.file?.asset?.url}
              />
            ))}
          </S.GridContainer>
        </S.FlexContainer>
      </MaxWidth>
    </S.DocumentSection>
  );
};
