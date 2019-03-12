# Javascript and the DOM

When the HTML is loaded into the browser it's stored as a data structure called a tree. Each element tag
becomes a node. The tag that contains it is it's "parent". Tags inside of it are children. You can find 
a representation of the DOM tree in the script.js comments. When you get to the bottom of the tree, you
get a text node. The tree for `<html><body>Hello</body></html>` would be root->html->body->"Hello".
"Hello" is the text node.

Try drawing the DOM, leaving off the text nodes, and compare it with the tree in the comments of
script.js.

When you create a node (an html tag), using `document.createNode('tag')`, it creates a node that has no
parent or children. If a node can't trace it's ancestory back to the root node, it won't be rendered.
To insert into the DOM, call `parentNode.appendChild(childNode)` on any parent node that is connected to
the root.

### Exercise and Summary
Open the javascript file, read the description, fix any bugs, and run it on localhost. Do the two new 
tags render?

For the midterm, the main points to remember are
	- The DOM can be represented as a tree.
	- I can create new nodes using Javascript.
	- I can insert them into the DOM by appending to a parent that can trace back to the root.
