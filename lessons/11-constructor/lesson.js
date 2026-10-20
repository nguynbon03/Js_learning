class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  summary() {
    return `${this.name}: ${this.score} điểm`;
  }
}

const firstStudent = new Student('An', 8);
const secondStudent = new Student('Bình', 9);

console.log(firstStudent.summary());
console.log(secondStudent.summary());
