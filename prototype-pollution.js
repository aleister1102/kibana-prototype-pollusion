label = {}

console.log(process.env.__proto__.__proto__ === label.__proto__); // true

label.__proto__.env = { AAA: 'a' }; // pollution

console.log(Object.prototype.env.AAA) // 'a'
console.log(process.env.__proto__.__proto__.env.AAA) // 'a'