new Promise(function (resolve, reject) {
  console.log('promise')
  setTimeout(function () {
    resolve("resolved");
    // reject("rejected");
  }, 1000)
}).then(function (data) {
  console.log('then1', data)
  // throw 'throw1'
  return 'then1'
}).then(function (data) {
  console.log('then2', data)
  return 'then2'
}).then(function (data) {
  console.log('then3', data)
  return 'then3'
}).catch(function (data) {
  console.log('catch', data)
}).finally(function () {
  console.log('finally')
})

console.log('global end')

function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

sleep(0)
  .then(val => sleep(val))
  .then(val => sleep(val))
  .then(val => sleep(val))
  .then(val => sleep(val))
  .then(val => sleep(val))
