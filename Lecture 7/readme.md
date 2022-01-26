# Div and Span tags in HTMLS

## div tag
1. It creates a division in your HTML documents but it is in block element.
2. It helps you to select a portion of the HTML code and style it.

## span tag
1. It also creates a division in your HTML document but it is inline element.
2. It helps you to select and style. 


# Combinators

1. Adjacant Sibling combinator(+)

It selects all the paragraph tags which come after(adjacant) the heading tags.
 ```
 p{
     //style
 }

 h1+p{
     //style
 }
```
 2. General Sibling Combinator(~)
 It selects all the paragraphs which come after (even the adjacant ones) after the heading tags

 ```
h1~p{
    background-color: bisque;
}
 ```
 3. Child combinator(>)
 
 style sections of the HTML code
 

