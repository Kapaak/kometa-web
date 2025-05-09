import styled, { css } from 'styled-components';
import { Flex } from '~/ui/components/atoms';
import { minBreakpoint } from '~/utils/dimensions';

export const DocumentSection = styled.section`
  padding: 4rem 2rem;
  background-color: #dce9fa;
`;

export const TextContainer = styled(Flex)`
  flex: 1 1 40%;
  flex-direction: column;
  gap: 1rem;
`;

export const FlexContainer = styled(Flex)`
  flex-direction: column;

  ${({ theme }) => css`
    @media (${minBreakpoint(theme.breakpoints.md)}) {
      flex-direction: row;
    }
  `}
`;

export const GridContainer = styled.div`
  display: grid;
  flex: 1 1 60%;
  gap: 2rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;
