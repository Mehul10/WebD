# Lecture 9

## Margin/padding/borders

- Border - The line which separates margin and padding
- Margin - The space between the border and the outside
- Padding - The space between the border and text
- Margin has the color of its parent
- padding has the color of the current element

## Pseudo selectors

- the selector which apply style to your element depending on the action from the user are pseudo selectors
1. hover

the visibilty of the tooltip should be set to hidden beforehand
```
.box:hover{
    //style
}
.box:hover .tooltip{
    visibility: visible;
}
```
2. active - when you click on the element
3. focus - applicable only on input element and applies when your curson is active inside it.