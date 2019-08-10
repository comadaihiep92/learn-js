// 'new' keyword
// var today = new Date();
// Create a new object, object literal

// var today = new Date();
// console.log(today);

var mouse = {
    weight: 0.2,
    getWeight: function() {
        return this.weight;
    }
};
console.log(mouse.getWeight());
// this dùng trong method của object

// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
};  
var mouse1 = new Mouse('white', 0.5); // khai báo dùng new log ra kiểu của object nữa
console.log(mouse1);
// khai báo bt ko ra kiểu của object
var mouse2 = new Mouse('black', 0.7);
console.log(mouse2);

// lợi của dùng new, khi thay đổi chỉ cần thay đổi trong hàm constructor
// còn object bt phải vào từng cái để thay đổi
var tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this;
    }
};

var m1 = { name: 'm1' };
var m2 = { name: 'm2' };
var m3 = { name: 'm3' };

tom.eat(m1).eat(m2).eat(m3); // method chaining
console.log('Tom: ');
console.log(tom);

function Tom(name) {
    this.name = name;
    this.stomach = [];
    this.eat = function(mouse) {
        this.stomach.push(mouse);
        return this;
    }
};

var m1 = new Tom('m1');
console.log(m1.eat('meo meo'));


