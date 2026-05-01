export function calculatePriceAfterDiscount(price: number, discount: number) {
  return price - price * (discount / 100);
}

export type SemesterHalf = 'first' | 'second';

function getHalfFromMidTerm(midTerm?: string): SemesterHalf | null {
  if (!midTerm) {
    return null;
  }

  return midTerm.trim() === '2. pololetí' ? 'second' : 'first';
}

export function getHalfFromDate(
  date: Date = new Date(),
  isAdultCategory = false
): SemesterHalf {
  const month = date.getMonth() + 1;
  const secondHalfStartMonth = isAdultCategory ? 1 : 2;

  // Czech school-year split: Feb-Jun is second half, remaining months are first half.
  // - Adult category has an exception where it starts from Jan
  return month >= secondHalfStartMonth && month <= 6 ? 'second' : 'first';
}

function getNextHalfFromDate(
  date: Date = new Date(),
  isAdultCategory = false
): SemesterHalf {
  const current = getHalfFromDate(date, isAdultCategory);
  return current === 'first' ? 'second' : 'first';
}

export function getSemesterPrice({
  priceYear,
  priceFirstHalf,
  priceSecondHalf,
  midTerm,
  date,
  isAdultCategory,
}: {
  priceYear?: number | null;
  priceFirstHalf?: number | null;
  priceSecondHalf?: number | null;
  midTerm?: string;
  date?: Date;
  isAdultCategory?: boolean;
}): number {
  const selectedHalf =
    getHalfFromMidTerm(midTerm) ?? getNextHalfFromDate(date, isAdultCategory);

  if (selectedHalf === 'first') {
    return priceFirstHalf ?? priceSecondHalf ?? priceYear ?? 0;
  }

  return priceSecondHalf ?? priceFirstHalf ?? priceYear ?? 0;
}
