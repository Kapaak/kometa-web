import styled from 'styled-components';
import { Flex } from '~/ui/components/atoms';

export const ServiceSection = styled.section`
  padding: 1.5rem 2rem;
`;

export const Services = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  gap: 4rem;
`;
