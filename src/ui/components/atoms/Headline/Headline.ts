import { styled } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';

import { Text } from '../Text';

export const Headline = styled(Text).attrs({
  as: 'h2',
})(({ theme: { breakpoints, typography, colors, fonts } }) => ({
  color: colors.primary.main,
  fontFamily: fonts.secondary,
  letterSpacing: '0.1rem',
  ...{ ...typography.h3 },
  [`@media ${minBreakpoint(breakpoints.md)}`]: {
    fontSize: '4rem',
  },
  [`@media ${minBreakpoint(breakpoints.xl)}`]: {
    ...{ ...typography.h2 },
  },
}));
