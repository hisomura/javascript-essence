function incrementFactory() {
  let num = 0
  return function () {
    num += 1
    console.log(num)
  }
}

const increment = incrementFactory()
const increment2 = incrementFactory()

increment()
increment()
increment()

increment2()
increment2()

increment()
increment()
increment()
