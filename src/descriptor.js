'use strict' // これがないとwritable:falseに代入してもエラーが起きない

const obj = { prop: 0 };
// const obj2 = {}
Object.defineProperty(obj, "prop2", {
  value: 0,
  writable: true
});

console.log(Object.getOwnPropertyDescriptor(obj, "prop"));
console.log(Object.getOwnPropertyDescriptor(obj, "prop2"));
obj.prop2 = 1
console.log(obj.prop2)
