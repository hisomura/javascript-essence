function a () {
  setTimeout(function  task1() {
    console.log('task1 done')
  })

  console.log('a done')
}

function b () {
  console.log('b done')
}

a()
b()
