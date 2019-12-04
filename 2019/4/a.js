
const doMagic = () => {
  const min  = 128392;
  const max = 643281;
  let count = 0;

  for (i = min; i <= max; i++) {
    if (meetsCriteria(i)) {
      count++;
    }
  }

  return count;
}

const meetsCriteria = number => {
  const allNumber = number.toString().split('');
  let hasAdjacentDigit = false;
  let isNeverDecreasing = true;
  for (let i = 0; i < allNumber.length; i++) {
    let curr = allNumber[i];
    let next = allNumber[i + 1];
    if (curr === next) {
      hasAdjacentDigit = true;
    }
    if (curr > next) {
      return false;
    }
  }

  return hasAdjacentDigit && isNeverDecreasing;
}

console.log('ANSWER = ', doMagic());
