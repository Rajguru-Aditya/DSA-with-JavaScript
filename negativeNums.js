let myArr = [-1, -9, -4, 1, 3, -6, -5, 2, -3];

const sort = (arr) => {
  // Sort array
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        let x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  }
  return arr;
};

console.log(sort(myArr));
