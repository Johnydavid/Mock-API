// const checkOdd = () =>{
//     console.log("line 1");
//     console.log("line 2");
//     console.log("line 3");
//     return{msg : 'Hello World'};
// };

// const check = checkOdd();

// console.log('checkValue', check);

// Async ==> used only infront of a function
// Async returns a promise

async function CheckOdd (){
    return{msg : 'Hello World'};

}

// async function wraps the return value as a Promise 
// Return type of Async function is Promise
// but usually we won't return anything from async function

const check = CheckOdd();

console.log('CheckValue', check);



// const SampleFunc = async () =>{
//     console.log("Line 1")

//     setTimeout(()=>{
//         console.log("line 2");

//     }, 5000);
    
//  console.log("line 3");


// }

// SampleFunc()



// const SampleFunc1 = async () =>{
//     console.log("Line 1")


//    await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("line 2");
//             resolve({msg : 'Hello World'})
    
//         }, 5000);

//     })
    
    
//  console.log("line 3");


// }

// SampleFunc1()


const SampleFunc2 = async () =>{
    try{
        console.log("Line 1")


        const response = await new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 console.log("line 2");
                //  reject({msg : 'Hello World'})
                // reject({msg :' Error from Response'}) No lines will print out after reject
                resolve({msg :' Hello World'});
         
             }, 5000);
     
         })
         
         
      console.log("line 3" );
      console.log("line 4", response );
      console.log("line 5", response );

    }
    catch(error){
        console.log(error)
    }



}

SampleFunc2()

// -------------------------







