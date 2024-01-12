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

// function doSomething() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('12');
//     }, 2000);
//   });
// }

// function doSomethingElse(value) {
//   console.log(value);
//  return 'from doSomething else';
// }

// // doSomething().then(function () {
// //   return doSomethingElse();
// // })
// // .then(data => console.log('data', data))

// doSomething().then(doSomethingElse)
// .then(data => console.log('data', data))

// ___Tadk 11_____
// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// // ___Tadk 12_____
// console.log(1); // cинхрон 1

// setTimeout(() => console.log(2)); // макро 1

// Promise.reject(3).catch(console.log); // мікро 1    - але тут відхилено

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));  // макро 2    - проміс через 0 мілісекунд має зарезолвитись спочатку

// Promise.resolve(5).then(console.log);  // мікро 2 - але тут успішний

// console.log(6);  // cинхрон 2

// setTimeout(() => console.log(7),0); // макро 3

// // ___Tadk 12_____
// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log);

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log);

// console.log(6);

// setTimeout(() => console.log(7),0);

// ___Tadk 12_____

// Promise.reject(3).then(console.log).catch(console.log);
// Promise.resolve(5).then(console.log);

// task 13

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })

// setTimeout(() => console.log('in setTimeout1'), 1000);  //1

// myPromise(1000).then(res => console.log('in Promise 1'));  //2

// setTimeout(() => console.log('in setTimeout2'), 100);  //3

// myPromise(2000).then(res => console.log('in Promise 2')); // 4

// setTimeout(() => console.log('in setTimeout3'), 2000);  // 5

// myPromise(1000).then(res => console.log('in Promise 3'));  // 6

// setTimeout(() => console.log('in setTimeout4'), 1000); //7

// myPromise(5000).then(res => console.log('in Promise '));// 8

// task 4

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// task 5

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');

// task 6
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// task 7
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log('timerStart');
//     resolve('success');
//     console.log('timerEnd');
//   }, 0);
//   console.log(2);
// });

// promise.then(res => {
//   console.log(res);
// });

// console.log(4);

// task 8
// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// task 9

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1'); // micro
//   const timer2 = setTimeout(() => {
//     console.log('timer2')  // macro 2
//   }, 0)
// });

// const timer1 = setTimeout(() => {  // macro 1
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

// task 10
// const p = new Promise((resolve, reject) => {
//   reject(Error('Всё сломалось :('));
// })
//   .catch((error) => console.log('1-я', error.message))
//   .catch((error) => console.log('2-я', error.message));

//   const p2 = new Promise((resolve, reject) => {
//     reject(Error('Всё сломалось :('));
//   });

//   p2.catch((error) => console.log('3-я', error.message));
//   p2.catch((error) => console.log('4-я', error.message));

// task 11
// setTimeout(() => {
//   console.log('timeout')
// }, 0);

// const p = new Promise((resolve, reject) => {
//   console.log('Promise creation');
//   resolve();
// })

// const p2 = new Promise((resolve, reject) => {
//   console.log(123)
// })

// p.then(() => {
//   console.log('Promise resolving');
// })

// console.log('End')

// console.log('p2 =>>', p2)

//  task 12
// let a;

// let p4 = new Promise(function (resolve) {
//   console.log('TEST A1', a);
//   a = 25;
//   setTimeout(() => {
//     console.log('TEST A2', a);
//     resolve(a);
//   }, 100);
// });

// setTimeout(function timeout() {
//   a = 10;
//   console.log('TEST A3', a);
// }, 100);

// p4.then(function (b) {
//   console.log('TEST A4', a);
// });

// console.log('TEST A5', a);

// task 13

// setTimeout(() => {
//   console.log('timeout1');
// });

// new Promise((resolve)=>{
//   console.log('promise');
//   setTimeout(() => {
//     console.log('timeout2 -1');
//     resolve();
//     console.log('timeout2 -2 ');
//   });
// }).then(()=> {
//   console.log('callback in then1');
// }).then(()=> {
//   console.log('callback in then2');
// })

// console.log('log');

// setTimeout(() => {
//   console.log('timeout3');
// });

// task 14

// function resolveAfter2Seconds(x) {
//   console.log(`Какой Х пришёл -> ${x}`);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x); //
//     }, 5000);
//   });
// }
// async function add1(x) {
//   console.log('add1 Hello');
//   const a = await resolveAfter2Seconds(20);
//   console.log('a: ', a);
//   const b = await resolveAfter2Seconds(30);
//   console.log('b: ', b);
//   console.log('add1 Bye');
//   return x + a + b;
// }
// add1(10).then(console.log);

// function resolveAfter2Seconds(x) {
//   console.log(`Какой Х пришёл -> ${x}`);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x); //
//     }, 5000);
//   });
// }
// async function add1(x) {
//   console.log('add1 Hello');
//   const a = await resolveAfter2Seconds(20);
//   console.log('a: ', a);
//   // const b = await resolveAfter2Seconds(30);
//   // console.log('b: ', b);
//   console.log('add1 Bye');
//   // return x + a + b;
//   // return x + a;
// }
// add1(10).then(result => console.log(`result `, result));

// // async function add2(x) {
// //   console.log('add2 Hello');
// //   const p_a = resolveAfter2Seconds(200);
// //   const p_b = resolveAfter2Seconds(300);
// //   const p_c = resolveAfter2Seconds(100);
// //   const p_d = resolveAfter2Seconds(999);
// //   console.log('add2 Bye');
// //   return x + (await p_a) + (await p_b) + (await p_c) + (await p_d);
// // }
// // add2(400).then(console.log);


// const obj = new URLSearchParams({
//   a: 5,
//   b: 7,
// })

// console.log(obj.toString());


/// Tak 13

// async function wait() {
//   await new Promise(resolve => setTimeout(() => {
//     resolve();
//   }, 1000))
//   return 10;
// }


// function simpleFunction() {
//   wait().then(console.log)
// }

// simpleFunction();



/// task 14

// console.log(new Date(-1));


// task 15



// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve('Second');
// const promise3 = Promise.reject('Third');
// const promise4 = Promise.resolve('Fourth');


// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1, res2]

// }
// ;


// runPromises()
// .then(res => console.log(res))
// .catch(err => console.log(err))



/// task 16
// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve('Second');
// const promise3 = Promise.resolve('Third');
// const promise4 = Promise.resolve('Fourth');


// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1, res2]
// }
// ;


// runPromises()
// .then(res => console.log(res))
// .catch(err => console.log(err))



// task 17
// const promise = new Promise((resolve, reject)=> {
//   resolve('1');
// });

// promise
// .then(console.log)
// .then(data => {
//   console.log('data', data);
//   if(!data) {
//   throw new Error('Error in second then')
 
//   }
//   return '2';
// })
// .then(data => console.log('data in third then', data))
// .catch(console.log)




// const result  =  [1,2,3, 4, 5] + '';
// const result  =  "12345" + undefined;
// const result  =  +"12345" + undefined;
// const result  =  "12345" + undefined;
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(+"12345" + null);

// console.log(String(123));
// console.log(String(-12.3));
// console.log(String(null));
// console.log(String(undefined));
// console.log(String(true));
// console.log(String(false));
// console.log(typeof String({a: 5}));


// console.log(Boolean(new Date()));
// console.log(Boolean(Symbol()));
// console.log(Boolean(function(){}));

// console.log( Number('123') );
// console.log(+'123');
// console.log( 123 != '456' );
// console.log( 4 > '5' );
// console.log( 5/null );
// console.log( true | 0);

// console.log(Number(''));

// console.log(null == 0);
// console.log(null == null);
// console.log(undefined == undefined);
// console.log(null == undefined);
// let a = 2;
// let b = a;
// console.log(a == b);

// console.log([1] + [2, 3]);
// let d = new Date();

// let str = d.toString();
// let num = d.valueOf();
 
// console.log(d == str); 
// console.log(d == num);
// console.log(d + d);
// console.log(d - d);

// console.log(Number([]));
// console.log(Number({}));
// console.log(Number(function() {}));
// console.log(Number([12]));
// console.log( Number([" "]));
// console.log( Number([1, 2, 3]));
// console.log(15 + 3 + "number");
// console.log([] + null + 1);
// console.log(0 || "0" && {}  );
// const a = {}+[]+{}+[1];
// const a = new Date(0) + 0;
// console.log(a);
// console.log(null >= 0);
// console.log(typeof []);
// console.log(null || {} || true);
// console.log(null || [] || true);
// console.log(1 && 0 && true);

// const b = 1 && 'here' &&  getValue();
// console.log('b: ', b);
// var getValue = ()=> 'New';

// const do1 =()=> 'doing code';
// const do2 = () => 'breaking code';

// const result = (1 > 0) && do1() && do2;
// // console.log('result: ', result);

// function makeCounter() {
//   var currentCount = 1;
//   return function () {
//     return currentCount++ ;
//   }
// }

// var counter = makeCounter();
// counter();
// counter();
// var counter = makeCounter();

// var lastRes = counter();
// console.log('lastRes : ', lastRes );



// "use strict";
// function f1() {
//    return this;
// }
//  const b = f1();
//  console.log('b: ', b);


// const o ={
//   prop:37,
//   func : function() {
//     return this;
//   }
// }

// const b ={
//  b:2,
//   func : o.func
// }

// console.log(b.func());




// const o ={
//   prop:37,
//   func : () => {
//     return this;
//   }
// }

// const b ={
//  b:2,
//   func : o.func
// }

// console.log(b.func());

