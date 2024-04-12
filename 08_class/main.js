// JS 내부에 포함된 object 참고하고 싶을 때
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

'use strict';

// If I already know, skip ...

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`${this.name}: hello!`)
	}

	// getter를 정의하는 순간 this.age를 호출하게 됨
	// 이 문제를 해결하기 위해 this._age로 해결
	// get age() {
	// 	return this.age;
	// }

	get age() {
		return this._age;
	}

	// setter 정의하는 순간 this.age = age를 호출할 때, setter를 호출함
	// 그래서 call stack이 꽉 차게됨
	// set age(value) {
	// 	this.age = value;
	// }

	// 이 문제를 해결하기 위해 this._age로 해결
	set age(value) {
		this._age = value
	}
}

const jm = new Person('jm', 20);
jm.speak()

console.log(jm.age)



// private, public, static
// 아직 사용하기에 불안정함. Chrome에서는 가능
class Experiment {
	static publisher = "Hi";
	publicFiled = 2;
	#privateFiled = 0;

	static printPublisher() {
		console.log(Experiment.publisher);
	}
}

const experiment = new Experiment();
console.log(experiment.publicFiled)
console.log(experiment.privateFiled)
console.log(Experiment.publisher)
Experiment.printPublisher()


// Inheritance
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());


// over-riding
class Trinangle extends Shape {

	draw() {
		super.draw();
		console.log(' ')
	}

	getArea() {
		return this.width * this.height / 2;
	}
}

const triangle = new Trinangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());




// instanceOf
// object가 class를 이용해서 만들어진건지 아닌지 판단
console.log(rectangle instanceof Rectangle);	// true
console.log(triangle instanceof Rectangle);		// false
console.log(triangle instanceof Trinangle);		// true
console.log(triangle instanceof Shape);			// true
console.log(triangle instanceof Object);		// true