export function formatToCurrency(
  value: number,
  locale: string = 'cs-CZ',
  currency: string = 'CZK'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}
