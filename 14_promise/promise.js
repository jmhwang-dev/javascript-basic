'use strict';

// Promise : 비동기 수행을 위한 javascript object
// state: pending -> fulfilled or rejected

// Producer vs Consumer


// 1. Producer
// Promise 객체가 생성할 때, executor는 자동으로 실행됨
const promise = new Promise((resolve, reject) => {
	console.log('doing someting...');

	setTimeout(()=> {
		resolve('ellie');
		// reject(new Error('no network'));
	}, 2000);
});


// 2. Consumer
// then: 성공할 때 -> resolve
// catch: 실패 했을 때 -> reject
// finally: 성공 실패에 상관없이 마지막에 호출
promise
.then((value) => {
	console.log(value);
})
.catch(error => {
	console.log(error)
})
.finally(() => {
	console.log('finally')
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>resolve(num-1), 1000);
	})
})
.then(num => console.log(num));


// 4. Error handling
