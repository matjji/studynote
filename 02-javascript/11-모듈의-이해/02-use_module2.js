const my = require("./MyModule2");

console.log(my.name);
console.log(my.property.id);
console.log(my.property.type);

my.say();

console.log(my.home.postcode);
console.log(my.home.address);
my.home.getAddress()