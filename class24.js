//**obejct destructuring **/

// let obj = {
//     name: "tasbia",
//     email: "tasbiawan@gmail.com"
// }

// //**in es5 if we exis property of object
// // let name = obj.name;       // object in ES5
// // let email = obj.email;     //if wnt too save variable in normal javascript , so wnt too make different differnt variable


//     //**esy to make.. in ES6 DESTRUCTURING
//     //obj properties in only variable

// let {name,email} = obj;   // objct destructuring 

// console.log(name) 



//**arry destructuring ES6 */


// let arr =["tasbia", "awan", "jooony"];

// // let name1 = arr[0];              //normaly
// // let name2 = arr[1]

// let [name1, name2, name3] = arr;   //arry desturcturing

// console.log(name1)


/////////*** function Expressions ***/

//in ES5 . we made anominess function (which function have no name)

// function foo(){                  //in normal javascript

// }


// let foo = function(){             //function expressions  
//    console.log("hello world")      //function acin in variable 
// }                            //declear in function

// foo()





///***arrow function//***/

// let hello = () =>{            //we don`t use function keywor
//       console.log("i am arroe funct")
// }            

// hello()


//parametr receive */      short 

//*//noraml javascript function

// function  foo (name){
//     console.log("hello" +name)  
// }


//*// ES6 javascript
// let hello = name =>{             //if you have single paramert so don`t use round bracket
//                                     // (name)parameter get     
     
//     console.log(`Hello ${name}`)    //name call  //$ dollr sign templat lityeral
// }            

// hello("tasbia")


//multiple orguments/ parameter passs

// let hello = (name1 , name2) => {             
     
//     console.log(`Hello ${name1} and ${name2}`)    
// }            
// hello("tasbia", "awan")



//****return in this function

// let hello = () => {        // we use here underscore_ or round brackets
//     return "tasbia"
// }

// console.log (hello())        // wee call this iot will target on function perent


////.......more_short function

// let hello () =>  "tasbia"        //return dirctly


// console.log (hello())


////..... this in function

// function foo(name){
//     console.log(this)       //THIS use in todo app
// }

// foo()



/////** cal back funtion*/


//call back function 

// setInterval(() => console.log("hello"),1000)  //function of js, which is by default

// setTimeout()


//**call back function */

// let getDAta = ( render_data)=>{       //as a parameter recev
//     firebase.database().ref('/').on("child_addded",(data)=>{
        
//         render_data(data.val())
//     })
// }

// getDAta(render_data)       //aas a argument pass


// let render_data = (data) => {
//    console.log(data)
// }


let getData = (render_data) => {
    setTimeout(()=>{
        render_data("tasbia")
    },3000)
}
getData(render_data)

let render_data = (name) =>{
    console.log(name)
}