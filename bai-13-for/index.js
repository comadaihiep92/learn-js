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

// for (var z = 0; z < 3; z++) {
//     console.log(employees[z].name, employees[z].age);
// };

/**
 * 1. for ... of  // lặp qua phần tử trong mảng nào đó // truy xuất value
 *  for (var employee of employees) { // tên biến là số ít của array đó // employee đại diện cho từng phần tử của array đó
 * }
 * 2. for ... in // lặp qua key trong object  // truy xuất key
 * += khi dùng với string sẽ nối lại với nhau
 */

for (var employee of employees) {
    console.log(employee.name, employee.age);
}
console.log('----------');
var myDog = {
    name: 'Đần',
    age: 1,
    weight: 5
};

for (var key in myDog) {
    // console.log(key); // để truy cập vào key của 1 object // myDog.name // myDog['name'] = Đần
    console.log(key, myDog[key]);
};

// đệ quy là hàm gọi lại chính nó cho đến khi không gọi nữa

function demNguoc(num) {
    if(num < 1) return 1;
    console.log(num);
    demNguoc(num -1);
};

demNguoc(10);
console.log('------------');
function fib(so) {
    if (so === 1) {
        return 0;
    }
    if (so === 2) {
        return 1;
    }
    return fib(so - 1) + fib(so - 2);
};
console.log(fib(5));
// 1. 0
// 2. 1
// 3. 1
// 4. 2
// 5. 3
// 6. 5

/**
 * so 4 + so 3 -- 2 + 1
 */

 /**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  
  function result(arr) {
      for (var key in arr) {
        console.log(key);
      };
      if (key != null) {
        result(arr[key]);
      };
  
  };
  result(apartment);