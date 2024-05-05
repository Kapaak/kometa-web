export const calculateEmFromPx = (px: number) => {
  return px / 16
}

export const minBreakpoint = (breakpoint: number) =>
  `(min-width: ${breakpoint}em)`

export const maxBreakpoint = (breakpoint: number) =>
  `(max-width: ${breakpoint}em)`
