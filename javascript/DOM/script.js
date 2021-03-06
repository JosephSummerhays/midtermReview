console.log("I can grab DOM elements");
// This code has some major bugs in it. fix it!
var e = document.getElementById("id");

// The DOM is best thought of as a TREE of NODES
// each node has links to it's children node.
// Our DOM might look like this
//		html
//		/   \
//	     div    script
//	     /  \
//	section  ol
//	 /  \	   \
//	h1   p	  /|\
//		 / | \
//	        li li li

// Try adding nodes to the dom so it looks like this
//			html
//			/   \
//		     div    script
//		     /  \
//		section  ol
//		 / | \	   \
//		h1 p /	   /|\
//		    /\	  / | \
//		   p  p  li li li
//		  /    \
// 	  "text Node"  "yay"

// this code is intentionally buggy. Don't trust it!
var node = document.createElement("p");
var textnode = document.createTextNode("text Node");
node.appendChild(textnode);

//should work now, right? (no).
e.appendChild(node);


