# Strings in Javascript

- double quotes, single quotes
- It is data type that is an array or sequence of characters

```
let str="this is a string"
let str1='this is a string'
```

- Escape characters- these are characters which escape from the sequence of strings 

## Functions of string

- str.length - size of the string
- str.find() - python

- str.indexOf() - JS

- str.replace(substring to be replaced, new substring)

- str[i].toUpperCase() - this changes the element temporarily to uppercase

- str.replace(str[i],str[i].toUpperCase())

Q. You have to change the number into its human form.

101 - 101st
27  - 27th
23  - 23rd

4th,5th,6th
1st,2nd,3rd

You will be given a number and you have to change that number to this human form
to access last element
```
let n=str.length
console.log(str[n-1])
```