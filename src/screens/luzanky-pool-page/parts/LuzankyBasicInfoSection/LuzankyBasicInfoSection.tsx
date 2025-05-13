import { useGetSwimmingPoolMainPageById } from '~/adapters/swimmingPoolMainAdapter';
import { SwimmingPoolId } from '~/types';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import { TextBuilder } from '~/ui/components/molecules';
import * as S from './LuzankyBasicInfoSection.style';

export function LuzankyBasicInfoSection() {
  const { data } = useGetSwimmingPoolMainPageById(SwimmingPoolId.LUZANKY);

  return (
    <S.BasicInfoSection id="basic-information">
      <MaxWidth>
        <S.SectionContainer>
          {/* //TODO: remove any type */}
          {data?.basicInformation?.map((information: any) => (
            <S.SectionDescriptionContainer key={information?.columnTitle}>
              <Headline as="h3" size="small">
                {information?.columnTitle}
              </Headline>
              <TextBuilder value={information?.text} />
            </S.SectionDescriptionContainer>
          ))}
        </S.SectionContainer>
      </MaxWidth>
    </S.BasicInfoSection>
  );
}
