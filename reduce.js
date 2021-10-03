const fruit = [
  "apple",
  "grape",
  "banana",
  "apple",
  "orange",
  "grape",
  "apple",
  "orange",
];

// reduce는 배열을 순회하며 인덱스를 줄여가며 어떠한 기능을 수행한다.
const result = fruit.reduce((object, currentValue) => {
  if (!object[currentValue]) {
    object[currentValue] = 0;
  }
  object[currentValue]++;

  return object;
}, {});

console.log(result);
