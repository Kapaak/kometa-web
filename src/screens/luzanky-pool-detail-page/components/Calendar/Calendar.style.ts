import styled, { css } from 'styled-components';
import { Flex } from '~/ui/components/atoms';

export const Calendar = styled.div<{ columns: number }>`
  display: grid;
  background-color: ${({ theme }) => theme.colors.grey['100']};
  gap: 1rem;

  & > div {
    grid-template-columns: 4rem repeat(${({ columns }) => columns}, 4.8rem);
    grid-template-rows: 4.8rem;
  }
`;

export const CalendarRowContainer = styled.div<{ label?: string }>`
  position: relative;
  display: grid;
  grid-template-rows: subgrid;
  gap: inherit;

  &::before  {
    content: '${({ label }) => label}';
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

  &::after {
    ${({ discount, theme }) =>
      discount && discount > 0
        ? css`
            content: '-${discount}%';
            position: absolute;
            height: 2.2rem;
            pointer-events: none;
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
`;
