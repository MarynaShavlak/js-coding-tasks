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
   console.log('depth: ', depth);

// Recursive helper function to flatten arrays up to the specified depth
function flattenDepth(array, currentDepth) {
  
  return array.reduce((acc, current) => {
    console.log('current: ', current);
    if (Array.isArray(current) && currentDepth < depth) {
      // Recursively flatten nested arrays up to the specified depth
      console.log('currentDepth in func FlattenDepth - ARRAY: ', currentDepth);
      acc = acc.concat(flattenDepth(current, currentDepth + 1));
      console.log('acc when array: ', acc);
        console.log('_______');
    } else {
      // Otherwise, push the element to the result array
      console.log('currentDepth in func FlattenDepth- ELEMENT: ', currentDepth);
      acc.push(current);
      console.log('acc when element : ', acc);
      console.log('_______');
    }

    return acc;
  }, []);
}

// Use the recursive helper function to flatten arrays
return flattenDepth(arr, 0);
}

// // Example usage:
// const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8]];
// // const flattenedArrayDepth1 = customFlat(nestedArray, 1);
// const flattenedArrayDepth2 = customFlat(nestedArray, 2);
// // const flattenedArrayRoundedDepth = customFlat(nestedArray, -1);

// // console.log(flattenedArrayDepth1);
// console.log(flattenedArrayDepth2);
// // console.log(flattenedArrayRoundedDepth);


// Explanation
// Without Incrementing Depth: 
// The recursion does not track the depth, leading to a result that retains nested arrays up to the original depth.

// With Incrementing 
// Depth: The recursion tracks the depth, allowing the function to go deeper into nested arrays. 
//By incrementing the depth, it ensures that the recursion explores each level of nesting, resulting in a fully flattened array.

// In summary, incrementing the depth ensures that the recursive call goes deeper into nested arrays, providing a mechanism to control how many levels of nesting should be flattened. 
// Without incrementing the depth, the recursion would not explore deeper levels, and the final result would retain nested arrays up to the original depth.


