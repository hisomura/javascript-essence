function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello2 = function () {
    console.log("hello " + this.name);
  };
}

function test() {}

// プロトタイプを使うのはメモリ節約のため
Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 33);
const sun = new Person("Sun", 20);

console.log(bob, tom, sun);

// ただの関数なのでグローバルオブジェクトのnameとageに値が格納
Person("Hoge", 88);

// プロトタイプのコンストラクタに格納されてるオブジェクトが同一であることの確認
console.log(
  "bob.__proto__.constructor === Person",
  bob.__proto__.constructor === Person
);

// プロトタイプオブジェクトが同一であることの確認
console.log("bob.__proto__ === tom.__proto__", bob.__proto__ === tom.__proto__);

// コンストラクタ関数のprototypeが__proto__と同一であることの確認
console.log(
  "bob.__proto__ === Person.prototype",
  bob.__proto__ === Person.prototype
);

// コンストラクタって循環参照してたんだ
console.log(
  "Person === Person.prototype.constructor",
  Person === Person.prototype.constructor
);
console.log(
  "Person.prototype.constructor === Person.prototype.constructor.prototype.constructor",
  Person.prototype.constructor ===
    Person.prototype.constructor.prototype.constructor
);

// オブジェクトを返す場合、本当にただのオブジェクト生成器として動く。
// __proto__.constructorにF1を持ち、値を格納されたthisは破棄される
function F1(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

F1.prototype.c = function () {};
const objectF1 = new F1(1, 2);
console.log("objectF1", objectF1);

function F2(a, b) {
  this.a = a;
  this.b = b;
}

// オブジェクトを返さない場合、thisを新オブジェクトとする
F2.prototype.c = function () {};
const objectF2 = new F2(1, 2);
console.log("objectF2", objectF2);

// newと同等の処理を行う関数
function newOpe(C, ...args) {
  const _this = Object.create(c.prototype);
  const result = C.apply(_this, args);
  // typeof null === "object" なのでnullチェックを入れる
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return _this;
}
