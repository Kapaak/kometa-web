import styled from 'styled-components';

import { Scrollable as SScrollable } from '~/ui/components/atoms';

export const AvailableCoursesSection = styled.section`
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

export const Scrollable = styled(SScrollable)`
  max-width: calc(100vw - 4rem);
`;
