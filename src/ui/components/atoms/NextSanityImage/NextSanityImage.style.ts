import Image from 'next/image';

import styled from 'styled-components';

export const NextSanityImage = styled(Image).withConfig({
  shouldForwardProp: (prop) => !['objectFit'].includes(prop),
})<{ objectFit: string }>`
  object-fit: ${({ objectFit }) => objectFit ?? 'cover'};
`;
