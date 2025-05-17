import styled, { css } from 'styled-components';
import { Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const Calendar = styled.div<{ columns: number }>`
  display: grid;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  gap: 1rem;
  padding: 0 2rem;

  & > div {
    grid-template-columns: 2rem repeat(${({ columns }) => columns}, 4.8rem);
    grid-template-rows: 4.8rem;
  }

  ${({ theme, columns }) => css`
    @media (${minBreakpoint(theme.breakpoints.sm)}) {
      padding: 0 4rem;

      & > div {
        grid-template-columns: 4rem repeat(${columns}, 4.8rem);
        grid-template-rows: 4.8rem;
      }
    }
  `}
`;

export const CalendarRowContainer = styled.div<{ label?: string }>`
  position: relative;
  display: grid;
  grid-template-rows: subgrid;
  gap: inherit;

  &::before  {
    content: '${({ label }) => label?.toUpperCase()}';
    line-height: 4.8rem;
  }
`;

export const CalendarTime = styled.div``;

export const CalendarDay = styled(Flex).withConfig({
  shouldForwardProp: (prop) => prop !== 'discount',
})<{ discount?: number }>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.colors.grey['800']};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &::after {
    ${({ discount, theme }) =>
      discount && discount > 0
        ? css`
            content: '-${discount}%';
            position: absolute;
            height: 2.2rem;
            pointer-events: none;
            color: ${theme.colors.grey['900']};
            background-color: ${theme.colors.secondary.main};
            border-radius: 2rem;
            padding: 0.2rem 0.5rem;
            font-size: 1.2rem;
            top: 0;
            right: 0;
            transform: translate(30%, -50%);
            z-index: 2;
          `
        : ''}
  }
`;

export const CalendarDayFull = styled(CalendarDay)`
  background-color: ${({ theme }) => theme.colors.grey['200']};
  cursor: auto;
`;
