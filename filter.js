let numbers = [1, 2, 5, 4, 7, 3, 10];

let results = numbers.filter((a) => a > 3);

numbers.sort((a, b) => a - b); // 숫자 정렬
results.sort((a, b) => a - b);

console.log(numbers);
console.log(results);
