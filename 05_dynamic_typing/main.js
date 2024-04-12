'use strict';

// js는 run time 시 할당된 값에 따라서 타입이 변경될 수 있음
// 반면 statical languate( C, C++ )은 런타임 전에 명시를 해야함

let text = 'hello';
console.log(text)

text = 1;
console.log(text)

text = '7' + 5;
console.log(text, typeof(text))	// string

text = '7' / '1';
console.log(text, typeof(text))	// number



// 주의해야할 사항
let text1 = 'hello';
console.log(text.charAt(0))

text1 = '7' / '1';
console.log(text1.charAt(0))	// run time에서 타입이 정해지므로 error