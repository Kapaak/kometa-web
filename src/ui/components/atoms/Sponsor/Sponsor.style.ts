import Image from 'next/image';

import styled from 'styled-components';

export const Sponsor = styled.a.withConfig({
  shouldForwardProp: (prop) => !['hasGrayscale'].includes(prop),
})<{ hasGrayscale?: boolean }>`
  flex: 1;
  display: flex;
  min-width: 10rem;
  height: 11rem;
  filter: ${({ hasGrayscale }) => (hasGrayscale ? 'grayscale(50)' : 'none')};
  transition: all 0.3s ease;
  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    filter: grayscale(0);
    transition: all 0.3s ease;
  }
`;
export const SponsorImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
