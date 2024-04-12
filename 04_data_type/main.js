'use strict';

// number
const count = 17;
const size = 14.1;
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
const bigInt = 123123n;


// string
const char = 'c';
const brandan = 'brendan';
const helloBrandan = `hi ${brandan}` // template literals(string)
console.log(helloBrandan)

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const test = 3 < 1; // false


// null
// 텅텅 비어있는 것. 명확하게 명시
let nothing = null;

// undefined
// 선언은 됐지만 아무 값이 없음
let x;
let y = undefined;



// Symbol
// 우선순위를 주고 싶을 때, 식별자를 부여
// creat identifiers for objects
// 동일한 string으로 식별자를 부여하더라도 다른 객체임
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2)	// false

// 동일한 식별자로 만들고 싶은 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2)	// true

// symbol 값은 항상 string으로 변환한 후 출력해야함
console.log(`value: ${symbol1.description} type: ${typeof(symbol1)}`)




// object
const jm = {last_name: 'h', age: 11};
console.log(jm.last_name, jm.age)