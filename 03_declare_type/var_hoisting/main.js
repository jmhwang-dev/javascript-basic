// var: do not use this!
// if declare 'use strict;', error

// hoisting: 변수가 어디 선언되어도 가장 위로 올려서 선언하는 것

console.log('hello');
// console.log(age);

age = 4;
console.log(age);

{
	age = 5;
	var age;
}
console.log(age);