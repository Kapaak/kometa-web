import { CaretDown } from '@phosphor-icons/react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { Popover } from '~/ui/components/atoms';

export const DropdownPopover = styled(Popover)`
  && {
    background-color: ${({ theme }) => theme.colors.grey['200']};
  }
`;

export const DropdownAction = styled.button`
  display: flex;
  align-items: end;
  gap: 0.2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  cursor: pointer;
`;

export const DropdownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1.4rem 2.4rem;
  gap: 0.75rem;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey['700']};
  font-weight: 600;
  padding: 0.75rem 0;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;

export const ArrowDown = styled(CaretDown)`
  margin-bottom: 0.3rem;
`;

export const Link = styled(NextLink)``;
