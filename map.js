var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

var reformattedArray = kvArray.map(function (obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// map을 활용해 배열 속 객체를 재구성하기
// map은 새로운 배열을 만들어준다
// slice는 ()안에 조건에 해당하는 배열을 반환해줌
