// import { useSanityHomeContext } from '~/contexts';

import { Headline, MaxWidth, Text } from '~/ui/components/atoms';

import { Document } from '../../components/Document';
import * as S from './LuzankyDocumentSection.style';

export const LuzankyDocumentSection = () => {
  // const { documents } = useSanityHomeContext();
  return (
    <S.DocumentSection id="documents">
      <MaxWidth>
        <S.FlexContainer justify="space-between" gap="2rem">
          <S.TextContainer>
            <Headline>Dokumenty</Headline>
            <Text>Důležité dokumenty pro stáhnutí ve formě PDF.</Text>
          </S.TextContainer>
          <S.GridContainer>
            <Document label="Bara je nej" filePath="/" />
            <Document label="Bara je nej" filePath="/" />
            <Document label="Bara je nej" filePath="/" />
            <Document label="Bara je nej" filePath="/" />
            {/* {documents?.map((doc, index) => (
              <Document
                key={`${doc?.title}_${index}`}
                title={doc?.title}
                filePath={doc?.file?.asset?.url}
              />
            ))} */}
          </S.GridContainer>
        </S.FlexContainer>
      </MaxWidth>
    </S.DocumentSection>
  );
};
