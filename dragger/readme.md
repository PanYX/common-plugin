Dragger
=======

This is a light and easy-to-use ui library for dragging a element relying on no other library.

# How to use it

> import the script in your html, create a dragger instance with the constructor method Dragger,and pass three params to it, that`s it.

# Case

`
	var dragger = new Dragger(draggerEl,moveEl,borderEl);
`

# Params explaining

## draggerEl

> Necessary.The element which is dragged.

## moveEl

> The element you want to move.If no pass, draggerEl will be a moveEl instead.

## borderEl

> The border you want moveEl to box up.If no pass, moveEl`s movement will not be limited.