import { PortableTextBlock } from '@portabletext/types';
import { useGetSwimmingPoolMainPageById } from '~/adapters/swimmingPoolMainAdapter';
import { SwimmingPoolId } from '~/types';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import { TextBuilder } from '~/ui/components/molecules';
import * as S from './LuzankyBasicInfoSection.style';

export function LuzankyBasicInfoSection() {
  const { data } = useGetSwimmingPoolMainPageById(SwimmingPoolId.LUZANKY);

  return (
    <S.BasicInfoSection id="zakladni-informace">
      <MaxWidth>
        <S.BasicInfoHeadline>Základní informace</S.BasicInfoHeadline>
        <S.SectionContainer>
          {data?.basicInformation?.map(
            (information) =>
              information?.text && (
                <S.SectionDescriptionContainer key={information?.columnTitle}>
                  <Headline as="h3" size="small">
                    {information?.columnTitle}
                  </Headline>
                  <TextBuilder
                    value={information?.text as PortableTextBlock[]}
                  />
                </S.SectionDescriptionContainer>
              )
          )}
        </S.SectionContainer>
      </MaxWidth>
    </S.BasicInfoSection>
  );
}
