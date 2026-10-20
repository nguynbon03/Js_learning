function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('Không thể chia cho 0');
  }
  return dividend / divisor;
}

for (const divisor of [2, 0]) {
  try {
    console.log(`${10} / ${divisor} =`, divide(10, divisor));
  } catch (error) {
    console.log('Lỗi:', error.message);
  } finally {
    console.log('Đã xử lý phép chia.');
  }
}
