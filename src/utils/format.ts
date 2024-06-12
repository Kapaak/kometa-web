type Options<T> = {
  separator?: string;
  defaultValue?: string;
  filterFn?: (value: T) => boolean;
};

export function joinValues<T>(values: T[], opts?: Options<T>): string {
  const options = {
    separator: ' ',
    defaultValue: '',
    filterFn: (value: T) => !!value,
    ...opts,
  };

  return (
    values.filter(options.filterFn).join(options.separator) ||
    options.defaultValue
  );
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
    return `mailto:${value}`;
  } else {
    return `tel:${value}`;
  }
}

/**
 * Formats a string to be used as an option value.
 *
 * The function performs the following transformations:
 * 1. Normalizes the string to the Unicode Normalization Form D (NFD) to decompose combined graphemes into the combination of simple ones.
 * 2. Removes diacritics from the string.
 * 3. Converts the string to lowercase.
 * 4. Replaces all spaces in the string with hyphens (-).
 *
 * @param name - The string to format.
 * @returns The formatted string.
 */
export function formatStringToOption(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}
