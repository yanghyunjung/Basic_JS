const lame = {
  name: "현정",
  age: 25,
  location: "서울",
};

let lameCopy = { ...lame }; // 이 함수 표현식으로 deep copy를 표현할 수 있음.

lameCopy.name = "현댕구";

console.log(lame, lameCopy);
