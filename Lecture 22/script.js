z=5
this.z=8
console.log("this.z= "+this.z)
console.log("z= "+z)

function Person(name,age,a)
{
    this.name=name
    this.age=age
    this.a=20
    console.log("this.a= "+this.a)
    console.log("a="+a)
    return 10
}
a=10
let p=new Person("Mehul",21,a)
console.log(a)

// console.log(p)
// console.log(typeof p)
//let x=new Person("Devesh",12,11)
// console.log(x)
//let y=Person("abcs",45)
//console.log(y)
