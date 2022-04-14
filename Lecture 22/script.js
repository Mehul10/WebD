function Person(name,age)
{
    this.name=name
    this.age=age
    return 10
}
let p=new Person("Mehul",21)
console.log(p)
console.log(typeof p)
let x=new Person("Devesh",12)
console.log(x)
let y=Person("abcs",45)
console.log(y)
