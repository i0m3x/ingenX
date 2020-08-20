// generators are iterators. 
// They are just a wrapper of an iterator object (see iterator protocol below).

// Generators don't execute the first time they're called but instead
// return an iterator object with a few methods (send, next, throw, close).

function *factorial(n){
    //set a var
    var result = 1;             //must be a var to work
    for(var i = 1; i <=n ; i++){
        result *= i;
        yield result;
    }
}
for( var n of factorial(5)){
    console.log(n)
}

//MISTAKE: did not understand var is the only one that is globally scoped - used const to no avail - const does  not work in this case b/c yield means it gets reassigned

//key: https://github.com/isRuslan/learn-generators/blob/master/exercises/generator_iterator/solution/solution.js

//incorrect attempt:

// function *factorial(n){
//     if(n==1){
//         yield 1;
//     }
//     yield(n * factorial(n-1))
// }
// for( var n of factorial(5)){
//     console.log(n)
// }
//1, 2, 6, 24, 120