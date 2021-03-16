function a() {    // a() 함수 생성
    var v_a = "a";    // 변수 v_a 초기화

function b() {      // a() 함수 안에 b()
    var v_b = "b";   // b() 함수 안에서 변수 v_b를 초기화
    console.log("b :", typeof(v), typeof(v_a), typeof(v_b)); // "b:" 출력
}
b();    // a() 함수 안에서 b() 함수를 호출
console.log("a :", typeof(v), typeof(v_a), typeof(v_b)); // "a:" 출력
}

var v = "v";   // a() 함수 바깥에서 변수 v 초기화
a();    // a() 함수 호출
console.log("o :", typeof(v), typeof(v_a), typeof(v_b)); // "o:" 출력