let a={
    p:10,
    q:'abcd',
    r:false
}
console.log(a)
let b=Object.create(a)
console.log(b)      //{}
let c=Object.create(b)
c.p=30
console.log(c)          // {}
console.log("The value of p inside of c "+c.p)
