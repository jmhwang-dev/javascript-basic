// 1. object to json
{
	let json = JSON.stringify(true);
	console.log(json);

	json = JSON.stringify(['apple', 'banan']);
	console.log(json)
}


// example
const rabbit = {
	name: 'tori',
	color: 'white',
	birthDate: new Date(),

	// stringify()에 포함되지 않는 것들
	symbol: Symbol("id"), 		
	jump: (name) => console.log(`${name} can jump!`)
};

console.log("--stringify--")
{
	// object to json 기본
	let json = JSON.stringify(rabbit)
	console.log(json)
}

{
	// 원하는 property만 저장할 수 있음
	let json = JSON.stringify(rabbit, ['name'])
	console.log(json)
}

{
	json = JSON.stringify(rabbit, ['name', 'color', 'birthDate'], (key, value) => {
		console.log(`key: ${key}, value: ${value}`);
		return value;
	});

	// rabbit object를 감싸고 있는 최상위 object가 먼저 return 됨
	console.log(json)
}

{
	json = JSON.stringify(rabbit, ['name', 'color', 'birthDate'], (key, value) => {
		console.log(`key: ${key}, value: ${value}`);
		// 값을 지정할 수 있음
		return key === 'name' ? 'jm':value;
	});

	console.log(json)
}


// 2. json to object
console.log("--parse--")
{
	json = JSON.stringify(rabbit, (key, value) => {
		return key === 'name' ? 'jm':value;
	});

	// console.log(json)
	const obj = JSON.parse(json)
	console.log(obj)

	// stringify 과정에서 없어지는 녀석들은 다시 추가해줘야함
	obj.jump = (name) => console.log(`${name} can jump!`)
	obj.jump('hihi')
}

{
	let json = JSON.stringify(rabbit);
	const obj = JSON.parse(json);
	console.log(rabbit.birthDate.getDate());
	// console.log(obj.birthDate.getDate()); // error. string으로 할당 됐기 때문
}

{
	let json = JSON.stringify(rabbit);
	const obj = JSON.parse(json, (key, value) => {
		return key === 'birthDate' ? new Date(value) : value;
	});
	console.log(rabbit.birthDate.getDate());
	console.log(obj.birthDate.getDate()); // correct
}

// json에 무엇이 달라졌는지 확인하는 사이트: http://www.jsondiff.com/
// json format이 망가지는 경우 웹 사이트에서 복구: https://jsonbeautifier.org/
// json의 object가 어떻게 표기되어지는지 확인: https://jsonparser.org/
// json 유효성 검사: https://tools.learningcontainer.com/json-validator/