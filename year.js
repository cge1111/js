var a=prompt("알고 싶은 년도를 입력하세요.");
console.log(a,isLeapYear(a));

function isLeapYear(year) {
  if (year % 4 ==0) { 
    return console.log(a,"윤년입니다.");
  } else {
    return console.log(a,"윤년이 아닙니다.");
  } 
}