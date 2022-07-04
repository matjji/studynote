import my1 from "./MyModule1.js";
my1();

//----------------------------------------

import { name, property, say, home } from "./MyModule2.js";

console.log(name);
console.log(property.id);
console.log(property.type);
say();

console.log(home.postcode);
console.log(home.address);
home.getAddress();

//---------------------------------------

import my3 from "./MyModule3.js";

var module_obj = new my3();
module_obj.say();

//---------------------------------------

//객체 형태의 모듈 참조
import my4 from "./MyModule4.js";

//리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출할 수 있다.
my4.say();
