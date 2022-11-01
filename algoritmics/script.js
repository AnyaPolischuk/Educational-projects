// function arrayDiff(a, b) {
//   let newArr = [];
//   a.filter((item, index) => {
//   if (b.length === 0) {
//     newArr.push(item);
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (item != b[i]) {
//       newArr.push(item);
//     } 
//   }
// })  
//   return newArr;
// }



// function arrayDiff(a, b) {
//   //let newArr = [];
  
//   for (let i = 0; i < b.length; i++) {
//    let newArr = a.filter(item => item != b[i])
//   }

//   return newArr;
// }

// //console.log(arrayDiff([1,2], [1])); // [2]
// //console.log(arrayDiff([1,2,2], [1])); // [2,2]
// //console.log(arrayDiff([1,2,2], [2])); // [1]
// //console.log(arrayDiff([1,2,2], [])); // [1,2,2]
// //console.log(arrayDiff([], [1,2])); // []
// console.log(arrayDiff([1,2,3], [1,2])); // [3]








function countInversion(arr) {
  let currentArrayWithZero = [...arr]; //копия исходного массива
  let inversion = 0;
  let indexOfZero = arr.indexOf(0);

  arr.splice(indexOfZero, 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        ++inversion;
      }
    }
  }

  return inversion;
}

//console.log(countInversion([1, 2, 3, 0, 4, 6, 8, 5, 7])); // 3
//console.log(countInversion([1, 2, 3, 8, 4, 6, 0, 5, 7])); // 5
//console.log(countInversion([1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 7, 11, 13, 14, 15, 12])); // 6



function findLineOfZero(arr) {
  let amountCellInRow = Math.sqrt(arr.length);
  let indexOfZero = arr.indexOf(0);

  return Math.trunc(indexOfZero / amountCellInRow);
}

console.log(findLineOfZero([1,2,3,4,5,6,1,8,9,10,7,11,0,14,15,12])); // 1