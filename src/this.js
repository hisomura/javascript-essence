// window.name = 'John'

const person = {
  name: "Tom",
  hello: function () {
    console.log("hello " + this.name);

    const person = {
      name: "Tim",
      hello: function () {
        console.log("hello " + this.name);
        a()
      },
    };
    person.hello()
    a()
  },
};
person.hello();
const ref = person.hello;
ref();
function a() {
  console.log("hello " + this.name);
}
a()
