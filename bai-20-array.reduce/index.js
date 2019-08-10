// array.reduce
/**
 * arr.reduce(function(item1, item2) {
 * // calculation
 * return x;
 * });
 */

 var numbers = [0, 1, 2, ,3 ,4];
 var sum = numbers.reduce(function(a, b) {
    console.log(a, b);
    return a + b;  
 });
console.log(sum);
console.log('--------');
// giỏ hàng
var orders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 }
];

var sumOrder = orders.reduce(function(x, y) {
    console.log(y.quantity, y.unitPrice);
    return x + (y.quantity * y.unitPrice);
}, 0);
console.log(sumOrder);

/**
 * reduce có init
 * 
 * arr.reduce(function(item1, item2) {
 * // caculation   
 * return x;
 * }, init);
 * 
 */
var items = [ 'Tom', 'Bill', 'Kim'];
// use reduce to make this result
// '<Tom><Bill><Kim>'

var allNames = items.reduce(function(accumulator, currentValue) {
   return accumulator.concat(currentValue);
},[]);
console.log(allNames);