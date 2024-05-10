type Options<T> = {
  separator?: string
  defaultValue?: string
  filterFn?: (value: T) => boolean
}

export function joinValues<T>(values: T[], opts?: Options<T>): string {
  const options = {
    separator: ' ',
    defaultValue: '',
    filterFn: (value: T) => !!value,
    ...opts,
  }

  return (
    values.filter(options.filterFn).join(options.separator) ||
    options.defaultValue
  )
}

/**
 * Formats a string as a hyperlink reference.
 *
 * If the input string contains an '@' symbol, it's assumed to be an email address
 * and 'mailto:' is prepended to the string.
 *
 * If the input string doesn't contain an '@' symbol, it's assumed to be a telephone number
 * and 'tel:' is prepended to the string.
 *
 * @param value - The string to format.
 * @returns The formatted string.
 */
export function formatLink(value: string): string {
  if (value.includes('@')) {
    return `mailto:${value}`
  } else {
    return `tel:${value}`
  }
}
