// https://en.wikipedia.org/wiki/Metric_prefix
const positivePowerSymbols = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
const negativePowerSymbols = ['', 'm', 'µ', 'n', 'p', 'f', 'a', 'z', 'y'];

/**
 * @param {number} number
 * @returns {number} The power of ten of that number.
 */
export function powerOfTen(number) {
  return number === 0 ? 0 : Math.floor(Math.log10(Math.abs(number)));
}

/**
 * Formats number to 3 digits, appending the appropriate metric prefix symbol
 * to the end, if necessary.
 *
 * Edge case: Shows '?' as the symbol if the number greater than or a tinier
 * fraction than the available symbols.
 *
 * @param {number} number
 * @returns {string} Number formatted to 3 digits.
 */
export function toPrecision3(number) {
  const power = powerOfTen(number);
  const isPositivePower = power > -1;
  const powerMultipleOf3 = isPositivePower
    ? Math.floor(power / 3)
    : Math.ceil(power / 3);
  const symbols = power > -1 ? positivePowerSymbols : negativePowerSymbols;
  let symbol = symbols[Math.abs(powerMultipleOf3)];
  // If number is out of range of the available symbols, show '?'.
  symbol = symbol === undefined ? '?' : symbol;

  const threeDigitNumber = (number / Math.pow(10, powerMultipleOf3 * 3))
    .toPrecision(3) // Handles rounding to the nearest 3 digit number.
    // Trim number to remove trailing 0s on fractions, while preserving
    // the sign and decimal point.
    .slice(0, number >= 0 ? 4 : 5);

  return threeDigitNumber + symbol;
}
