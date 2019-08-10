// Math object in JavaScript
// Math.PI
// Math.ceil(number) // làm tròn lên
// Math.floor(number) // làm tròn xuống số thập phân, 9,5 -> 10
// Math.max(x1, x2,...)
// Math.min(x1, x2,...)
// Math.random()


console.log(Math.ceil(9.2));
console.log(Math.floor(9.7));
console.log(Math.max(20, 10, -1));
console.log(Math.min(10, 20, -1));
console.log('Random: ', Math.random());

function tossACoin() {
    var random = Math.random();
    console.log(random);
    return random > 0.5
};

console.log('Mặt sấp:', tossACoin());

function rollADie(min, max) {
    // 1, 2, 3, 4, 5, 6
    // var random = Math.random(1, 6);
    return Math.random() * (max - min) + min;
};
console.log(rollADie(1, 6));

