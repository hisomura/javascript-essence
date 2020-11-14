class IterableObject {
  constructor(obj) {
    for (let prop in obj) {
      this[prop] = obj[prop];
    }
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }

  set(key, value) {
    this[key] = value;
    return this;
  }

  forEach(callback) {
    this.map(callback);
  }

  map(callback) {
    const newObject = new IterableObject();
    for (const index in this) {
      newObject[index] = callback(this[index], index, this);
    }

    return newObject;
  }

  *[Symbol.iterator]() {
    for (const key in this) {
      yield [key, this[key]];
    }
  }

  filter(callback) {
    const ans = new IterableObject();
    for (const key in this) {
      if (callback(this[key], key)) {
        ans[key] = this[key];
      }
    }

    return ans;
  }
}

function prefix(v, i, obj) {
  return "prefix-" + v;
}

const original = new IterableObject({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});

const result = original
  .map(prefix)
  .set("key4", "value4")
  .filter(function (val, key) {
    return key === "key4";
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
