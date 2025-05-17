/**
 * Returns an array of times (hours) to be used as columns in a calendar grid.
 * Ensures up to 4 columns by filling in missing hours or adding blank columns as needed.
 *
 * - If there are 4 or more times, returns the sorted times (no blanks).
 * - If there are 3 times, fills in missing hours between min and max, and adds at most one blank (before or after) to reach 4 columns.
 * - If there are 2 times, fills in missing hours between them and adds up to `maxBlankTimes` blanks (before and/or after) to reach 4 columns.
 * - Never returns more than 4 columns.
 *
 * @param {number[]} times - Array of hour values.
 * @param {number} [maxBlankTimes=2] - Maximum number of blank columns to add.
 * @returns {number[]} Array of times (including blanks) to display as columns in the calendar.
 */
export function getFilledTimes(
  times: number[],
  maxBlankTimes: number = 2
): number[] {
  if (times.length < 2) return times;

  const sorted = [...times].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  // If 4 or more, just return sorted (no blanks)
  if (sorted.length >= 4) {
    return sorted;
  }

  // Fill in all hours between min and max
  let filled: number[] = [];
  for (let t = min; t <= max; t++) {
    filled.push(t);
  }

  // For 3 times, add at most 1 blank (before or after)
  if (sorted.length === 3) {
    if (filled.length < 4) {
      if (max - min === 2) {
        // consecutive, can add before or after
        if (maxBlankTimes > 0) {
          // Prefer before, then after
          filled = [min - 1, ...filled];
          if (filled.length > 4) filled.pop();
        }
      }
    }
    // Limit to 4 columns
    return filled.slice(0, 4);
  }

  // For 2 times, add up to maxBlankTimes blanks (before and/or after)
  if (sorted.length === 2) {
    let blanksAdded = 0;
    while (filled.length < 4 && blanksAdded < maxBlankTimes) {
      if (filled.length < 4) {
        filled = [filled[0] - 1, ...filled];
        blanksAdded++;
      }
      if (filled.length < 4 && blanksAdded < maxBlankTimes) {
        filled = [...filled, filled[filled.length - 1] + 1];
        blanksAdded++;
      }
    }
    // Limit to 4 columns
    return filled.slice(0, 4);
  }

  // Default: just return filled
  return filled;
}
