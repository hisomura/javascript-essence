setTimeout(function task1() {
  console.log('task1')
  Promise.resolve().then(function job3() {
    console.log('job3')
  }).then(function job4() {
    console.log('job4')
  });
}, 1000)

setTimeout(function task1() {
  console.log('task2')
}, 1000)

new Promise(function promise(resolve) {
  console.log("promise");
  resolve("job1");
}).then(function job1() {
  console.log('job1')
}).then(function job2() {
  console.log('job2')
});

console.log('global end')
