// // FOr
// // for (init; condition; final-expression) {
//     statements;
// } exit (if 2 is false)
// Keywords: for
// The loop exits when 2 is false
// 1. init
// 2. condition // thường trả về true/false
// 3. statements // thực hiện khi 2 true
// 4. final-expression // chạy sau khi trong ngoặc nhọn kết thúc {} thường tăng biến đếm (1) lên 1 đơn vị
// exit (if 2 is false)

// for loop
// bài toán: hiện thi ra màn hình từ 0 -> 9 // convension // chuẩn đặt tên
// console.log(0);
// console.log(1);
// console.log(2);
for (var i = 0; i < 10; i++) {
    console.log(i);
};
/**
 * 1. i = 0
 * 2. 0 < 10 -> true
 * 3. display 0
 * 4. i = 1
 * 5. i < 10 -> true
 * 6. display 1
 * ...
 * n. display 9
 * n+1. n = 10
 * n+2. 10 < 10 -> false
 */
console.log('-------------')
for (var j = 9; j >= 0; j--) {
    console.log(j);
}
/**
 * i = 9
 * 9 >= 0 -> true
 * dispplay 9
 */
console.log('------');
var employees = [
    { name: 'Thinh', age: 28 },
    { name: 'Hiroshi', age: 25 },
    { name: 'Maria', age: 32 }
];
// hiện thị tên nhân viên
// console.log(employees[0].name);
// console.log(employees[1].name);
// console.log(employees[2].name);

for (var z = 0; z < 3; z++) {
    console.log(employees[z].name, employees[z].age);
};



