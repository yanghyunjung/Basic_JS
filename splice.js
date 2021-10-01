var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var arrSplice1 = arr.splice(1, 0, "추가1");
var arrSplice2 = arr.splice(3, 0, "추가2", "추가3", { add: "추가4" });

console.log(arr);
console.log(arrSplice1);
console.log(arrSplice2);
