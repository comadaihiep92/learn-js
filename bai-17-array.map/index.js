// array.map // thay đổi mảng thành mảng mới
/**
 * Syntax
 * arr.map(function(item) {
 * // transform
 * return newValue;
 * });
 * method name: map
 * 
 */

var numbers = [1, 2, 3, 4];
var squareNumbers = numbers.map(function(x) {
    return x*x;
});
console.log(squareNumbers);

// bài tập:
var rectangles = [
    { width: 10, height: 5 },
    { width: 10, height: 20 },
    { width: 4, height: 16 }
];
// dùng map method để biến đổi rectangles thành 1 array mới gồm có diện tích của các hình trên
var dt = rectangles.map(function(w) {
    return w.width * w.height;
});
console.log(dt);

