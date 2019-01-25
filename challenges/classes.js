// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
  constructor(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.soecialty = instructorAttr.soecialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`
    }
  }
