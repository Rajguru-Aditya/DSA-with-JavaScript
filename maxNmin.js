const myArr = [4, 5, 2, 3, 1];

const maxNmin = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { max, min };
};

console.log(maxNmin(myArr));
