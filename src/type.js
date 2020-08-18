function printTypeValue(val) {
  console.log(typeof val, val);
}

let a = 0;
printTypeValue(a);

// 害悪過ぎる
let b = "1" + 1;
printTypeValue(b);

let c = b - 1
printTypeValue(c)

let d = c - null
printTypeValue(d)

let e = d - true
printTypeValue(e)

let f = parseInt("1") + 1;
printTypeValue(f);
