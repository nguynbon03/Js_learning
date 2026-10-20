function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) return false;
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
}

for (const number of [1, 2, 3, 4, 17, 20]) {
  console.log(number, isPrime(number) ? 'là số nguyên tố' : 'không phải số nguyên tố');
}
