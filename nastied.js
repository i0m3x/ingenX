//DELEGATING GENERATORS

//delegate iteration control from our generator to another

//mistakes: missed curlies, did not have if-else cond for checking if multi-d needed further accessing

function *flat (arr) {
    if (Array.isArray(arr)){
    for(var i = 0; i <arr.length; i++){
        yield* flat(arr[i])
    }
    }else{
        yield arr;
}
}
var A = [1,[2,[3,4],5],6];
for(var f of flat(A)){
    console.log( f )
}


//RESULTS FOR BELOW ATTEMPT

// 1.  ACTUAL:    "[ 1, 2, 3, 4, 5, 6 ]"
// 1.  EXPECTED:  "1"

// 2.  ACTUAL:    "1"
// 2.  EXPECTED:  "2"

// 3.  ACTUAL:    "2"
// 3.  EXPECTED:  "3"

// 4.  ACTUAL:    "3"
// 4.  EXPECTED:  "4"

// 5.  ACTUAL:    "4"
// 5.  EXPECTED:  "5"

// 6.  ACTUAL:    "5"
// 6.  EXPECTED:  "6"

// 7.  ACTUAL:    "6"
// 7.  EXPECTED:  ""




// function *flat(arr){
//     // yield arr.flat();
//     // yield arr.flat(1);
//     yield arr.flat(2);
// }
// var A = [1, [2, [3, 4], 5], 6];
// for(var f of flat(A)){
//     console.log( f )
//     }
// ----ATTEMPT END----

// var arr = [1, [2, [3, 4], 5], 6]
// console.log(arr[0])                 //1
// console.log(arr[1][0])               //2
// console.log(arr[1][1][0])           //3
// console.log(arr[1][1][1])           //4
// console.log(arr[1][2])              //5
// console.log(arr[2])                 //6

//this example that was provided does not work...

// function *foo(){
//     yield 2;
//     yield 3;
// }
// function *main(){
//     yield 1;
//     yield *foo();
// }

// for(var v of main() {
//     console.log(v);
// }
