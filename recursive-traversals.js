//uk.javascript.info/recursion

// _______________TASK 1_______________________
// компанія має відділи.
// Відділи можуть мати масив персоналу. Наприклад, відділ продажу має 2 співробітника: Іван та Аліса.
// Або відділ може бути розділеним на підрозділи, наприклад, development має дві гілки: sites та internals. Кожна з них має свій персонал.
// Можливо також, що коли відділ зростає, він розділяється на субвідділи (або команди).
// Наприклад, відділ sites у майбутньому може бути розділений на команди для siteA і siteB. І вони, потенційно, можуть бути розділені в подальшому. Це не зображено на малюнку, просто слід мати це на увазі.
// Тепер припустимо, що ми хочемо, щоб функція отримала суму всіх зарплат. Як ми можемо це зробити?

// let company = { // той же об’єкт, стиснутий для компактності
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функція для підрахунку суми зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // випадок (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сума масиву
//   } else { // випадок (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно викликається для підвідділів, суммуючи результат
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company));

//_________________________________________________________________________

// _______________TASK 2_______________________
// Сума всіх чисел до даного
// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.

// Наприклад:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Зробити 3 варіанти рішення:

// letiant 1: Використання циклу.
// function sumTo(n) {
//   let sum = 0;
//   for (let index = 1; index <= n; index++) {
//     sum += index;
//   }
//   console.log(sum);
//  }
//  sumTo(4);
//  sumTo(100);

// letiant 2: Використання рекурсії, у випадку sumTo(n) = n + sumTo(n-1) для n > 1.
// function sumTo(n) {
//   if (n == 1) return 1;
//   let sum =  n + sumTo(n - 1);
//   console.log(sum);
//   return sum;
//  }
//  sumTo(4);
//  sumTo(100);
// sumTo(100000);

// letiant 3 : Використання формули арифметичної прогресії.
// function sumTo(n) {
//   let sum = ((1 + n) * n) / 2;
//   console.log(sum);
//  }
//  sumTo(4);

// P.S. Який варіант рішення є найшвидшим? Найповільнішим? Чому?
// Звичайно, формула є найшвидшим рішенням.
// Вона використовує лише 3 операції для будь-якого числа n. Математика допомагає!

// Варіант з циклом є другим з точки зору швидкості.
// Як і у випадку рекурсії, в циклі ми сумуємо ті ж числа. Але рекурсія передбачає вкладені виклики та управління стеком.
// Це також займає ресурси, тому це повільніше.

// P.P.S. Чи можемо ми використовувати рекурсію для підрахунку sumTo(100000)?
// Деякі рушії підтримують оптимізацію “хвостового виклику” (“tail call”):
// якщо рекурсивний виклик є останнім в функції, то зовнішня функція не повинна відновлювати виконання,
// отже рушію не потрібно запам’ятовувати контекст виконання. Це зменшує використання пам’яті.
//  Але якщо рушій JavaScript не підтримує оптимізацію хвостового виклику (більшість з них не підтримує), то виникне помилка:
//  максимальний розмір стека перевищиться, оскільки зазвичай є обмеження на загальний розмір стека.

//_________________________________________________________________________

// _______________TASK 3_______________________
// Розрахувати факторіал
// Факторіал з натурального числа – це число, помножене на "число мінус один", потім на "число мінус два" і так до 1.
// Факторіал n позначається як n!

// Завдання полягає в тому, щоб написати функцію factorial(n), яка обчислює n! за допомогою рекурсивних викликів.

// function factorial(n) {
//   if (n == 1) return 1;
//   let result =  n * factorial(n - 1);
//   return result;

// }
// const result  = console.log(factorial(5));

//_________________________________________________________________________

// _______________TASK 4_______________________
// Числа Фібоначчі
// Послідовність чисел Фібоначчі має формулу Fn = Fn-1 + Fn-2. Іншими словами, наступне число є сумою двох попередніх.
// Перші два числа: 1, потім 2(1+1), потім 3(1+2), 5(2+3) і так далі: 1, 1, 2, 3, 5, 8, 13, 21....
// Напишіть функцію fib(n), яка повертає n-th число Фібоначчі.
// Приклад:

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Функція повинна бути швидкою. Виклик fib(77) має тривати не більше частки секунди.

https: function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// console.log(fib(3));
// console.log(fib(7));
// console.log( fib(77) ); // 5527939700884757

// …Але для великих значень n це дуже повільно.
// Наприклад, fib(77) може заморозити роботу рушія на деякий час, споживаючи всі ресурси центрального процесора.

// При цьому, що функція продовжує широке дерево вкладених викликів.
//  Тей самий ряд значень обчислюється знову і знову.
// https://uk.javascript.info/recursion

// Ми можемо оптимізувати це, запам’ятовуючи вже обчислені результати: якщо значення, скажімо, fib(3) обчислюється один раз, ми можемо просто повторно використовувати його в майбутніх обчисленнях.

// Як інший варіант, ми можемо відмовитись від рекурсії та використати зовсім інший алгоритм на основі циклу.

// Замість переходу від n до нижчих значень ми можемо створити цикл,
// який починається з 1 і 2, потім отримує fib(3) як їхню суму, а потім fib(4) як суму двох попередніх значень,
// потім fib(5) і йде вгору і вгору, поки не досягне потрібного значення.
//  На кожному кроці нам потрібно лише запам’ятати два попередні значення.\
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     console.log('b: ', b);
//   }
//   return b;
// }

// // console.log( fib(3) ); // 2
// console.log( fib(7) ); // 13
// // console.log( fib(77) ); // 5527939700884757

// function reverseString(str) {
//   let result;
//   console.log('str: ', str);
//   if (str === "") {
//     result = "";
//   } else {
//     // Recursive case: reverse the substring excluding the first character,
//     // then append the first character to the reversed substring
//     console.log('BEFORE MAKING REVERSE str: ', str);
//     let restOfStringReversed = reverseString(str.substr(1));
//     console.log('restOfStringReversed: ', restOfStringReversed);
//     let firstCharacter = str[0];
//     console.log('firstCharacter: ', firstCharacter);
//      result  = restOfStringReversed + firstCharacter
//     console.log('result: ', result);
//     console.log('____________');

//   }
//   console.log('_____end____');
//   return result;
// }

// function reverseString(str) {
//   if (str.length <= 1) {
//     return str;
//   }
//   return reverseString(str.substr(1)) + str[0];
// }

// let string = 'MARINA SHAVLAK';
// let reverse = reverseString(string);
// console.log('reverse: ', reverse); // ANIRAM

function reverseString1(str) {
  return str.split('').reverse().join('');
}

function reverseString2(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverseString3(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

function reverseString4(str) {
  return Array.from(str).reverse().join('');
}

function reverseString8(str) {
  return Array.from(str).reduceRight((reversed, char) => reversed + char, '');
}

function reverseString6(str) {
  let reversed = '';
  Array.from(str).forEach(char => {
    reversed = char + reversed;
  });
  return reversed;
}

function reverseString7(str) {
  return Array.from(str)
    .map((_, index, array) => array[array.length - 1 - index])
    .join('');
}

function reverseString18(str) {
  return Array.prototype.slice.call(str, 0).reverse().join('');
}

function reverseString19(str) {
  return str.replace(/./g, (_, i, s) => s[s.length - i - 1]);
}

function reverseString13(str) {
  return Array.from({ length: str.length }, (_, i) =>
    String.fromCharCode(str.charCodeAt(str.length - i - 1)),
  ).join('');
}
function reverseString14(str) {
  let reversed = '';
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}

function reverseString15(str) {
  return Array.from({ length: str.length }, (_, i) => {
    let res = str.slice(-i - 1, -i || undefined);
    return res;
  }).join('');
}
function reverseString16(str) {
  return str
    .split('')
    .map((_, i, arr) => arr.slice(i).join('').padEnd(arr.length, ' '))
    .join('');
}

// let string = 'MARINA';
// let reverse;
// reverse = reverseString1(string);
// reverse = reverseString2(string);
// reverse = reverseString3(string);
// reverse = reverseString4(string);
// reverse = reverseString8(string);
// reverse = reverseString6(string);
// reverse = reverseString7(string);
// reverse = reverseString18(string);
// reverse = reverseString19(string);
// reverse = reverseString13(string);
// reverse = reverseString14(string);
// reverse = reverseString15(string);
// reverse = reverseString16(string);
// console.log('reverse: ', reverse);

// function* reverseGenerator(str) {
//   let i = str.length;
//   while (i--) {
//     yield str[i];
//   }
// }

// const reverseStringGenerator = str => [...reverseGenerator(str)].join('');
// reverse = reverseStringGenerator(string);
// console.log('reverse: ', reverse);

function sumUsingForLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumUsingForEach(arr) {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
}

function sumUsingReduce(arr) {
  return arr.reduce((acc, current) => acc + current, 0);
}

function sumUsingWhileLoop(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumUsingRecursion(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumUsingRecursion(arr, index + 1);
}

function sumUsingEval(arr) {
  return eval(arr.join('+'));
}

function sumUsingIndexedForLoop(arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum;
}

function sumUsingForOfLoop(arr) {
  let sum = 0;
  for (const value of arr) {
    sum += value;
  }
  return sum;
}

function* generateValues(arr) {
  yield* arr;
}

function sumWithGeneratorFunction(arr) {
  let sum = 0;
  for (const value of generateValues(arr)) {
    sum += value;
  }
  return sum;
}

let arraySum;

// let array = [1, 2, 3, 5]
// // arraySum = sumUsingForLoop(array);
// // arraySum = sumUsingForEach(array);
// // arraySum = sumUsingReduce(array);
// // arraySum = sumUsingWhileLoop(array);
// // arraySum = sumUsingRecursion(array);
// // arraySum = sumUsingEval(array);
// // arraySum = sumUsingIndexedForLoop(array);
// // arraySum = sumUsingForOfLoop(array);
// // arraySum = sumWithGeneratorFunction(array);
// // console.log('arraySum : ', arraySum );

// function powerUsingReduce(base, exponent) {
//   return Array(exponent).fill(base).reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// }
//  console.log('power', powerUsingReduce(2, 3));

//  function nestedObjectSum(obj) {
//   let sum = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       sum += nestedObjectSum(obj[key]);
//     } else if (typeof obj[key] === 'number') {
//       sum += obj[key];
//     }

//   }

//   return sum;
// }

// const exampleObject = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       f: 4
//     }
//   },
//   g: 5
// };

// Calling the function with the exampleObject
// const result = nestedObjectSum(exampleObject);

// The result will be the sum of all the numeric values in the nested structure: 1 + 2 + 3 + 4 + 5 = 15
// console.log(result); // Output: 15

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   if (str.length <= 1) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   return isPalindrome(str.slice(1, -1));
// }

// let word = 'Alisa';
// let word2 = 'alisaasila';
// let word3 = 'alla';
// console.log('is palindrome',isPalindrome(word));
// console.log('is palindrome',isPalindrome(word2));
// console.log('is palindrome',isPalindrome(word3));

// function isPalindrome(str) {
//   const len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPalindrome(str) {
//   return str.split('').every((char, index) => char === str[str.length - 1 - index]);
// }

// function isPalindrome(str) {
//   return str.split('').reduce((acc, char, index) => acc && char === str[str.length - 1 - index], true);
// }

// function isPalindrome(str) {
//   str=str.toLowerCase();
//   const uniqueChars = new Set(str);
//   console.log('uniqueChars: ', uniqueChars);
//   const reversed = Array.from(uniqueChars).reverse().join('');
//   console.log('reversed: ', reversed);

//   // Check if the original and reversed strings are the same
//   return reversed === str;
// }

// function findCombinations(array, target) {
//   function findCombinationsHelper(startIndex, target, currentCombination) {
//     if (target === 0) {
//       result.push([...currentCombination]);
//       return;
//     }

//     for (let i = startIndex; i < array.length; i++) {
//       if (i > startIndex && array[i] === array[i - 1]) {
//         continue; // Skip duplicates to avoid duplicate combinations
//       }

//       const currentNum = array[i];
//       if (currentNum > target) {
//         continue; // Skip if the current number is greater than the target
//       }

//       console.log('sTART currentCombination: ', currentCombination);
//       currentCombination.push(currentNum);
//       findCombinationsHelper(i + 1, target - currentNum, currentCombination);
//       console.log('currentCombination: ', currentCombination);
//       console.log('_______-');
//       currentCombination.pop();
//     }
//   }

//   array.sort((a, b) => a - b); // Sort the array to handle duplicates efficiently
//   const result = [];
//   findCombinationsHelper(0, target, []);
//   return result;
// }

// Example usage:
// const array = [2, 3, 6, 7];
// const target = 7;
// const array2 = [1, 3, 4, 6];
// const target2 = 8;
// const combinations = findCombinations(array, target);
// console.log('combinations: ', combinations);
// const combinations2 = findCombinations(array2, target2);
// console.log('combinations2 : ', combinations2 );

// function findMaximumNumber(arr) {
//   function maxHelper(input, output = []) {
//     for (let i = 0; i < input.length; i++) {
//       if (Array.isArray(input[i])) {
//         maxHelper(input[i], output);
//       } else {
//         output.push(input[i]);
//       }
//     }
//     return output;
//   }

//   const flattenArray = maxHelper(arr);
//   return Math.max(...flattenArray);
// }

// function findMax(ar) {
//   let max = -Infinity;

//   for (let i = 0; i < ar.length; i++) {
//     let el = ar[i];

//     if (Array.isArray(el)) {
//       el = findMax(el);
//     }

//     if (el > max) {
//       max = el;
//     }
//   }

//   return max;
// }
// const arrayForMax = [2, 4, 10, [12, 4, [100, [17, 345], 99], 4], [3, 2, 99], 0];

// const result = findMaximumNumber(arrayForMax);
// console.log('result: ', result);
// const result2 = findMax(arrayForMax);
// console.log('result2: ', result2);

function makeNegative(num) {
  if (num === 0 || num < 0) {
    return num;
  } else {
    return -num;
  }
}

// console.log(makeNegative(0));
// console.log(makeNegative(1));
// console.log(makeNegative(-5));

function formatCreditCardNumber(cardNumber) {
  const replace = '****';
  const partFirst = cardNumber.slice(0, 4);
  const partLast = cardNumber.slice(-4);
  return `${partFirst} ${replace} ${replace} ${partLast}`;
}

function formatCreditCardNumber2(cardNumber) {
  const parts = [cardNumber.slice(0, 4), '****', '****', cardNumber.slice(-4)];
  const formattedNumber = parts.join(' ');
  return formattedNumber;
}
function formatCreditCardNumber3(cardNumber) {
  const formattedNumber =
    cardNumber.substring(0, 4) + ' **** **** ' + cardNumber.substring(12);
  return formattedNumber;
}
function formatCreditCardNumber4(cardNumber) {
  return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 **** **** $4');
}

function formatCreditCardNumber5(cardNumber) {
  return cardNumber
    .split('')
    .map((digit, index) => (index >= 4 && index < 12 ? '*' : digit))
    .join('');
}
function formatCreditCardNumber6(cardNumber) {
  const cardArray = cardNumber.split('');
  cardArray.splice(4, 8, ' **** ', ' **** ');
  const result = cardArray.join('');
  return result;
}
function formatCreditCardNumber7(cardNumber) {
  let formattedNumber = '';
  let charsInString = cardNumber.length;
  const charInGroup = 4;

  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % charInGroup === 0) {
      formattedNumber += ' ';
    }
    formattedNumber +=
      i >= charInGroup && i < charsInString - charInGroup ? '*' : cardNumber[i];
  }
  return formattedNumber;
}

// console.log(formatCreditCardNumber7('1234567890987654'));

function combineArray(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
}
function combineArray1(arr1, arr2) {
  return arr1.map((element, index) => element + arr2[index]);
}

function combineArray2(arr1, arr2) {
  return arr1.reduce((result, element, index) => {
    result.push(element + arr2[index]);
    return result;
  }, []);
}

function combineArray3(arr1, arr2) {
  const result = [];
  arr1.forEach((element, index) => {
    result.push(element + arr2[index]);
  });
  return result;
}

function addArrays(array1, array2) {
  const result = [];
  [array1, array2].forEach((arr, i) => {
    arr.forEach((element, index) => {
      result[index] = (result[index] || 0) + element;
    });
  });
  return result;
}

// console.log(combineArray([1,2,3], [7,8,9]));
// console.log(combineArray1([1,2,3], [7,8,9]));
// console.log(combineArray2([1,2,3], [7,8,9]));
// console.log(combineArray3([1,2,3], [7,8,9]));
// console.log(addArrays([1,2,3], [7,8,9]));

function splitString(str) {
  let result = [];
  if (str.length % 2 !== 0) {
    str = str + '*';
  }
  const array = str.split('');
  for (let index = 0; index < array.length; index+=2) {
    const el = array[index]+ array[index+1];
    result.push(el);
    
  }

  return result;
}


function splitString1(str) {
  return str.split('').reduce((acc, char, index) => {
    if (index % 2 === 0) acc.push(char + (str[index + 1] || '*'));
    return acc;
  }, []);
}

function splitString2(str) {
  return str.split('').map((char, index, arr) => {
    return index % 2 === 0 ? char + (arr[index + 1] || '*') : null;
  })
  .filter(Boolean);
}

function splitString3(str) {
  const result =  Array.from({ length: Math.ceil(str.length / 2) }, (_, index) => {
    console.log('index: ', index);
    return str.slice(index * 2, index * 2 + 2).padEnd(2, '*')
  }
    
  );
  return result;
}
function splitString4(str) {
  let result = [];
  str.split('').every((char, index, arr) => {
    index % 2 === 0 && result.push(char + (arr[index + 1] || '*'));
    return true;
  });
  return result;
}
function splitString5(str) {
  let result = [];
  let index = 0;
  while (index < str.length) {
    let pair = str.slice(index, index + 2);
    if (pair.length < 2) {
      pair = pair + '*';
    }
    result.push(pair);
    index += 2;
  }
  return result;
}

function splitString6(str) {
  if (str.length === 0) return [];
  return [str.slice(0, 2) || str[0] + '*'].concat(splitString(str.slice(2)));
}





console.log(splitString6('123456')); // ['12', '34', '56']
console.log(splitString6('ab cd ef')); // ['ab', ' c', 'd ', 'ef']
console.log(splitString6('ABC')); // ['AB', 'C*']
console.log(splitString6(' ')); // [' *']
console.log(splitString6('')); // []
let g = 'a'.slice(0,2);
console.log(g);