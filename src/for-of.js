const arr = ["a", "b", "c"];
arr[4] = 'e'
Object.prototype.method = function () {};

Object.defineProperty(arr, 0, {
  enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(arr, 0))

for (let value of arr) {
  console.log(value);
}

for (let value of 'aiueo') {
  console.log(value);
}

console.log(arr);
for (let key in arr) {
  if (arr.hasOwnProperty(key)) console.log(key, arr[key]);
}
