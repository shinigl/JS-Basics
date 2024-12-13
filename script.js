// Example : Initialization

// var a ; //No error
// let a ; //No error
// const a; //error

// 2. Declaration

// var a = 9 ;
// var a = 10 ;

// let a = 9 ;
// let a = 10 ; //Error, cant be re-declared , SYNTAX ERROR
// //     a = 10 ; // Can be updated

// const a = 9;
// const a = 10 ; // ERROR , cant be re-declared , SYNTAX ERROR
// a = 9 ;  //ERROR : TYPE ERROR



//BLOCK SCOPE

// function example(){

//     if(true){
//         x = 10;
//         console.log(x); // o/p : 10 , x is accessible in this if block 
//     }
//     console.log(x); // Reference Error :  undefined , x is not accessible outside the if block
// }

// example();

// Temporal Dead Zone

// console.log(x); //Reference Error 
// let x = 10;


//Explicit

// let x = 5 ;
// x = String(x) ;
// console.log(typeof(x));

//Implicit

// console.log(5 == "5");










