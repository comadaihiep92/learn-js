// Function dùng để thực hiện một nhiệm vụ hay chức năng nào đó
// từ khóa function // tên function // tên nhận đầu vào, cách nhau bởi dấu phẩy nếu có nhiều đầu vào
// viết chức năng nào đó
// trả về
// khai báo được lưu vào bộ nhớ và được gọi để thực thi execute
// gọi function // tên function // truyền giá trị đầu vào

// làm việc với function có 2 bước // 1 khai báo // 2 gọi ra -- call
function caculateTriangleSquare(a, h) {
    return a * h /2;
};

// tính điện tích tam giác có chiều cao 
// h = 5, cạnh đáy a = 10
console.log(caculateTriangleSquare(10, 5));

// Tính diện tích hình tròn
// S = r * r * 3.14;
// Tính diện tích hình tròn bán kính r = 10

function calculateDiscSquare(r) {
    return r * r * 3.14;
};

console.log(calculateDiscSquare(10));
console.log(calculateDiscSquare(15));
console.log(calculateDiscSquare(20));

// Viết function tính diện tích hình vuông
// Viết function tính diện tích hình chữ nhật
// Viết function tính chu vi hình tròn
// Thử tính diện tích/ chu vi các hình này
// với tham số tùy bạn chọn

function dtHinhVuong (a) {
    return a * a;
};

console.log(dtHinhVuong(10));

function dtHCN(a, b) {
    return a * b;
};
console.log(dtHCN(10, 5));


