import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled from 'styled-components';

const SCROLLBAR_SIZE = 1;

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  height: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 0.2rem;
  background: ${({ theme }) => theme.colors.grey['400']};
  transition: background 160ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.grey['500']};
  }

  &[data-orientation='vertical'] {
    width: ${SCROLLBAR_SIZE}rem;
  }
  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: ${SCROLLBAR_SIZE}rem;
  }
`;

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: red;
  border-radius: 0.4rem;
  position: relative;
  background: ${({ theme }) => theme.colors.primary.main};
  width: 2rem;
  height: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 2rem;
    min-width: 44px;
    min-height: 44px;
  }
`;

export const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background: ${({ theme }) => theme.colors.grey['500']};
`;

export const ScrollAreaViewport = styled(ScrollArea.Viewport).withConfig({
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight?: string }>`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  max-height: ${({ maxHeight }) => maxHeight ?? 'initial'};
`;
