# Node.js

- It is basically a software that is used to run javascript code outside the web browser. It can your computer or an online IDE.

To run javascript code using Node.js :-

1. Open a new Terminal
2. Use the cd command(change directory command) to get to your file.
3. node _filename_


- new --> makes an object out of a function
- this --> it refers to the current location
- this points to the place where the function has been called
```
function Person(name,age)
{
    this.name=name
    this.age=age
    return 10
}
let p=new Person("Mehul",21)
console.log(p)
console.log(name)
console.log(age)
```
Person { name: 'Mehul', age: 21 } -- object

- When we use the new keyword, instead of function it creates an object

- An object is a collection of data types and also function
```
let x=7     // data type/ variable

let y={     // collection of datatypes/ object
    a:5,
    b:"hello"
}
```
10       20         
a-------->b------->c