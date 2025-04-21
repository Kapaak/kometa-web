import NextImage from 'next/image';
import styled from 'styled-components';
import { VerticalStack } from '~/ui/components/atoms';

export const Section = styled.section`
  color: ${({ theme }) => theme.colors.grey['100']};
`;

export const FirstLectureContainer = styled(VerticalStack)`
  padding: 3.6rem;
  border-radius: 1rem;
  gap: 4.2rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1 1 50%;
  border-radius: 0.5rem;
`;

export const Image = styled(NextImage)`
  object-fit: cover;
  flex: 1 1 50%;
  border-radius: inherit;
`;

export const DescriptionContainer = styled(VerticalStack)`
  gap: 2.4rem;
`;
