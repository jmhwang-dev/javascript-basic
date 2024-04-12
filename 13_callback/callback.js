'use strict';

// javascript is synchronous.
// 즉, hoisting 이후부터 순차적으로 동기적으로 실행된다는 의미
// hoisting: var, function declaration들이 제일 위로 자동으로 이동하는 것

// 비동기 실행 예
// console.log('1');
// setTimeout(() => console.log('2'), 1000)	// brower api. browser에 먼저 요청하게 됨
// console.log('3')


console.log('---callbakc hell example---');
// call back hell
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(()=>{
			if (
				(id === 'ellie' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout( () => {
			if (user === 'ellie') {
				onSuccess({ name: 'ellie', role: "admin" })
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

function onSuccess(id) {
	console.log(`login success: ${id}`);
}

function onError(error) {
	console.log(error)
}

const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');

userStorage.loginUser('ellie', 'dream', onSuccess, onError);
userStorage.getRoles('ellie', onSuccess, onError)

