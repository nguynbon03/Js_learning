function sumNumbers(start, end, isMatch) {
  let total = 0;
  for (let number = start; number <= end; number += 1) {
    if (isMatch(number)) total += number;
  }
  return total;
}

console.log('Tổng số lẻ:', sumNumbers(1, 100, (number) => number % 2 !== 0));
console.log('Tổng số chẵn:', sumNumbers(1, 100, (number) => number % 2 === 0));
