import styled from 'styled-components';

import { Section, Scrollable as SScrollable } from '~/ui/components/atoms';

export const AvailableCoursesSection = styled(Section)`
  margin-bottom: 4rem;
`;

export const Scrollable = styled(SScrollable)`
  max-width: calc(100vw - 4rem);
`;
