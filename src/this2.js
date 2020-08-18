// window.name = 'John'

const person = {
  name: "Tom",
  hello: function (input) {
    console.log(`hello ${this.name} ${input}`);
  },
};

function fn(ref) {
  ref()
}
fn(person.hello)

fn.this = 'hoge'
fn(person.hello)

fn(person.hello.bind(person))
fn(person.hello.bind({}))
fn(person.hello.bind({name: 'hoge'}, 'input'))
