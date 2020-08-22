// レクチャー82 関数コンストラクター

// 名前無しだとnameがanonymousに
const fn1 = new Function("a", "b", "return a + b");
console.log(fn1(1, 2));
console.dir(fn1);

// 自分で付与することも可能
function anonymous(a, b) {
  return a + b;
}

console.dir(anonymous);

// どれもFunctionがコンストラクタなので__proto__が共通
console.log(fn1.__proto__ === anonymous.__proto__);
// console.log(fn1.prototype.constructor === anonymous.prototype.constructor)


const d = 0;
function wrap() {
  const d = 1;
  return [
    new Function("a", "b", "return a * b * d"),
    function (a, b) {
      return a * b * d;
    },
    (a, b) => a * b * d,
  ];
}

// new Functionで作った場合はローカルスコープで作成されないのでdが束縛されない。
const [fn2, fn3, fn4] = wrap();
console.log(fn2(1, 2), fn3(1, 2), fn4(1, 2));


