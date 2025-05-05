const dayTranslationAbbr: Record<number, string> = {
  1: 'Po',
  2: 'Út',
  3: 'St',
  4: 'Čt',
  5: 'Pá',
};

const dayTranslation: Record<number, string> = {
  1: 'Pondělí',
  2: 'Úterý',
  3: 'Středa',
  4: 'Čtvrtek',
  5: 'Pátek',
};

export function getDayAbbreviation(dayId: number): string {
  return dayTranslationAbbr[dayId] || 'Neznámý den';
}

export function getDayFullName(dayId: number): string {
  return dayTranslation[dayId] || 'Neznámý den';
}
