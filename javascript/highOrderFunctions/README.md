# Higher Order Functions

Higher Order Functions are functions that take other functions as parameters. For the midterm you will
need to know the following four functions: `array.map(...)`, `array.reduce(...)`, `array.forEach(...)`
and `array.filter`. script.js has an exersize for each of these functions. The particular solution to
the problem won't be on the test, but higher order functions will be.

### map

A mapping is a function from one value to another. array.map(...) runs a given mapping on every element
in the array and returns it as a new array. Array.map has 1 required parameter, and optional parameters
won't be tested on the midterm. The one required parameter is a function with 1 required parameter and
2 optional parameters: currentValue (required), index (optional), array (optional). If you want to, look
up the specifics about the parameters [here] (https://www.w3schools.com/jsref/jsref_map.asp).

Try out the first excersize in script.js if you think you've got a handle on higher order functions. If
you're still confused take a look at script.js and try answering these questions:
	1. On line 14, is `arr` **passing** an array as a parameter to the function, or is it 
**defining** a parameter?
	2. Who passes the parameters to the anonymous function on line 14?
	3. How does .map get the array to work on?

### reduce

Reduce takes a function and an array and returns a single value. This can be useful for summarizing
data, or getting the max or min, or whatever it is you want. The first parameter takes three parameters:
total (required), currentValue (required), index (optional), and array (optional). Check out the full
specifications [here] (https://www.w3schools.com/jsref/jsref_reduce.asp).

Try out the second exersize in script.js, or open it up and answer these questions first.
	1. What does the anonymous function need to return?
	2. Where does reduce get it's return value?

### forEach

forEach takes a function and runs it on each element in the array. It's first parameter is a function,
and that function's first parameter is the element in the array. You can look up the optional arguments
[here] (https://www.w3schools.com/jsref/jsref_foreach.asp)

Try out the third exercise in script.js, or answer these questions:
	1. What does the anonymous function need to return?
	2. What does forEach return?

### filter

filter takes a function "test" and returns an array with the elements that passed the test. Just like
the other three, it's inner function has 3 values, currentValue, index, and array, and the second two
are optional. The inner function should return a boolean value that's truthy or falsey.

# Answers to questions
### map
	1. It's **Defining** the parameter, not passing it.
	2. The map function passes the parameters, we do not.
	3. The map function get's the data to pass as parameters from the array we call it on. In our
example from script.js we called it `array`, but we could have called it `jellybeans`, in which case,
we'd say `jellybeans.map(function(...`

### reduce
	1. Nothing. Anything returned by the anonymous function will be ignored.
	2. reduce returns the value stored in `total` at the end of the final call.

### forEach
	1. Nothing. Anything returned by the anonymous function will be ignored.
	2. forEach returns the value `undefined`.

In our example we get around the fact that forEach doesn't return anything by defining a variable `sum`.
This begs the question, Why would we use any of the other higher order functions if we can do everything
with forEach? The answer to that is because if we only use forEach we end up cluttering our code with
variables that should be going out of scope but never do. You can live your entire life using only
forEach, but why not make it simpler with other higher order functions?

# To remember for the midterm

The particular solutions to problems in the example aren't on the midterm. The problems I give here are
just to teach you about higher order functions and how they work. What you should remember for the test:
	- Higher order functions
	- The required parameters for the functions and their inner functions
	- What you need to return
	- The difference between defining and passing values in anonymous functions.
