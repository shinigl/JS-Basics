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


// // undefined
// let user   ;
// console.log(user); // undefined


// //null
// let user2 = null ;   // null is a value which refers empty 
// console.log(user2); // null 



// let str = "Hi"
// console.log(isNaN(str)); // Kya ye number nahi hai? true , nahi hai !!



//var

// x = 5 ;
// console.log(x);
// var x ;        

// Hoisting is allowed in var

//let

// y = 5 ;
// console.log(y);
// let y ;

// Reference Error : Cant access 'y' before initialization


// const

// z = 5;
// console.log(z);
// const z;

// o/p : Syntax Error



// //create 
// const item = {
//     name : "bulb" ,
//     price : 150 ,
//     company: "havells"

// } ;

// // For-in loop : Loops through the keys of an object.

// for( let key in item ){
//     console.log(key , item[key]);
// }
// let arr = [1,3,4,5,6,7,8,9]

// //For-of loop : Loops through iterables like array

// for (let values of arr) {
//     console.log(values);
// }

// **Access by methods**

// let keys = Object.keys(item); //returns an array of keys
// let values = Object.values(item); //returns an array of values
// console.log(keys);
// console.log(values);



// **Square bracket notation**
// [] notation
// item["price"] = 250 
// console.log(item);


// item.price = 200; //update
// console.log(item.price);  //read

// delete item.price; //delete

// console.log(item);





// // <-----ARRAYS----->

// let arr = [1 , 5 , "JAVASCRIPT" , 4] ;
// console.log(typeof(arr)); //object

// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] == 5){
//         arr[i]= 2 ;
//     } else {
//         arr[i] = "Hey"
//     }
// }
// console.log(arr);

// let arr = [1,2,3,4,5]
// console.log(arr.toString()); // 1,2,3,4,5

// **split**
// let str = "JAVASCRIPT is a language" ;
// console.log(str.split(""));

// let arr = ['a','b','c']
// arr.pop();
// console.log(arr);

// **unshift**
// let arr = [1,2,3,4,5,6];
// arr.unshift(5);
// console.log(arr);

//**splice**

// let arr = [20 , 40 , 50 , 60 , 70 , 80]

// arr.splice(1,4,"hi","bye","bybye")

// console.log(arr);


//**slice**

// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,4));



// String concatenation ****

// let str1 = 'Aniket' ;

// let str2 = "JAVASCRIPT" ;

// console.log(str1.concat(str2));  s1.concat(string to be concatenated); 

// let res = str1 + str2 ;
// console.log(res);


// let str = "JAVASCRIPT"; //5K address
// str = "Aniket" // 6K address
// console.log(str);



// let str1 = "JAVASCRIPT" ;
// let str2 = "Food" ;

// console.log( `${str1} likes ${str2}` ); // o/p : JAVASCRIPT likes food


// **str.length***
// let str = "Ani"
// console.log(str.length);


//str.charAt()

// let str = "Aniket" ;
// console.log(str.charAt(2));


//str.replace()

// let str = "JAVASCRIPT is a good lang"

// console.log(str.replace("good","bad"));


// str.trim();
// let str = "    Aniket loves football      ".trim();

// console.log(str); 

//str.includes()

// let str = "fdbhjsajiojdcnkwodjc Aniket dsaOKSJNCBHAKJCDKKSJAkn dahhsjklcbha JAVASCRIPT".includes("Aniket")

// console.log(str);

// str.search()

// let str = "dswqbjhsidcnbwqjisa Aniket sdbjaknxzjncmsajkjxn JAVASCRIPT djndsjidknskwqosad      ioiskomlaw;o".search("JAVASCRIPTh");
// console.log(str);


//str.slice() 

// let str = "JAVASCRIPT is a language"

// console.log(str.slice(2,8));


//str.substr()

// let str = "JavaScript helps us to add dynamic features"

// console.log(str.substr(0,8));


// <-----Paramterized----->

// function getSum (a,b){
//     return a+b ; //7
// }

// let res = getSum(3,4);

// console.log(res);


// Anonymous function -> Function without a name 


// let arr = [2,5,3,5,1,0]

// arr.sort((a,b)=>a-b)

// console.log(arr)

//Arrow Function : Brackets, Arrow, Curly braces

// const fnxx = (parameter) =>{
//     //code
// }
// fnxx(arg);


// const fnx = (a,b) =>{
//     return a+b ;
// }

// let res = fnx(3,4);
// console.log(res);


// //Non-curried

// function add (x,y,z){
//     return x+y+z ;
// }

// console.log(add(2,3,4));

// //Curried

// function add(x){
//     return function(y){
//         return function(z){
//             return x+y+z;
//         }
//     }
// }

// console.log(add(2)(3)(4));


// Higher-Order Function that returns a function

// function operate(a, b, operation) {
//     return operation(a, b); 
    
//   }
  
//   // A simple function to add two numbers
//   function add(x, y) {
//     return x + y;
//   }
  
//   // Another function to subtract two numbers
//   function subtract(x, y) {
//     return x - y;
//   }
  
//   // Using the HOF with different operations
//   console.log(operate(5, 3, add));       // Output: 8 (5 + 3)
//   console.log(operate(5, 3, subtract));  // Output: 2 (5 - 3)
  

//IIFE
  let res = function getSum(a,b){
    return a+b;
  }(5,3);

console.log(res);