const rawText = '  JavaScript cơ bản  ';
const text = rawText.trim();

console.log('Độ dài:', text.length);
console.log('In hoa:', text.toUpperCase());
console.log('In thường:', text.toLowerCase());
console.log('Có chữ JavaScript:', text.includes('JavaScript'));
console.log('Thay thế:', text.replaceAll('cơ bản', 'thực hành'));
