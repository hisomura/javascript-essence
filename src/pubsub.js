const events = {
  callbacks: {
    beforeInit:[],
    afterInit:[]
  },
  on: function (point, fn) {
    if (point === 'beforeInit' || point === 'afterInit') {
      events.callbacks[point].push(fn)
    }
  },
  off: function (point, fn) {
    if (point === 'beforeInit' || point === 'afterInit') {
      events.callbacks[point] = events.callbacks[point].filter(callback => callback !== fn)
    }
  },
  emit: function (point) {
    if (point === 'beforeInit' || point === 'afterInit') {
      events.callbacks[point].map(fn => fn())
    }
  }
}

class MyLibrary {
  constructor() {
    events.emit('beforeInit');

    console.log('library process');

    events.emit('afterInit');
  }
  method() {
    // do something
  }
}
function customFn1() {
  console.log('customFn1');
}
function customFn2() {
  console.log('customFn2');
}
function customFn3() {
  console.log('customFn3');
}

events.on('beforeInit', customFn1);
events.on('beforeInit', customFn2);
events.off('beforeInit', customFn1);
events.on('afterInit', customFn3);

new MyLibrary()

