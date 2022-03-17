# Functions

- Functions are also a datatype in Javascript

## Function declaration
```
function func_name(x,y,z)
{
    //function definition
}
```

- return statement returns a value outside to the function where the function is called.

## Function Hoisting

- The functions are elevated or hoisted to the top of the program and if the function is called before it is defined, it will still work. 

## Function as a data type(variable)
### Function expression
```
var_name=function(parameters)
{
    //function definition
}
```

- Function declarations are always hoisted but function expression are not hoisted and the function need to be defined before it is called.


# Variables

- Scope of a variable- it is the section or area of the code where the variable is accessible.

```
function x(){
    y=7
}

console.log(y)
```

- Different scopes of variables in JavaScript

1. Global- x=7 - This variable is visible is everywhere in the program. Only condition for this is that the variable needs to be defined first.

2. var- The scope of the variable created using var is only limited to the function
```
var x=7
```
3. let - The scope of let is limited to a block