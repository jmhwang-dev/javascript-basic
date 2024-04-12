'use strict';

// If I already know, skip ...

// strict equality
let stringFive = '5';
let numberFive = 5;
console.log('strict equality')
console.log(stringFive == numberFive);	// loose equality, with type equality
console.log(stringFive === numberFive);	// strict equality, not type conversion (type까지 동일해야함)
console.log()

const jm1 = {name: 'jm'};
const jm2 = {name: 'jm'};
const jm3 = jm1;
console.log('strict equality2')
console.log(jm1 == jm2);
console.log(jm1 === jm2);
console.log(jm1 === jm3);	// 동일한 ref 이므로 true
console.log()



// quiz
console.log('quiz')
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// Ternary opereator -> ?
// true면 : 기준 왼쪽 실행
console.log('jm' === 'jm1' ? 'yes': 'no')