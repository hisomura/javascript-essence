function a() {
  console.log('called')
}

a();

(function () {
  console.log('called')
})()

const b = function () {
  console.log()
}()

console.log(b)