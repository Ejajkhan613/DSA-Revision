// You are provided an integer N.

// For all numbers in the range [1, N], 
// including N you have to print a string as per the following rules:

// Print `Hello`, if the number is a multiple of both 5 and 7.
// Print `Namaste`, if the number is a multiple of 7 only.
// Print `Hola`, if the number is a multiple of 5 only.
// Else in all other cases print `Hurray`

let N = 7;

for(let a = 1; a<=N; a++){
    if(a%5 == 0 && a%7 == 0){
        console.log("Hello")
    } else if(a%7 == 0){
        console.log("Namaste")
    } else if(a%5 == 0){
        console.log("Hola")
    } else {
        console.log("Hurray")
    }
}