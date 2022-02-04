//JSON에 대한 구조분해 (=비구조 할당)
const object = {a:1, b: 2};

//JSON(혹은 객체)에서 값들을 추출하여 새로운 상수로 만들어 줌
// --> object에는 {} 안에 명시된 항목만 동일한 key를 갖는 데이터가 존재해야 함.
const {a, b} = object;

console.log(a)
console.log(b)

//구조분해를 활용하여 필요한 데이터만 추출하기
const data = { name: 'hello', age: 20, hegith: 172, weight: 85};
const {name} = data;
console.log(name);

//data안에 있는 heigth와 weigth를 분해하면서 이름을 h와 w로 변경
const { hegith: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);

//구조분해를 수행한 나머지를 별도로 분리하기
// --> 'rest_b' 라는 것은 단순한 변수 이름이므로 어떤 단어를 사용해도 무관
const dummy = { a1: 100, a2: 200, a3: 300, a4: 400};
const {a1, a2, ...rest_b} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);

//구조분해를 활용하여 기존 데이터와 추가적인 값을 병한한 새로운 객체 생성
// --> '...'뒤에 오는 변수명은 반드시 원본 객체 이름이어야 한다.
const origin = {name: 'javascript', age: 25};
const newdata1 = {...origin, gender: 'M'};
console.log(newdata1);

//구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 우너본 데이터를 수정한다.
const newdata2 = {...origin, age: 30, gender: 'F'}
console.log(newdata2)

// 배열에 대한 구조 분해
// 기본 사용
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

//구조분해를 수행한 나머지를 별도로 분리하기
[b1, b2, ...rest_b] = [1,2,3,4,5,6,7,8,9];
console.log(b1);
console.log(b2);
console.log(rest_b);