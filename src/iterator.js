function genIterator(max = 10) {
  let i = 0;

  return {
    next: function () {
      if (i >= max) {
        return {
          done: true,
        };
      }

      return {
        done: false,
        value: i++,
      };
    },
  };
}

// const it = genIterator(10)
// let a = it.next();
// while (!a.done) {
//   console.log(a.value);
//   a = it.next();
// }

const obj = {
  [Symbol.iterator]: genIterator
}

for (const i of obj) {
  console.log(i)
}

console.log(new Set(obj))

const obj2 = {
  prop1: "value",
  prop2: "value",
  prop3: "value",
};

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this)
  let i = 0
  let _this = this;
  return {
    next: function () {
      let key = keys[i++]
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      };
    },
  };
};

// const items = Object.entries(obj)
for (let item of obj2) {
  console.log(item)
}
