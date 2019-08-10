// array.filter
/**
 * arr.filter(function(item) {
 * // filter
 * return newValue; // true or false
 * });
 * 
 * mothod name: filter
 */

 var numbers = [5, 2 ,3, 4];
 var evenNumbers = numbers.filter(function(item) {
    console.log(item);
    return item % 2 !== 0;   
 });
console.log(evenNumbers);
