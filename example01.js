let schedule = [
  { place: "이불 속", behavior: "늦잠자기" },
  { place: "서브웨이", behavior: "냠냠" },
  { place: "줌 속", behavior: "웹 프로그래밍 듣기" },
  { place: "서브웨이", behavior: "30cm 냠냠" },
  { place: "이불 속", behavior: "넷플릭스랑 좋은 시간 보내기" },
  { place: "이불 속", behavior: "쿨쿨" },
];

let result = [];

for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].place==="이불 속")
    result.push(schedule[i].behavior); // push를 통해 배열에 요소를 추가
}                                      // 자바스크립트에서 push는 불변셩 유지가 안됨.

console.log(result);
