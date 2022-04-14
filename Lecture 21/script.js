function outer(y){
    let var1=10
    function inner(z)
    {
        let var2=20
        console.log(y,z,var1,var2)
    }
   return inner 
}
let x=outer("abcdefg")
x("pqrst")

