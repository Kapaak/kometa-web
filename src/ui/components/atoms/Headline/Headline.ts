import { styled } from 'styled-components';

import { minBreakpoint } from '~/utils/dimensions';

import { Text } from '../Text';

interface HeadlineProps {
  size?: 'small' | 'normal';
  color?: string;
}

export const Headline = styled(Text)
  .attrs({
    as: 'h2',
  })
  .withConfig({
    shouldForwardProp: (prop) => prop !== 'size' && prop !== 'color',
  })<HeadlineProps>(
  ({
    theme: { breakpoints, typography, colors, fonts },
    size = 'normal',
    color,
  }) => ({
    color: color ?? colors.primary.main,
    fontFamily: fonts.secondary,
    letterSpacing: '0.1rem',
    ...{ ...typography.h3 },
    [`@media ${minBreakpoint(breakpoints.md)}`]: {
      fontSize: size === 'normal' ? '4rem' : typography.h3.fontSize,
    },
    [`@media ${minBreakpoint(breakpoints.xl)}`]: {
      ...(size === 'normal' ? { ...typography.h2 } : {}),
    },
  })
);
