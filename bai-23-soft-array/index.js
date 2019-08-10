// filter, find, reduce, map
// array.sort
/**
 * syntax: array.sort(function(a,b) {}) -> return a sorted array
 *                          ^ sort function
 * if sort function
 *      1. returns a value < 0
 *          a will come before b (a - b)
 *      2. returns a value > 0
 *          a will come after b (b - a)
 *      3. returns 0
 *          a and b will stay unchanged
 */

var numbers = [2, 9 ,3, 4, 1];
// [1, 2, 3, 4, 9] // ascending order
var ascendingNumbers = numbers.sort(function(a, b) {
    //assume: a = 1, b = 4
    return a - b;
});
console.log(ascendingNumbers);

var descendingNumbers = numbers.sort(function(a, b) {
    // assume: a = 3, b =4;
    // expect: a comes after b
    return b - a;
});
console.log(descendingNumbers);

var employees = [
    { name: 'Tí', age: 18 },
    { name: 'Tèo', age: 20 },
    { name: 'Maria', age: 19 }
];

console.log(employees);
var sortedEmployees = employees.sort(function(a, b) {
    // a = employees[1], b employees[2]
    // expect: a comes after b
    return a.age - b.age; // >0
});
console.log(sortedEmployees)

// 1. Define an array of products (name, price, stock)
// 2. Sort by price from more expensive to less expensive
// 3. Sort by in stock value from more expensive to less expensive

var products = [
    { name: 'Nồi cơm', price: 1000, stock: 1 },
    { name: 'Quạt máy', price: 5000, stock: 2 },
    { name: 'Điều hòa', price: 6000, stock: 5 },
    { name: 'Tủ lạnh', price: 2000, stock: 2 }
];
var sortedPrice = products.sort(function(a, b) {
    return b.price - a.price;
});
console.log(sortedPrice);

var sortedStock = products.sort(function(a, b) {
    return b.stock - a.stock;
});
console.log(sortedStock);
