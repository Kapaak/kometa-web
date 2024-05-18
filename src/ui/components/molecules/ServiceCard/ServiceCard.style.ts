import Image from 'next/image';
import Link from 'next/link';

import styled, { css } from 'styled-components';

import { Card, Text, VerticalStack } from '../../atoms';

export const ServiceCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 31.2rem;
  width: 100%;
`;

export const ServiceCardBackgroundImage = styled(Image)`
  position: fixed;
  border-radius: inherit;
`;
export const DarkenImage = styled.div<{ hoverable: boolean }>`
  border-radius: inherit;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 61%,
      rgba(0, 0, 0, 0.75) 100%
    );
    border-radius: inherit;
  }

  ${(props) =>
    props.hoverable &&
    css`
      &:hover::after {
        content: url('/icons/cursor.svg');
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 16%,
          rgba(0, 0, 0, 1) 100%
        );
      }
    `}
`;

export const ServiceCardTitle = styled(Text).attrs({ as: 'h3', variant: 'h3' })`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1;
  color: ${({ theme }) => theme.colors.grey[100]};
  align-self: flex-end;
  margin: auto auto 0 0;
  pointer-events: none;
`;

export const ServiceChipContainer = styled(VerticalStack)`
  position: relative;
  align-items: flex-end;
  gap: 1.2rem;
  pointer-events: none;
`;

export const ServiceCardLink = styled(Link)`
  width: 100%;
`;
