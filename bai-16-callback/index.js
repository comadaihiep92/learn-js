// function as a parameter (callback)
// dùng function như một tham số

// function sum(a, b) {
//     return a + b;
// };
// sum(3, 2); // number, string, true, array, object // function

var coffeeMachine = {
    makeCoffe: function(onFinish) { // callback là khi truyền 1 hàm vào 1 hàm khác dưới tư cách là 1 tham số
        console.log('Making coffee....');
        // return ko có nên underfined
        onFinish();
    }
};

var beep = function () {
    console.log('Tít tít');
};

coffeeMachine.makeCoffe(beep); // naming convention

coffeeMachine.makeCoffe(function () {
    console.log('Bíp bíp');
});



