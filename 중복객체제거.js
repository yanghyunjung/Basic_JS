var arr = [
  {
    id: 1,
    name: "철수",
    age: 30,
  },
  {
    id: 1,
    name: "철수",
    age: 30,
  },
];

// 중복 제거를 위해 filter, findIndex 사용

var result = arr.filter((item1, idx1) => {
  return (
    arr.findIndex((item2, idx2) => {
      return item1.id === item2.id;
    }) === idx1
  );
});

console.log(result);