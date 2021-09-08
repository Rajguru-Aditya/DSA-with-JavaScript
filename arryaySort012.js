let myArr = [1, 2, 0, 2, 0, 1, 0, 1, 2, 2];

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
