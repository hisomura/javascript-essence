function F(a, b) {
  this.a = a;
  this.b = b;
}
F.prototype.c = function () {};

function G(a, b) {
  this.a = a;
  this.b = b;
  return { a, b };
}

const f = new F(1, 2);
console.log(
  f,
  f instanceof F,
  f.__proto__ === F.prototype
);

const g = new G(1, 2)
console.log(
  g,
  g instanceof Object,
  g.__proto__ === Object.prototype
);
