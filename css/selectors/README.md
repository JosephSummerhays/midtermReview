# Selectors quiz

These files are a demonstrations on how CSS selectors work. If you don't remember, a selector is the
first part of any rule. For example, `div.class` is a selector.

If you think you've got a handle on selectors, take the quiz by reading through the index.html and
styles.css and writing down what you think each element's color and hover color will be. There are
empty space tags to seperate the elements, so you can do the quiz one element at a time if you'd prefer.
If you can't tell which color an element is, you can open the inspector and double check. If you'd like 
to read a bit more on selectors before quizing yourself, read on.

### Basic Selector
A basic selector has an element followed by a class or id. The element (`div`) is also optional. In
fact, unless it's required, it's usually recommended you leave the element tag off (for faster 
rendering). classes start with a `.` and ids start with `#`. 

### Descendants
Each space between simple selectors represents decendancy. `div a` represents an `a` node that is a
descendant of a `div` node. A rule with a selector to `div section a` would apply to the `a` node with 
this genealogy:
```
root->html->body->div->section->a.
```

### Pseudo-classes (:hover)
A Pseudo-class or a Pseudo-element is used to select something that **can't** be a class or an element.
For example, the element the mouse is hovering over. It's not a class or element, but we can select it
with `:hover`. the hover pseudo-class works as a descendant as you would expect a class to. For example,
`div a:hover`.

### Specificity
When there's a conflict between two rules, CSS chooses the "more specific" one. For example a rule for
`a` is less specific than a rule for `div a`. In most cases, your general intuition about specificity
holds. For details about how specificity is calculated, see the non essential section.

# Essential take aways for the test.
You should know what the difference is between a **class** and an **id**
- syntax differences in css,
- syntax differences in html,
- and usage diferences.

You should know how the Pseudo-class :hover works. We won't test you on any other Pseudo-classes.

If you're worried because you got some wrong on the quiz about combinations of simple selectors (such as
the difference between `div.class p` and `div p.class` and `div .class`) don't worry. It's more
important that you know that you _can_ combine selectors, than it is to know the subtle differences in
how.

# Non essential, but interesting
This non essential section is not on the midterm, but can be important for developing, or knowing the
why behind what is going on. If you need to learn more for the midterm, skip this non essential section.

### Non essential selectors
A selector can have any number of classes on a single element. For example,
```
div.class.anotherClass.thirdClass
```
This selects all divs that have all three classes, `class`, `anotherClass`, and `thirdClass`. The list
of classes can be any length, but usually 0 or 1 classes.

Classes and ids are not mutually exclusive: `#id.class` is a valid selector, though it's redundant. (If
it has an id, there's only one anyway). You can have multiple ids, but this is also redundant.

### Combinations
A **simple selector** is one "part" of a selector. simple selectors can be combined with the following
operations.
- Space, for a descendant. Note that it isn't necessarily a direct descendant.
- right bracket, for a child. No other descendants.
- Plus, for an adjacent sibling.

For example, "div.class", "ol", "li, "a" and "section" are simple selectors, and can be combined like
this:
```
div.class ol>li a+section
```
This selects a section that is a sibling of a link descended from a list item that's a child of an
ordered list that's descended from a div with a class "class".

### Inheritance
If you want to leave a child's attribute up to it's parent, make it's value "inherited" as in:
```
.foo {
	color: inherit;
}
```

### attribute selectors
nodes can be selected by attributes they have. For example, to get all `a` links to `www.google.com` use
`a[href="www.google.com"]`. Or, to get `a` links using secure protocol use `a[href~="https"].`

### Specificity
Targeted rule's override inherited ones. Two targeted rules that are in conflict are decided based on
the number and type of their simple selectors. More simple selectors is more specific. Element and
pseudo-element selectors are the most specific, followed by attribute, class, and pseudo-class
selectors, followed by id selectors, which are the least specific of all. combinators and the wildcard
(`*`) have no effect on specificity.

Specificity can be artificially inflated by duplicating ids or classes. `#id#id.class.class` may be
redundant, but it's more specific than `#id` or `#id.class`. In general, this isn't great practice, but 
is **much** prefered over using !important.

### not pseudo-class
`not(a).` can be used to get everything that's not an `a` link. `not()` can be used on and in
combinations. For example `div+not(ol>li a)` for a div that is not the sibling of a `a` link descended
from the li child of an ol. `not()` does not affect specificity, but simple selectors inside it do.

### If you read all this
then you're an expert in all things css. Now go back and look at the basics for the midterm.
