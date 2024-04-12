"use strict";

// 1. declaration
{
	const arr1 = new Array();
	const arr2 = [1, 2];
}

// 2. index
{
	const arr2 = [1, 2];
	console.log(arr2[0])
	console.log(arr2.length)
}

// 3. loop
{
	const arr2 = [1, 2];
	// a.
	// 이 방식은 key를 받아옴!!!! 배열에서는 인덱스를 받음
	for (let value in arr2) {
		console.log(value)
	}

	// b.
	for (let value of arr2) {
		console.log(value)
	}

	// c.
	console.clear()
	// arr2.forEach(function (value, index, array) { console.log(value, index, array)})
	arr2.forEach((array) => console.log(array))
	console.log('----------')
}



// 4. add, delete, copy
// note: unshift와 shift는 add와 delte보다 엄청 느림
{
	const arr2 = [1, 2];
	
	arr2.push(444444)
	console.log(arr2)

	arr2.pop()
	console.log(arr2)

	const tmp = [0, 111]
	arr2.unshift(0, 111)
	console.log(arr2)

	arr2.shift()
	console.log(arr2)

	arr2.splice(1, 1)	// 2번째 인자를 정하지 않으면 1번째 인자부터 다 지움
	console.log(arr2)

	arr2.splice(1, 1, 999, 1000)	// 지우고 대체도 가능
	console.log(arr2)
}

// combine arrays
const arrNew1 = [1,2,3,4];
const arrNew2 = [10, 20, 30, 40];
const comNew = arrNew1.concat(arrNew2)
console.log(comNew)
console.log('----------')


// 5. Searching
// console.clear()
{
	console.log(comNew.indexOf(10))			// 값의 인덱스 확인
	console.log(comNew.includes(-1000))		// 값이 있는지 없는지 판단
	
	comNew.push(10)
	console.log(comNew.lastIndexOf(10))		// 값의 마지막 인덱스 확인
}