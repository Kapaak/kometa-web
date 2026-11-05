import { PortableTextBlock } from '@portabletext/types';

import { Headline, MaxWidth } from '~/ui/components/atoms';
import { TextBuilder } from '~/ui/components/molecules';

import { useSwimmingPoolPageContext } from '../../contexts/SwimmingPoolContext';

import * as S from './PoolBasicInfoSection.style';

export function PoolBasicInfoSection() {
  const { swimmingPool } = useSwimmingPoolPageContext();

  return (
    <S.BasicInfoSection id="zakladni-informace">
      <MaxWidth>
        <S.BasicInfoHeadline>Základní informace</S.BasicInfoHeadline>
        <S.SectionContainer>
          {swimmingPool?.basicInformation?.map(
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
