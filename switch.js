console.log("Menu");
console.log("1. Ice Americanno");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var choice = parseInt(prompt("메뉴를 선택해 주세요."));
console.log(choice+"번 메뉴를 선택하셨습니다.");

switch (choice) {
    case 1:
    console.log("아이스 아메리카노는 1,500원입니다.");
    break;
    case 2:
    console.log("카페 라떼는 1,800원입니다.");
    break;
    case 3:
    console.log("카푸치노는 2,000원입니다.");
    break;
    case 4:
    console.log("홍차는 1,300원입니다.");
    break;
    default:
    console.log("죄송힙니다. 그런 메뉴는 없습니다.");
    break;
}
