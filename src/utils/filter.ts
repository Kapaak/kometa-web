/**
 * Filters out properties from an object that have empty values.
 * An empty value can be an empty array, undefined, or an empty string.
 *
 * @param values - The object to filter.
 * @returns A new object that only includes properties from the input object that do not have empty values.
 */
export function filterEmptyValuesFromObject<T extends { [key: string]: any }>(
  values: T
) {
  return Object.fromEntries(
    Object.entries(values).filter(([_, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== undefined && value !== '';
    })
  );
}
