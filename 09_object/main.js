'use strict';
// 1. Literals and properties

// 1-1. object literal syntax: curly bracket으로 만드는 방법
const jm1 = { name: 'jm', age: 4}

// 1-2. object constructor syntax: class를 정의
const jm2 = new Object();

// dynamic type language라서 아래와 같이 필드를 추가할 수도 있음
// 가능하면 피해서 작성해야함
jm1.hasJob = true;
console.log(jm1.hasJob);

// 삭제도 가능..
delete jm1.hasJob;
console.log(jm1.hasJob);

// 중요한점: object는 key, value의 집합이라는 점!


// 2. Computed properties - properites를 접근하는 방법
// 사용자의 입력을 받아서 출력하는 경우(동적인 경우)에 주로 사용
console.log(jm1.name);

// key는 string 타입으로 지정해서 받아와야함
console.log(jm1['name'])
jm1['hasJob'] = true
console.log(jm1.hasJob)

// ex)
const printName = (obj, key) => {
	console.log(obj[key])
}
printName(jm1, 'name')



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 2};
const person3 = { name: 'dave', age: 2};

const makePerson = (name, age) => {
	// 함수의 파라미터와 key가 동일하면 아래와 같이 key를 생략할 수 있음
	return { name, age };
}
console.log(makePerson('kkk', 2));


// 4. constructor function: object를 생성하는 방식
function Person(name, age) {

	// this = {}; // 생략됨
	this.name = name;
	this.age = age;
	// return this;	// 생략됨
}


// 5. in operator: propertiy existence check
// 해당 key가 존재하는지 확인
console.log('name' in jm1);
console.log('random' in jm1);




// 6. for .. in vs for .. of
// console.clear();
for (let key in jm1) {
	console.log(key);
}

// 배열과 같은 iterable object에 대해서 for .. of 사용
const arr = [1,2,3,4,5];
for (let value of arr) {
	console.log(value)
}




// 7. cloning
const user1 = { name: 'jm', age: '20' };
const user2 = user1
user2.name = 'coder';

// reference가 동일하기 때문에 user1이 바뀜
console.log(user1.name)


// cloning 하는 방법 1
const user3 = {};
for (let key in user1) {
	user3[key] = user1[key]
}
console.log(user3)

// cloning 하는 방법 2
const user4 = {};
Object.assign(user4, user1);
console.log(user4);

// cloning 하는 방법 3
const user5 = Object.assign({}, user1);
console.log(user5);





// 유의할점!
const fruit1 = { color: "red", size: "small"};
const fruit2 = { color: "blue", size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed)