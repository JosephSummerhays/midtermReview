console.log("I can pass functions into functions!");

var array = [ 1,5,8,2,6,5,23,876,3,31,67,97,342];

console.log("The Map function returns an array that has the given function");
console.log("operate on each of the elements of the given array");

console.log(array);
console.log("I wrote a function to map these values to themselves divided by the previous element");

//write a function that maps each value to itself divided by the previous element.
// if the previous element is 0 or if the element is the first in the array, return the value.

var mappedArray = array.map(function(currentValue, index, arr) {
	//your code here
});	// note, the anonymous function has three parameters, and the second two are optional.
	// note, array.map has two parameters, and the second one (not included here) is optional.

console.log(mappedArray);

console.log("I wrote a function to reduce an array to it's mean value");

var meanArray = array.reduce(function(total, currentValue, currentIndex, arr) {
	//your code here
});

console.log(meanArray);

console.log("I wrote a function to sum an array");
var sum = 0;

array.forEach(function(){
	//your code here
});
console.log("the sum is "+sum);

console.log("I wrote a function to filter out odd numbers");

var onlyEvens = array.filter(function(currentValue,i, arr) {
	//your code here
});

console.log(onlyEvens);

