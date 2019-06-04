function Person (name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log('I\'m ' + this.name);
};

Person.prototype.eat = function () {
    console.log('eat...');
};

function Student (name) {
    Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var s = new Student('hj');
s.introduce();
s.eat();
console.log(Student.prototype.constructor);
