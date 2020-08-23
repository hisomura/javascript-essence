// レクチャー85
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};
// 復習。thisは宣言時のスコープで束縛されるためグローバルスコープのthisとして、グローバルオブジェクト
Person.prototype.hello2 = () => console.log("hello " + this.name);
window.name = 'Global Object Name'
console.log(window === this)

function Japanese(name, age, gender) {
  Person.call(this, name, age);
  this.gender = gender
}

Japanese.prototype = Object.create(Person.prototype);
Japanese.prototype.hello = function () {
  console.log("konnichiwa " + this.name);
};

const hana = new Person("Hana", 23);
const taro = new Japanese("Taro", 23, 'male');

console.log(hana);
console.log(taro);

hana.hello();
taro.hello();
taro.hello2() // プロトタイプチェーンで探しに行って表示

console.log(taro.hasOwnProperty('hello2'))
console.log('hello2' in taro)

// hasOwnPropertyはプロパティをオブジェクト自身内で、inはチェーン先まで探しに行く
console.log(taro.hasOwnProperty('hello2'))
console.log('hello2' in taro)
