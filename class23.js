
//****************variable, var , let , const ******/




//indefine//
// function foo(){
//     var name = "tasbia"

// }
//  console.log(name)


//  var name = "joony"

// function foo(){
//      name = "tasbia"

// }
//  console.log(name)

////***function call**//   ^global variab in javascript we get easily^
//  var name = "joo"   //<<<ans<<joo<< in consol//

// function foo(){
//     var name = "tasbia"

// }
// foo()                //function call
//  console.log(name)   //consol


// var is function scop>//
// //
//  var name = "joo"

// function foo(){
//      name = "tasbia"  // <<<ans< tasbia<<//

// }
//  console.log(name)




// if(true){
//     var name = "tasbia" ; //<<ans<tasbia<// 
// }
// console.log(name)



//**in ES6  */


// if(true){           //let scop start <in curly bruces>
// let fullname ="tasbia"   

// }
//        //ERR// fullname not define
// console.log(fullname) //out side condetion

 // let scop in crly bruces{} / and  var scop is globaly


//***********javascript ES5 **********///


// var lastname = "khanyy";
// var lastname = "jonny"        //<<ans < bcz in ES5 we write evr time  var name same 

// console.log(lastname)
 


///let keyword//
// let lastname = "khanyy";
// let lastname = "jonny"      //^samename nvr use again end again in let    
                     
// console.log(lastname)       //<<ERR<  identifer `lastname` has already been declared

// console only one
// let lastname = "tasbia";
// console.log(lastname)        //call <<ans<tasbia<



 //^^let also update edied but in scop/^^// 

// let lastname;

// lastname = "tasbia";
//  console.log(lastname)   //<<ans



//****keyword const* constent****** */

//^^ only one^ readable ^ no delet no add only read^^ 

// const school = "saylani"
//  var obj = {
//      schoolname:school
//  }

//  console.log(obj)  ??<<ans<<

//////


// const school = "saylani"
// const school = "saylani"
//  var obj = {
//      schoolname:school
//  }

//  console.log(obj)  ////<<ERR<  identifer `school` has already been declared



//////////////////*****template literals ****///

//concadenation???///??????

//in javaes5
//  let firstName = "tasbia";
//  let lastName = "awan";

//  console.log(firstName + " " + lastName)



//es6
// let firstName = "tasbia";
//   let lastName = "awan";
  
//   firebase.database().ref(`karachi/saylani/webmobile${firstName}${lastName}`)
//   console.log(`My name is ${firstName} ${lastName}`)




////*****spread operators*** */    it use in arry object for merging 


 //normal javas//


// var students1 = ["tasbia","awan"]  //arry
// var students2 = ["joony" , "woony"]  //arrry

// var merge = students1.concat(students2)  //variable.. concat mathod two arry merge
// //concat is a method wihivch takes valu to another value
// console.log(merge)




//method in arry//

// var students1 = ["tasbia","awan"]  
// var students2 = [...students1, "joony" , "woony"]   // spread operater in java three dot
//                                               // it get aarry element not array and merge it 
                              
// var merge = students1.concat(students2)  

// console.log(merge)


//in objct//

// var students1 = {name : "tasbia"}  
// var students2 = {...students1,school: "saylani"}


// console.log(students2)



// *****object destructuring******////

// var student ={   //obj student
//     name: "tasbia",
//     school: "saylani",
//     roll: 123
// }
//  let {name,school,roll} = student;  // destructuring // ^{} this are calld object

//                           // that is a way to get value from object
// console.log(name )   //property get
// console.log(school)



///**ternary operaters*****//

/////in normallyt java 

// var age = 20;

// if (age > 30){
//     console.log("30 se bara hai")   //if else condetion 
// }else{
//     console.log("30 se chota hai")
// }


// var age = 20;

// var check = age > 30? "30 se bara hai" :
//  "30 se chota"                ///ternary operater

//  console.log(check) //ans: 30 se chota



// var age = 40;

// var check = age > 30? "30 se bara hai" :
//  "30 se chota"                ///ternary operater

//  console.log(check) //ans: 30 se bara hai



// // ternary operater || or or 
// var age = 20;

// if(age > 30 || age <50)

// var check = age > 30? "30 se bara hai" :
//  "30 se chota"                ///ternary operater

//  console.log(check) //ans: 30 se chota




// ternary operater && end end
// var age = 20;

// if(age > 30 && age <50)

// var check =
//  age > 30 && age <50?
//  "30 se bara hai" :
//  "30 se chota"                ///ternary operater
/////true false
//^^bool true false
// var bool = true ;
// var name = bool && "tasbia";
// console.log(name) 


// var bool = false;
// var name = bool && "tasbia"; // in dono mai sy jo ture ho wo show karwana its mean   // down pa booln true nhi hota
//  console.log(name)  //false






////*****async or sync***///

      //q1
// console.log ("number 1")
// console.log ("number 2")
// console.log ("number 3")

      //q2
// setTimeout(function(){
//     console/log("number 1")
// }, 1000);                      //async javascript

// console.log("number 2")

// console.log("number 3")


// ^^ database  data get

// var name1;                    // variable
//                                  //database . data get
// setTimeout(function(){       //settimeout function
//     name1 = "tasbia"
// }, 1000);                     //time taking 1second  

// console.log(name1)             //console call // data undefine 



// ^ dataget  //from jugar XD

// var name1;                    
                                 
// setTimeout(function(){       
//     name1 = "tasbia"
// }, 2000);                    

// setInterval(function(){
//     console.log(name1)     
// }, 1000);
       // for this we use promise 



 ///****promise***/
 


//  var promise = new Promise(function(resolve,reject){    //two parameter pass in function
//      var zinger = "available";   

//      if (zinger === "available"){
//          resolve("zinger khila dea")
//      }else{
//          reject ("nahi khilaya")      //database eror
//      }
//  })
//  //promise get
 
//  promise.then(function(data){
//      console.log("Resolve==>",data)
//  })                             //if resolv .then if reject .catch
//  .catch(function(error){
// console.log("Error==>",error)
//  })


/////
//true promise//
// var promise = new Promise (function(resolve,reject){
//     if(true){
//         resolve("it`s resolve")

//     }else {
//         reject("Reject")
//     }
// })
 
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Error==>",error)
// })

///false promise///


// var promise = new Promise (function(resolve,reject){
//     if(false){
//         resolve("it`s resolve")

//     }else {
//         reject("Reject")
//     }
// })
 
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Error==>",error)
// })


///pending//

// var promise = new Promise (function(resolve,reject){
//     if(true){
//         setTimeout(() => {
//         resolve("it`s resolve")
//     } ,3000)
//     }else {
//         reject("Reject")
//     }
// })
 
// console.log(promise)
// promise.then(function(data){
//     console.log("Resolve==>",data)
// })
// .catch(function(error){
//     console.log("Error==>",error)
// })






//data get from firebase//


// firebase.database().ref("users").on("child_added",function(data){
//     console.log(data.val())
// })

// function getData(){
//     console.log(data.val())

//     Div.innerHTML = data.val()
// }                                  ///dont get data


//lets make promise

// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//      if (data.val()){
//          resolve(data.val())

//      }else{
//          reject("something went wrong")
//      }
        
//     })
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })








//Promise is a really good addition,
//  it's tricky to master it. But once you do,
//   it's like a
//  hot knife in a butter