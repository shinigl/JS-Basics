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

// let arr = [1 , 5 , "Namira" , 4] ;
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
// let str = "Namira is a hottie" ;
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

// let str2 = "Namira" ;

// console.log(str1.concat(str2));  s1.concat(string to be concatenated); 

// let res = str1 + str2 ;
// console.log(res);


let str = "namira"; //5K address
str = "Aniket" // 6K address
console.log(str);



