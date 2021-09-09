const a = [2, 3, 79, 110, 234];
const b = [23, 3, 35, 220, 234];

const union = (a, b) => {
  let c = [];
  let unionArr = [];
  c.push(...a, ...b);
  for (let i of c) {
    if (unionArr.indexOf(i) === -1) {
      unionArr.push(i);
    }
  }
  return unionArr;
};

const intersection = (a, b) => {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        c.push(a[i]);
      }
    }
  }
  return c;
};

console.log(`Union: ${union(a, b)}, \nIntersection: ${intersection(a, b)}`);
