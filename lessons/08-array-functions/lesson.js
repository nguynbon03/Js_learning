const scores = [5, 8, 10, 6];

scores.push(9);
console.log('Thêm phần tử:', scores);
console.log('Phần tử >= 8:', scores.filter((score) => score >= 8));
console.log('Điểm cộng 1:', scores.map((score) => score + 1));
console.log('Tìm điểm 10:', scores.find((score) => score === 10));
console.log('Sắp xếp giảm:', [...scores].sort((a, b) => b - a));
console.log('Nối chuỗi:', scores.join(', '));
