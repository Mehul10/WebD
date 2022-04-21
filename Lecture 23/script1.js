let a={
    p:10,
    q:'abcd',
    r:false
}
let b=Object.create(a)
let c=Object.create(b)
c.p=30
console.log(b.__proto__==a) //true
console.log(c.__proto__==b) //true
console.log(a.isPrototypeOf(b))    // this will give true if b is created from a 
console.log(b.isPrototypeOf(c))     // will give true if c is created b
