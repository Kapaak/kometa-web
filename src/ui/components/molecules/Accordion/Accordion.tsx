import { ReactNode, useId } from 'react';

import * as RadixAccordion from '@radix-ui/react-accordion';

import { AvailableIcons, getAvailableIconByName } from '~/utils/icons';

import { Strong } from '../../atoms';
import { Flex } from '../../atoms/Flex';

import * as S from './Accordion.style';

export type AccordionItem = {
  title: string;
  subtitle?: string;
  content?: ReactNode;
  icon?: AvailableIcons;
};

interface AccordionProps {
  accordionItems?: AccordionItem[];
}

export function Accordion({ accordionItems }: AccordionProps) {
  const id = useId();

  return (
    <RadixAccordion.Root type="single" collapsible>
      {accordionItems?.map((accordionItem, index) => {
        const Icon = getAvailableIconByName(accordionItem?.icon);

        return (
          <S.AccordionItem
            value={`item-${id}-${index}`}
            key={`item-${id}-${index}`}
          >
            <S.StyledHeader>
              <S.StyledTrigger>
                {accordionItem?.icon && <Icon size={30} />}
                <Flex>
                  <S.Headline as="h3">
                    <Strong>{accordionItem?.title}</Strong>
                  </S.Headline>
                  {accordionItem?.subtitle && (
                    <S.Subheadline as="h4">
                      {accordionItem?.subtitle}
                    </S.Subheadline>
                  )}
                </Flex>
                <S.ArrowDown size={18} weight="bold" />
              </S.StyledTrigger>
            </S.StyledHeader>

            <S.StyledContent>
              <S.StyledContentText>
                {accordionItem?.content}
              </S.StyledContentText>
            </S.StyledContent>
          </S.AccordionItem>
        );
      })}
    </RadixAccordion.Root>
  );
}
