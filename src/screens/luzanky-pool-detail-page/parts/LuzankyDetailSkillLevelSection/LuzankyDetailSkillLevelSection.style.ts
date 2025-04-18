import styled, { css } from 'styled-components';
import { Text } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Section = styled.section`
  padding: 2rem 4rem;
`;

export const Title = styled(Text).attrs({ variant: 'h3' })`
  color: ${({ theme }) => theme.colors.primary.main};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const ImageGaleryGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 14.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.6rem;
  flex: 1 1 50%;

  //first item takes all columns
  & > :nth-child(1) {
    grid-column: span 3;
  }

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.lg)}) {
      gap: 2.4rem;
    }
  `}
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
    position: absolute;
    display: ${({ hiddenImagesCount }) =>
      hiddenImagesCount ? 'block' : 'none'};
    height: 2rem;
    width: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
