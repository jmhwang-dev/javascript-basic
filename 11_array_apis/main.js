"use strict";

// join
console.log("---join---")
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join('|');
	console.log(result)
}

// split. regex도 가능
console.log("---split---")
{
	const fruits = 'apple, banana, orange';
	const result = fruits.split(', ');
	console.log(result)
}

// reverse
console.log("---reverse---")
{
	const arr = [1,2,3,4,5];
	const result = arr.reverse();
	console.log(result)
}

// slice: start, end. end는 배제됨. 변경된 결과를 반환
// splice는 배열 자체를 변경함
console.log("---slice---")
{
	const arr = [1,2,3,4,5];
	const result = arr.slice(2, 5);
	console.log(result);
}



// ---


class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88)
];

console.log("---find---")
{	
	// 90점인 학생 찾기
	// arrow function은 한줄일 때 return 제외 가능
	const result = students.find( (student) => student.score === 90 );
	console.log(result)
}

console.log("---filter---")
{	
	// enrolled === true인 학생들 찾기
	const result = students.filter( (student) => student.enrolled );
	console.log(result);
}

console.log("---map---")
{	
	// 점수만 뽑아서 보기
	const result = students.map( (student) => student.score );
	console.log(result);
}

console.log("---some---")
{
	// 점수가 50보다 작은 학생이 있는가?
	const result = students.some( (student) => student.score < 50 );
	console.log(result);
}

console.log("---every---")
{
	// 모든 학생들의 점수가 50보다 큰가?
	const result = students.every( (student) => student.score >= 50 );
	console.log(result);
}

console.log("---reduce---")
{
	// 이전 값을 초기화 할 수 있음 (2번째 인자)
	const result = students.reduce( (prev, curr) => prev + curr.score, 0 );
	console.log( result/students.length );
}

console.log('---복합문제1---')
{
	// 점수를 모두 합쳐서 string으로 변환
	const result = students.map( (student) => student.score).join();
	console.log(result)
}

console.log('---복합문제2---')
{
	// 50점 이상인 점수를 모두 합쳐서 string으로 변환
	const result = students
	.map( (student) => student.score )
	.filter( (score) => score >= 50 )
	.join();
	console.log(result)
}

console.log('---복합문제3---')
{
	// 오름차순 정렬
	const result = students
	.map((student) => student.score)
	.sort((a, b) => a-b)
	.join();
	console.log(result)
}

console.log('---복합문제4---')
{
	// 내림차순 정렬
	const result = students
	.map((student) => student.score)
	.sort((a, b) => b-a)
	.join();
	console.log(result)
}