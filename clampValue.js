
function clampValue(value, min, max) {

  if (min === max) {
    return min;
  }

  if (min > max) {
    throw RangeError("'min' should never be greater than 'max'!");
  }

  return Math.max(min, Math.min(max, value));
}

module.exports = clampValue;
