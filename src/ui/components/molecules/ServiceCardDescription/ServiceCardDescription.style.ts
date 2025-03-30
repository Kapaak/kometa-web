import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { Card, Flex, Text, VerticalStack } from '../../atoms';

export const ServiceCardDescription = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  box-shadow: ${({ theme }) => theme.shadows.dark};
`;

export const ServiceCardBackgroundImage = styled(Image)`
  position: fixed;
  border-radius: inherit;
  object-fit: cover;
`;
export const ServiceCardImageContainer = styled.div`
  position: relative;
  height: 18rem;
  border-radius: 1rem 1rem 0 0;
`;

export const ServiceCardTitle = styled(Text).attrs({ as: 'h3', variant: 'h3' })`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.secondary};
  pointer-events: none;
`;

export const ServiceChipContainer = styled(VerticalStack)`
  position: relative;
  align-items: flex-end;
  gap: 1.2rem;
  pointer-events: none;
  padding: 1.8rem 2.9rem 0;
`;

export const ServiceCardTextContainer = styled(Flex)`
  flex-direction: column;
  padding: 1.4rem 2.4rem 2.4rem;
`;

export const ServiceCardLink = styled(Link)`
  align-self: flex-start;
  margin-top: 1rem;
`;
