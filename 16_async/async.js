'use strict';

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
	await delay(1000);
	return 'apple'
}

async function getBanana() {
	await delay(1000);
	return 'banana'
}

async function pickFruits1() {
	// 순차적으로 진행
	const apple = await getApple();
	const banana = await getBanana();
	return `${apple}+${banana}`;
}

async function pickFruits2() {
	// 병렬적으로 수행
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple}+${banana}`;
}

async function pickFruits3() {
	// pickFriuts2 개선
	return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'))
}

console.time('fruit1')
pickFruits1().then(console.log)
console.timeEnd('fruit1')

console.time('fruit2')
pickFruits2().then(console.log)
console.timeEnd('fruit2')

console.time('fruit3')
pickFruits3().then(console.log)
console.timeEnd('fruit3')


// 먼저 리턴하는 것을 출력
function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

console.time('only_one')
pickOnlyOne().then(console.log);
console.timeEnd('only_one')