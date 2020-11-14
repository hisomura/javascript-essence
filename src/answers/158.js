class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }

  map(callback) {
    const newArray = [];
    for (const index in this) {
      newArray[index] = callback(this[index]);
    }

    return new MyArray(...newArray);
  }

  forEach(callback) {
    this.map(callback);
  }

  push(value) {
    return new MyArray(...this, value);
  }

  filter(callback) {
    const answer = [];
    let lastIndex = 0;
    for (const index in this) {
      if (callback(this[index], index)) {
        answer[lastIndex] = this[index];
        lastIndex += 1;
      }
    }

    return new MyArray(...answer);
  }

  reduce(callback, initialValue) {
    let acc = initialValue ?? 0;
    for (const index in this) {
      acc = callback(acc, this[index], index);
    }

    return acc;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
  .map(double)
  .push(5)
  .filter(function (v, i) {
    return v > 2;
  })
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
