window.name = 'John'

const person = {
  name: "Tom",
  hello() {
    console.log(`hello ${this.name}`);
    console.log('hello ' + this.name);
    const a = () => console.log(`Bye ${this.name}` )
    a()
  },
};

person.hello()