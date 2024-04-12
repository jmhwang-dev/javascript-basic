'use strict';

// If I already know, skip ...


// rest paramters
// 배열 넘길 때 사용
function printAll(...args) {
	// 1
	console.log("1st for loop")
	for (let i=0; i<args.length; i++) {
		console.log(args[i]);
	}

	// 2
	console.log("2nd for loop")
	for (const arg of args) {
		console.log(arg)
	}

	// 3
	console.log("3rd for loop")
	args.forEach((arg) => console.log(arg));
}

printAll("hi", 'hello', '안녕')



// Local scope
let globalMessage = "global"
function printMessage() {
	let message = "hello";
	console.log(message);
	console.log(globalMessage)

	function printAnother() {
		console.log(message)
		let childMessage = 'hello'
	}

	// 안에서는 밖을 볼 수 있지만 밖에서는 안을 못봄
	// console.log(childMessage);	// error
}
printMessage()



// Early return
// 조건이 맞지 않는 경우에는 빨리 함수를 종료 시키는 것-
function updateUser(user) {
	if (user.age <= 10) {
		return;
	}

	//...
}


// function expression
const print = function() {	// anonymous function
	console.log("print");
}
print();

const printAgain = print;
printAgain();

// fuction declaration은 function hoisting이 가능함.
// 즉, 함수의 이름이 명시적으로 선언되어 있다면 그 함수 정의부 이전에 사용해도 함수 호출이됨


// Arrow fuction
// function expresion을 간결하게 만들어줌
const simplePrint = () => console.log('simplePrint!');
simplePrint();

// 1
const add1 = (a, b) => console.log(`${a + b}`)
add1(3, 4);

// 2
const add2 = (a, b) => a + b;
console.log(add2(4,5))

// 3
const add3 = (a, b) => {
	return a + b;
}
console.log(add3(1,2))


// // IIFE: Immediately Invoked Function Expression
// (function hello() {
// 	console.log("IIFE");
// })();

// -> 안됨..