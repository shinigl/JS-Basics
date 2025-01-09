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
//   let res = function getSum(a,b){
//     return a+b;
//   }(5,3);

// console.log(res);



//STRING REVERSAL

// let str = "Im learning JS" ;
// let res = "";
// for(let i = str.length-1 ; i>=0 ; i--){
//    res+=str.charAt(i);
// }

// with method
// let res = str.split('').reverse().join('');
// console.log(res);



// let isAnagram = function(str1 , str2){
//     if(str1.length!==str2.length) return false ;

//     let freq = new Array(26).fill(0) ;

//     for(let i = 0 ; i < str1.length ; i++){
//          freq[str1.charAt(i) - 'a'.charCodeAt(0)]++ ;
//          freq[str2.charAt(i) - 'a'.charCodeAt(0)]-- ;
                
//     }

//     for(let i = 0 ; i < freq.length ; i++){
//         if(freq[i]!==0){
//             return false;
//         }
//     }
//     return true;
// };


// console.log(isAnagram("ANAGRAM","NAGARAM"));


//ARRAY INTERSECTION

// let ans = new Set();
// let intersection = function(arr1,arr2){
    
//     for(let i = 0 ; i < arr2.length ; i++){
//        if(arr1.includes(arr2[i])){  
//         ans.add(arr2[i]) 

//        }
//     }
//     return [...ans];
// }
// console.log(intersection([1,2,2,1], [2,2]));




//forEach  
// let arr = [1,3,5,7,3,2,4]

// arr.forEach((ele,idx,arr)=>{
//     console.log(ele);
//    })
   
// let obj = {
//     "name":"Aniket",
//     "age":23 ,
//     "phone":928292992
// }

// obj.forEach((ele)=>{
// console.log(ele);
// }) //TypeError


//MAP : It returns a new array according to user's operation

// let arr = [1,2,3,4,5]

// let res = arr.map((ele,idx,arr)=>{
//      return ele*=4 ;
// })

// console.log(res);

//FILTER : It returns a new array which gives true for a condition

// let arr = [1,2,2,3,1]

// let ans = arr.filter((ele)=>{
//     return ele > 2 ;
// })

// console.log(ans);


//REDUCE : It performs some operations and reduces the array to a single value .


// let arr = [ 1,2,3,4,5]

// let sum = arr.reduce((prev,curr)=>{
//      return prev+curr ;
// },0)

// console.log(sum);


// previousValue/accumulator       currentValue
// 0                         +         1
// 1                         +         2
// ...


// let arr = [5, 12, 8, 21, 3, 15, 7];

//1.Filter out numbers less than 10

//2. Double the remaining numbers using map

//3. Sum up the doubled number using reduce

// Chaining of methods
// let result = arr.filter((ele)=>{
//     return ele < 10 ;
// }).map((ele)=>{
//     return ele*2;
// }).reduce((acc,curr)=>{
//     return acc+curr;
// },0)

// console.log(result);


//ACCESS

// let heading = document.querySelector('h1');

// let div1 = document.querySelector('#div1');

//COUNTER PROJECT

// let count = document.querySelector('#count');
// let add = document.getElementById('add');
// let sub = document.getElementById('sub');
// let reset = document.getElementById('reset');
// let userInput = document.getElementById('userInput')
// console.log(userInput);

// let num = 0;

// add.addEventListener('click', ()=>{
//     let incrementedValue = parseInt(userInput.value) ;
//     // console.log(typeof(incrementedValue));
//     // console.log(incrementedValue);
//     num += incrementedValue ;
//     count.innerText = num ;
// });


// sub.addEventListener('click', ()=>{
//     let decrementedValue = parseInt(userInput.value) ;
//     num -= decrementedValue ;
//     count.innerText = num ;
// });

// reset.addEventListener('click', ()=>{
//     count.innerText = 0;
// });

//    document.getElementById('parent').addEventListener('click', function() {
//     console.log('Div clicked (bubbling phase)');
//   });

//   // Child element (button)
//   document.getElementById('child').addEventListener('click', function() {
//     console.log('Button clicked');
//   })




// parent.addEventListener('mouseenter',()=>{
//     parent.style.backgroundColor = 'black';
//     child.style.backgroundColor = 'yellow'
//     console.log(' Parent mouseEnter');

// })

// parent.addEventListener('mouseout',()=>{
//     parent.style.backgroundColor = 'green';
//     console.log('Parent mouseOut');
// })

// child.addEventListener('mouseenter',()=>{
  
//         child.style.backgroundColor = 'blue'
//         console.log('Child mouseEnter');
 
// })

// child.addEventListener('mouseout',()=>{
 
//         child.style.backgroundColor = 'pink'
//         console.log('Child mouseOut');

// })


// let child = document.getElementById('child')
// child.addEventListener('click', ()=>{
//     console.log('Btn is clicked');
// })

//true -> event will be triggered during capturing phase
//false -> event will be triggered during bubbling phase

// let input = document.getElementById('input_name');
// let submit = document.getElementById('btn');
// // let para = document.getElementById('para')

// submit.addEventListener('click',(e)=>{
  
//     e.preventDefault(); 

//    console.log(input.value);

//    console.log('Form was submitted');
// })


// let circleDiv = document.getElementById("circleDiv") ;

// let shape = document.getElementById("shape");

// shape.classList.add('square');


// Asynchronous programming

// // setTimeout
// console.log('First line executed');

// setTimeout(()=>{
//     console.log('Function execution');
// },3000)

// console.log('Second line executed');
// //O/P : First line executed
//         // Second line executed
//         // Function executed 

//setInterval

// let counter = 0 ;

// let interval = setInterval(()=>{
//     if(counter <5){
//     clearInterval(interval);

//     console.log(counter++);
//     }
// },3000)

// //o/p : 0
//         // 1
//         // 2 ... so on

// let arr  = [1,2,3]
// function first(){
//     setTimeout(()=>{
//         console.log('first fnx called');
//         arr.forEach((ele)=>{
//           console.log(ele+1);
//         }) 
//         arr.forEach((ele)=>{
//           console.log(ele+1);
//         }) 
        
//     })
// }
// function second(){
//     setTimeout(()=>{
//         console.log('second fnx called');
//     })
// }

// first();
// second();



//PROMISE

// let promise = new Promise((resolve,reject)=>{
    
//     resolve('Data retrieved')
//     // reject('Data fetched')
// })

// console.log(promise);


// promise.then((res)=>{
//     console.log('used forEach');
// }).catch((err)=>{
//     console.log('Error fetching data');
// })


// let api = `https://jsonplaceholder.typicode.com/todos/`

  
// async function getData() {
//      let result = await fetch(api) ;
     
//      console.log(result); // Return response object

//      let data = await result.json();
//      console.log(data);
  
// }

// getData() ;

// let btn = document.getElementById('btn');
// let display = document.getElementById('joke');



// async function fetchJoke(){

//     let apiUrl = `https://api.api-ninjas.com/v1/dadjokes`
//     let header = {
//         headers: {
//             'X-Api-Key': '9raQ+d2yDMHXn0i+c13/0A==sw0YqFrpPoVF8w5'
//         }
//     }
  
 
//     //1. Fetch Response Object
//     try{
//         //try the code
//     let response = await fetch(apiUrl,header) ;

//     //2. Convert the Response object to JSON ;
//     let data = await response.json();

//     console.log(data);

//     display.innerText = `${data[0].joke}`
//     }
//     catch(err){
//         //error handling
//         console.log('Error');
//         display.innerText = 'Error'
//     }
      
// }




// btn.addEventListener('click',fetchJoke)