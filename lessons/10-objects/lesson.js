const student = {
  name: 'An',
  age: 20,
  introduce() {
    return `Mình là ${this.name}`;
  },
};

const { name, age } = student;
student.city = 'Hà Nội';

console.log(name, age);
console.log(student.introduce());
console.log(student.city);
console.log(student.school?.name ?? 'Chưa có trường');
