const s = Symbol();
const obj = {
  prop1: 'value',
  prop2: 'value',
  prop3: 'value',
  [s]: 'value4'
}
Object.prototype.method = function () {}
Object.defineProperty(Object.prototype, 'method', {
  enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'method'))
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty'))
console.log(Object.getOwnPropertyDescriptor(obj, s))

console.log(obj)
for(let key in obj) {
  console.log(key, obj[key])
}

const arr = [1, 2, 3, 4]
console.log(arr)
for(let key in arr) {
  console.log(key, arr[key])
}
