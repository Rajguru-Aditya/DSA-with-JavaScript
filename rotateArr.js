const arrToBeRotated = [1, 2, 3, 4, 5];

const rotate = (arr) => {
  let b = arr.pop(-1);
  arr.unshift(b);
  return arr;
};

console.log(rotate(arrToBeRotated));
