// Time: 7803 ms (beats: 5.05%) | Memory: 66 MB (beats: 65.60%) | 739 - Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temps) {
  const out = [];
  let count = 0;

  for (let i = 0; i < temps.length; i++) {
    out[i] = 0;
    for (let j = i + 1; j < temps.length; j++) {
      count += 1;

      if (temps[j] > temps[i]) {
        out[i] = count;
        break;
      }
    }
    count = 0;
  }

  return out;
}
