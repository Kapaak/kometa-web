import { useGetSwimmingPoolMainPageById } from '~/adapters/swimmingPoolMainAdapter';
import HappyChildImage from '~/public/images/swimming-pool-detail/happy-child.png';
import { SwimmingPoolId } from '~/types';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import { Accordion, TextBuilder } from '~/ui/components/molecules';

import * as S from './LuzankyFAQSection.style';

export function LuzankyFAQSection() {
  const { data } = useGetSwimmingPoolMainPageById(SwimmingPoolId.LUZANKY);

  //TODO: remove any type
  const accordionItems = data?.faq?.map((faqItem: any) => {
    return {
      title: faqItem?.title,
      content: <TextBuilder value={faqItem?.text} />,
    };
  });

  return (
    <S.Section>
      <MaxWidth>
        <S.SectionContainer>
          <S.TextContainer>
            <Headline>Časté dotazy</Headline>
            <Accordion accordionItems={accordionItems} />
          </S.TextContainer>

          <S.ImageContainer>
            <S.Image
              src={HappyChildImage}
              alt="Spokojené dítě s brýlemi."
              fill
            />
          </S.ImageContainer>
        </S.SectionContainer>
      </MaxWidth>
    </S.Section>
  );
}
