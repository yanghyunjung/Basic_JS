// forEach를 사용하면 기존 배열을 수정할 수 있다.

let data = [10, 20, 30, 40, 50];
let result = [];

// 얕은(shallow) 복사
data.forEach((x) => result.push(x - 5));

console.log(result)