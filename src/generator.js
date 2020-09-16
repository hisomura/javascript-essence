// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Use_of_the_yield_keyword
// アロー関数内ではyieldが使えないのでジェネレータは作成できない。

function* gen(max = 10) {
  for (let i = 0; i < max; i++) {
    yield i;
  }
}

const obj = {
  [Symbol.iterator]: gen.bind(null, 15),
};

const obj2 = {
  *[Symbol.iterator](max = 10) {
    for (let i = 0; i < max; i++) {
      yield i;
    }
  },
};

for (const i of obj) {
  console.log(i);
}

for (const i of obj2) {
  console.log(i);
}

for (const j of gen(10)) {
  console.log(j);
}