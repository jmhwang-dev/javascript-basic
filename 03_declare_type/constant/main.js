"use strict";

// Mutable data type: 변경이 가능한 변수. let

// Immutable data type: 변경이 불가능한 변수. const
// 사용하는 이유
// - security: 한번 작성한 값을 변경하지 못하도록 방지
// - thread safety: 프로세스 내 thread가 동시에 값을 변경할 수 없도록 함
// - reduce human mistacke
const daysInWeek = 7;
console.log(daysInWeek)

// error
daysInWeek = 7;
console.log(daysInWeek)