let arr=["a","b",3,true]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
arr.push("mango")
arr.push(77)
console.log(arr)
arr.pop()
console.log(arr)
console.log(3,2,8)
function area() //finds the area of a figure.
{
    let ans=1;
    for(let i=0;i<arguments.length;i++)
    {
        ans=ans*arguments[i]
    }
    return ans
}

