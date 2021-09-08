const k = 2;
let myArr = [5, 8, 3, 9, 7, 4];

const minNmax = (arr) => {
  // Sort array
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
        console.log("After changing elements:", arr);
      }
  }
  let newArr = [];
  // Reverse sorted array
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  let minTerm = arr[k - 1];
  let maxTerm = newArr[k - 1];
  return `Kth min element: ${minTerm}, Kth max element: ${maxTerm}`;
};

console.log(minNmax(myArr));
