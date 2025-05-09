export function formatToCurrency(
  value: number,
  locale: string = 'cs-CZ',
  currency: string = 'CZK'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    minimumFractionDigits: 0,
    currency,
  }).format(value);
}
