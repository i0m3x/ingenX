//generators can be stopped while in process

//https://github.com/isRuslan/learn-generators/blob/master/exercises/run_stop_run/solution/solution.js


function* range(from,to){
    for(var i = from; i <= to; i++){
        yield i;
    }
}
for(var r of range(5,10)){
    console.log(r)
}

//incorrect attempt:

// function* range(from, to){

//     yield r;
  
// }
// const range = range(){
// for(let r of range(5,10)){
//     console.log( r );
// }


// }