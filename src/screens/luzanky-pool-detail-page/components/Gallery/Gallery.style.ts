import NextImage from 'next/image';
import styled, { css } from 'styled-components';
import { minBreakpoint } from '~/utils/dimensions';

export const ImageGaleryGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => !['hasImages'].includes(prop),
})<{ hasImages: boolean }>`
  display: ${({ hasImages }) => (hasImages ? 'grid' : 'none')};
  grid-template-rows: 20rem 10rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  flex: 1 1 50%;

  //first item takes all columns
  & > :nth-child(1) {
    grid-column: span 3;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      grid-template-rows: 30rem 15rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      grid-template-rows: 35rem 15rem;
    }
  `}

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 2.4rem;
    }
  `}
`;

export const GalleryImage = styled(NextImage)`
  object-fit: cover;
  border-radius: inherit;
`;

export const ClickableImageContainer = styled.button.withConfig({
  shouldForwardProp: (prop) => !['hiddenImagesCount'].includes(prop),
})<{ hiddenImagesCount?: number }>`
  position: relative;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.grey['500']};
  height: 100%;
  width: 100%;
  border-radius: 1rem;

  &::before {
    content: ${({ hiddenImagesCount }) =>
      hiddenImagesCount ? `'+${hiddenImagesCount}'` : "''"};
    color: ${({ theme }) => theme.colors.grey['100']};
    position: absolute;
    display: ${({ hiddenImagesCount }) =>
      hiddenImagesCount ? 'block' : 'none'};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: 500;
    z-index: 1;
  }
`;
