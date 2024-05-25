import NextLink from 'next/link';

import styled from 'styled-components';

import { Text } from '~/ui/components/atoms';

export const ErrorPage = styled.main`
  padding: 0 2rem;
`;

export const Title = styled(Text).attrs({ variant: 'h2', as: 'h1' })`
  color: var(--col2);
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
export const Description = styled(Text).attrs({ variant: 'body1', as: 'p' })`
  margin-bottom: 2rem;
`;

export const ErrorPageContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  min-height: 50rem;
`;

export const Link = styled(NextLink)`
  padding: 1rem 2rem;
`;
