// Các method của 1 array
/**
 * a.concat(b)  // nối 2 mảng với nhau
 * a.push(b)    // cho 1 phần tử mới vào trong mảng ở vị trí cuối cùng
 * a.pop()      // lấy ra thằng cuối cùng và thay đổi mảng đó
 * a.shift()    // đây thằng đầu tiên ra khỏi mảng và thay đổi mảng đó
 * a.unshift()  // nhét 1 thằng khác vào đầu mảng
 * 
 * a.slice
 * a.splice
 * Bài sau: function của method: find, filter, sorf, map, reduce, etc
 */
var a = [1 , 3, 2];
var b = [10 ,20];
var c = 5;
console.log(a.concat(b));  // tảo ra mảng mới có các phần tử nối nhau mà mảng cũ ko bị thay đổi
// var noi = b.concat(a);  // lưu mảng mới bằng cách gán vào biến mới
// console.log(noi);
console.log(a.push(c)); // trả về độ dài của mảng bị thay đổi // length // thay đổi a // thêm giá trị vào mảng a
console.log(a.pop());  // trả về thằng bị đây ra và thay đổi phần tử của mảng
console.log(a.shift());  // đây thằng đầu tiên ra khỏi mảng và thay đổi mảng
console.log(a.unshift(-1)); // thêm vào vị trí đầu tiên // đẩy mấy thằng kia ra sau // trả về độ dài mảng // giống push

console.log(a);
console.log(a.slice(2));

