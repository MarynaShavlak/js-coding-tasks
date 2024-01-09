// console.log('Boolean(0): ', Boolean(0));
// const a = new Boolean('ggg');
// console.log('a: ', a);
// Boolean();
// console.log('Boolean();: ', Boolean());
// Boolean(0)
// console.log('oolean(0): ', Boolean(0));
// Boolean(null)
// console.log('Boolean(null): ', Boolean(null));
// Boolean("")
// console.log('Boolean(""): ', Boolean(""));
// Boolean(false)
// console.log('Boolean(false): ', Boolean(false));
// Boolean(true)
// console.log('Boolean(true): ', Boolean(true));
// Boolean(1)
// console.log('Boolean(1): ', Boolean(1));
// Boolean("true")
// console.log('Boolean("true"): ', Boolean("true"));
// Boolean("false")
// console.log('Boolean("false"): ', Boolean("false"));
// Boolean("Su Lin")
// console.log('Boolean("Su Lin"): ', Boolean("Su Lin"));
// Boolean([])
// console.log('Boolean([]): ', Boolean([]));
// Boolean({})
// console.log('Boolean({}): ', Boolean({}));

//_____________________________________//

// ______Task 1__________//
// console.log('before loop', i);
// for (var i = 0; i < 3; i++) {
//   let delay = 1000 *i + 2000;

//   setTimeout(function(){console.log(i)} , delay);
// }

// console.log('after loop', i);
//_____________________________________________

// ______Task 2__________//
// for (var i = 1; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// console.log(i);

// solution 1 //
// for (let i = 0; i < 3; i++){
//   console.log('Sync code: ', i);

//   setTimeout(() => console.log('Async code: ', i), 0);
// }

// solution 2 //
// for (var i = 0; i < 3; i++){
//   console.log('Sync code: ', i);
//   setTimeout((i) => console.log('Async code: ', i), 0, i);
// }

// solution 3
// for (var i = 0; i < 3; i++){
//   console.log('Sync code: ', i);
//   ((i) => {
//     setTimeout(() => console.log('Async code: ', i), 0);
//   })(i)
// }

//  TASK   3/////
// for (let index = 3; index > 0; index--) {
//   const delay = index * 1000;
//   setTimeout(()=> console.log(index), delay);
// }
// console.log("b" + "a" + +"a" + "a");
//

// let name = 'Lydia';
// function getName() {
//   console.log(name);
//   let name = 'Sarah';
// }

// getName();

// ASYNC CODE//
//  const timerID = setInterval(() => {
//   console.log('Tick');
//  }, 2000);

//  setTimeout(() => {
//   clearInterval(timerID);
//  }, 5000);

// const n =  new Number();
// // console.log('n: ', typeof  n);
// const promise = new Promise(()=>{})
// console.log('promise: ',promise);

// const promise = new Promise((resolve, reject)=>{
//   resolve(1);
//   setTimeout(() => {
//     resolve(2);

//   }, 1000);
// });
// promise.then(result => {
//   console.log(result);
// })

// task 11///
// console.log('Start');

// setTimeout(() => {
//   console.log('from setTimeout');
// }, 0);

// const promise = new Promise((resolve, reject)=>{
//   console.log('from Promise');
//     resolve(10);
//   });

//   promise.then(result => {
//     console.log('from Then');
//   });
//    console.log('End');

// // task 12///
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// const news = promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//? TASK 03
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// //? TASK 04
// // Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });
// promise.then(value => console.log(value))

//? TASK 05
// Що буде у консолі
// const promise = new Promise(resolve => {
//   resolve(10);
// });
// promise
//   .then(value => {
//     new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));

//? TASK 05
// Що буде у консолі
// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');

// //? TASK 06
// // Що буде у консолі
// console.log('Start');

// setTimeout(function () {
//   console.log('setTimeout #1 ');
// }, 10);

// Promise.resolve('promise 1 - resolved')
//   .then(value1 => {console.log(value1);})
//   .then(value2 => {console.log(value2);});

// Promise.reject('promise 2 - rejected')
//   .then(value1 => {console.log(value1);})
//   .catch(error => {console.log(error);});

// Promise.resolve('promise 3 - resolved')
//   .then(value1 => {console.log(value1);})

// setTimeout(function () {
//   console.log('setTimeout #2 ');
// }, 0);

// console.log('End');

//? TASK 07
// Що буде у консолі
// console.log('Start');

// setTimeout(function () {
//   console.log('in setTimeout');
//   Promise.resolve('promise')
//   .then(value1 => {console.log(value1);})
// }, 10);

// console.log('End');

// //? TASK 07
// // Що буде у консолі
// Promise.reject('from reject')
//   .then(value1 => {console.log(`value1:`, value1);})
//   .then(value2 => {console.log(`value2:`, value2);})
//   .catch(error => {
//     console.log(`error:`, error );
//     return 2;
//   })
//   .then(value3 => {
//     console.log(`value3:`, value3)
//     return 'from then() after cath()'
//   })
//   .then(value4 => {console.log(`value4:`, value4)})

//? TASK 08
// Що буде у консолі
// Promise.reject('from reject')
//   .then(value1 => {console.log(`value1:`, value1);})
//   .then(value2 => {console.log(`value2:`, value2);})
//   .catch(error => {
//     console.log(`error:`, error );
//     return 2;
//   })
//   .then(value3 => {
//     console.log(`value3:`, value3)
//     return 'from then() after cath()'
//   })
//   .then(value4 => {console.log(`value4:`, value4)})

// const names = ['1', '2', '3', '4', '5'];

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min  + 1 )+ min ) ;
// }

// function makePromiseResolved(name) {
//   return new Promise((resolve)=>{
//   const time = getRandomTime(2000, 5000);
//   setTimeout(() => {
//     resolve({name, time});
//    }, time);
//  })

// }
// names.forEach(name =>{
//   makePromiseResolved(name);
// })
// .then(()=> {console.log('all promises resolved');})

// function executeSequentially(promises) {
//   let result = Promise.resolve();
//   promises.forEach(function (promise) {
//     result = result.then(promise);
//   });
//   return result;
// }

// function executeSequentially(promiseFactories) {
//   let  result = Promise.resolve();
//   promiseFactories.forEach(function (promiseFactory) {
//     result = result.then(promiseFactory);
//   });
//   return result;
// }

// function myPromiseFactory() {
//   return somethingThatCreatesAPromise();
// }

//  Factory of promises

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min  + 1 )+ min ) ;
// }

// function executeSequentially(promiseFactories) {
//   console.log('promiseFactories: ', promiseFactories);
//   let  result = Promise.resolve();
//   promiseFactories.forEach((promiseFactory) => {
//     result = result.then(promiseFactory);
//   });
//   return result;
// }

// function makePromise(value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(value);
//       resolve({value});
//     }, 2000);
//   });
// }

// function myPromiseFactory(value) {
//   return  () => {return makePromise(value);};
// }

// const promiseFactories = [
//   myPromiseFactory('First'),
//   myPromiseFactory('Second'),
//   myPromiseFactory('Third')
// ];

// executeSequentially(promiseFactories)
//   .then(() => {
//     console.log('All promises executed sequentially.');
//   });

//_____________________________________________
//? TASK 08
// Що буде у консолі
// Promise.resolve('foo')
// .then(Promise.resolve('foo'))
// .then((result)=> {
//   console.log(result)
// })

function doSomething() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('12');
    }, 2000);
  });
}

function doSomethingElse(value) {
  console.log(value);
 return 'from doSomething else';
}

// doSomething().then(function () {
//   return doSomethingElse();
// })
// .then(data => console.log('data', data))


doSomething().then(doSomethingElse)
.then(data => console.log('data', data))