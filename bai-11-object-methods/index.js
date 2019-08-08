// Object methods
// các phương thức của object

var myDog = {
    weight: 5,
    name: 'Đần',
    age: 1,
    bark: function() { // ko gán giá trị number, string, booleen cho thuộc tính mà gán function
        // function ko có tên gọi là anonymous function // ko đặt tên cho function 
        console.log('Meo meo, my name is', this.name); // return undefined
        // function khi gán vào thuộc tính (property) của object gọi là method
    }
};
console.log(myDog.bark());

// function bark() {
//     console.log('Ụt ịt..');
// };
// bark();
// console.log	là object và method, method thì truyền vào bao nhiêu cái input cũng dc, 1 input, 1 parameter
// this	là keywork dùng trong ngữ cảnh (context) của method và nó tượng trưng cho object nó thuộc về

function bark() {
    console.log('Meo meo, my name is', this.name);
};
bark();