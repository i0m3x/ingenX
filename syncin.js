// Exercise 4 of 6

// Try to throw/catch errors with generators.

//mistake: did not use boilerplate, nor try catch - used if-else

// ## Info

// The best thing generators bring to us is synchronicity. The code inside
// generator functions is synchronous, even if we iterate generators asynchronously.


// Write a generator-function upper that takes an array of strings and
// yields each of them in upper case.

// The problem: some person sent a number into the upper and it's broken.
// Please fix it. If upper gets a number it should return null.

function *upper (items) {
  for (var item of items) {
    try {
      yield item.toUpperCase();
    } catch (e){
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];
for (var item of upper(bad_items)){
  console.log(item);
}

//solution:https://github.com/isRuslan/learn-generators/blob/master/exercises/catch_error/solution/solution.js

//attempt 1
// function *upper (){ yield "here we go"}
//     if (typeof(word) != "string" ){
//         try {
//             console.log("enter a string")
//         }catch (err){
//             console.log('Error indeed')
//         }

//attempt 2

// words.forEach(function* catchIt(item, index, array) {
//   item.toUpperCase();
//   yield item;
//   if item.isInteger(){
//     return "null";
//   }
// })
// const caught = catchIt(words);

// attempt 2 - watched youtube video on forEach - learned about anon funcs - read MDN on generators

// https://www.youtube.com/watch?v=JD3ocY9zZ5w