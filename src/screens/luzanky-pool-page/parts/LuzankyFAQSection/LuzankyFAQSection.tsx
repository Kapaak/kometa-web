import HappyChildImage from '~/public/images/swimming-pool-detail/happy-child.png';
import { Headline, MaxWidth } from '~/ui/components/atoms';
import {
  Accordion,
  type AccordionItem,
  TextBuilder,
} from '~/ui/components/molecules';

import { PortableTextBlock } from 'next-sanity';
import { useSwimmingPoolPageContext } from '../../contexts/SwimmingPoolContext';
import * as S from './LuzankyFAQSection.style';

export function LuzankyFAQSection() {
  const { swimmingPool } = useSwimmingPoolPageContext();

  const accordionItems = swimmingPool?.faq
    ?.map(
      (faqItem) =>
        faqItem?.text && {
          title: faqItem?.title,
          content: <TextBuilder value={faqItem.text as PortableTextBlock[]} />,
        }
    )
    .filter(Boolean) as AccordionItem[];

  return (
    <S.FAQSection>
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
    </S.FAQSection>
  );
}
