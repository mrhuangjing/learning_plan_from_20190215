// 父类
function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    console.log(this.name, this.age);
};

// 原型链继承
// function Student (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype = new Person();

// let s = new Student('hj', 28);
// s.introduce();

// 构造函数式继承
// function Student (name, age) {
//     Person.apply(this, arguments);
// }

// let s = new Student('hj', 28);
// console.log(s.name, s.age);

// 组合式继承
// function Student (name, age) {
//     Person.apply(this, arguments);
// }
// Student.prototype = new Person();

// let s = new Student('hj', 28);
// s.introduce();

// 原型继承
// let Person = {
//     name: 'hj',
//     age: 28,
//     actions: ['speak', 'walk', 'jump']
// };

// function inherit (obj) {
//     function Student () {}
//     Student.prototype = obj;
//     return new Student;
// }

// // let s1 = inherit(Person);
// let s1 = Object.create(Person);
// s1.actions.push('think');
// // let s2 = inherit(Person);
// let s2 = Object.create(Person);
// console.log(s2.actions);

// 寄生式继承
// 在原型继承的基础上封装
// function para (obj) {
//     let s = inherit(obj);
//     s.getActions = () => {
//         console.log(obj.actions);
//     };
//     return s;
// }

// let stu = para(Person);
// stu.getActions();


// 寄生组合式继承
function Student () {
    Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let s = new Student('hj', 28);
s.introduce();
