//Promise syntax

const {
    rejects
} = require("assert");
const {
    resolve
} = require("path");
const {
    callbackify
} = require("util");

// let p = new Promise((resolve, reject)=>{
//     let a = 1+2;
//     if(a == 2){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// });

// p.then((message)=>{
//     console.log("This is then is "+ message);
// }).catch((message)=>{
//     console.log("This is then is "+ message);
// })

// promises examples

// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = true

//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe')
//     }
//   }

// watchTutorialCallback(message => {
//     console.log(message)
//   }, error => {
//     console.log(error.name + ' ' + error.message)
//   })


function watchTutorialPromise(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message)
});




//   function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = false
//     return new Promise((resolve, reject) => {
//       if (userLeft) {
//         reject({
//           name: 'User Left', 
//           message: ':('
//         })
//       } else if (userWatchingCatMeme) {
//         reject({
//           name: 'User Watching Cat Meme',
//           message: 'WebDevSimplified < Cat' 
//         })
//       } else {
//         resolve('Thumbs up and Subscribe')
//       }
//     })
//   }


//   watchTutorialPromise().then(message => {
//     console.log(message)
//   }).catch(error => {
//     console.log(error.name + ' ' + error.message)
//   })