#CSS Padding vs Margin
Run `less index.html` and `less styles.css` (press 'q' to exit `less`). Think about how this will render
on the page. Then run a simple http server with python, visit localhost, and open the inspector.

## Question 1:
Why does it appear that there's only one border?

In the inspector find the `.inner` rule. Change it's padding attribute to `50px`.

## Qestion 2:
Does the padding go between the node and it's parent, or between the node and it's child?

Change the padding back to 0px. Change the margin to 50px.

## Qestion 3:
Do margins go between the node and it's parent, or between the node and it's child?

Change the margins back to 0px. Find the `.outer` rule. Change it's padding attribute to 50px.

## Question 4:
How is padding in the parent similar to margins in the child?

Open index.html in your favorite text editor and give the inner div a sibling, like this:

```
<div class="inner">
	<h1>Inner div</h1>
</div>
<div class="sibling">
	<h1>Sibling to Inner div</h1>
</div>
```

Save index.html and open styles.css. Add a rule for the sibling class:

```
.sibling {
	border: solid;
	width:100%;
	padding:0;
	margin:50px;
}
```
Revisit localhost and open the inspector. Change the parent's padding to 50px and the sibling's margins
to 0px.

## Question 5:
How is padding in the parent element different from margins in the child element?

## Question 6:
When should you choose to put padding on the parent and when should you choose to put margins on the
child?

# Answers

1: because there's no padding on the outer and no margins on the inner elements. Both borders are
squished up next to each other.

2: Padding goes between a node and it's children. In this case, the child node was the text.

3: Margins go between a node and it's parent (and it's siblings too).

4: if there's only one child it's just space between them, and visually it doesn't matter "whose" space
it is.

5: if there are multiple children, margins will space out only the children it's applied to. Padding on
the parent node will space out all of the children.

6: Put padding on the parent when you want all of it's children to have space from it. Put margins on
the children when you need a specific child to have more space, or when all the children need space from
eachother.

