// synchornicity

//questions = why does criteria 1 look the way it does?
//https://www.geeksforgeeks.org/node-js-fs-readdir-method/


var fs = require('fs');

function run (generator){
    var it = generator(go)

    function go(err, result){
        if(err) return it.throw(err);
        it.next(result);
    }
    go();
}
run(function* (done) {
    var first;
    try {
    var dirFiles = yield fs.readdir('NoNoNo', done);
    var first = dirFiles[0];
    }catch(err){
    first = null;
}

    console.log(first);
});

// 1) create new generator-iterator object (it);
// 2) define the go function, which calls it.next;
// 3) pass go to the new generator-iterator object;
// 4) run go once with no arguments to start the generator

// In total go is called twice, once with no arguments (which starts the
// generator's execution) and second with the results of the fs call
// from the yield.

//my understanding of above:
// function* it(){
//     yield go;
// }


// const go = it.next();

//solution:https://github.com/isRuslan/learn-generators/blob/master/exercises/look_sync_do_async/solution/solution.js
