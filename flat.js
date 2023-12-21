// _____________________________________________________________________
// Task 1
// Write your own realization of Array.prototype.flat()
// _____________________________________________________________________

function customFlat(arr, depth = 1) {
  // Check if arr is an array
  if (!Array.isArray(arr)) {
    throw new TypeError('Your data is not an array');
  }

  // Round down the depth parameter to the nearest integer
  depth = Math.floor(Number(depth));

  // Ensure that depth is non-negative
  depth = Math.max(0, depth);

  // Recursive helper function to flatten arrays up to the specified depth
  function flattenDepth(array, currentDepth) {
    return array.reduce((acc, current) => {
      if (Array.isArray(current) && currentDepth < depth) {
        // Recursively flatten nested arrays up to the specified depth
        acc = acc.concat(flattenDepth(current, currentDepth + 1));
      } else {
        // Otherwise, push the element to the result array
        acc.push(current);
      }

      return acc;
    }, []);
  }

  // Use the recursive helper function to flatten arrays
  return flattenDepth(arr, 0);
}

// Example usage:
// const nestedArray = [1, 2, [3, 4, [5, [11,13, [45,67]]]], 7, [8]];
// const flattenedArrayDepth2 = customFlat(nestedArray, Infinity);
// console.log(flattenedArrayDepth2);
// const flattenedArrayRoundedDepth = customFlat(nestedArray, -1);
// const flattenedArrayDepth1 = customFlat(nestedArray, 1);
// console.log(flattenedArrayDepth1);
// console.log(flattenedArrayRoundedDepth);

// function flattenArray(arr) {
//   function flattenHelper(input, output = []) {
//     for (let i = 0; i < input.length; i++) {
//       if (Array.isArray(input[i])) {
//         flattenHelper(input[i], output);
//       } else {
//         output.push(input[i]);
//       }
//     }
//     return output;
//   }

//   return flattenHelper(arr);
// }
// const nestedArray = [1, 2, [3, 4, [5, [11,13, [45,67]]]], 7, [8]];
// const flattenedArray= flattenArray(nestedArray);
// console.log(flattenedArray);

// Explanation
// Without Incrementing Depth:
// The recursion does not track the depth, leading to a result that retains nested arrays up to the original depth.

// With Incrementing
// Depth: The recursion tracks the depth, allowing the function to go deeper into nested arrays.
//By incrementing the depth, it ensures that the recursion explores each level of nesting, resulting in a fully flattened array.

// In summary, incrementing the depth ensures that the recursive call goes deeper into nested arrays, providing a mechanism to control how many levels of nesting should be flattened.
// Without incrementing the depth, the recursion would not explore deeper levels, and the final result would retain nested arrays up to the original depth.



// function bubbleSort(ar) {
//   let shouldSort = false;

//   for (let i = 0; i < ar.length - 1; i++) {
//     let temCurrentEl = ar[i];
//     let nextEl = ar[i + 1];
//     if (temCurrentEl > nextEl) {
//       ar[i] = ar[i + 1];
//       ar[i + 1] = temCurrentEl;
//       shouldSort = true;
//     }
//   }

//   if (shouldSort) {
//     bubbleSort(ar);
//   }
// }
// const ar = [23, 1000, 1, -1, 8, 3];
// console.log(ar);
// bubbleSortWithLoop(ar);
// console.log(ar);

// function bubbleSortWithLoop(ar) {
//   let shouldSort = true;

//   while (shouldSort) {
//     shouldSort = false;

//     for (let i = 0; i < ar.length - 1; i++) {
//       let a = ar[i];
//       if (a > ar[i + 1]) {
//         ar[i] = ar[i + 1];
//         ar[i + 1] = a;
//         shouldSort = true;
//       }
//     }
//   }
// }


