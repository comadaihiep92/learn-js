// Terms: array, element, index, length  // mảng, các thành phần trong mảng, chỉ số, độ dài
// var evenNumbers = [2, 4, 6]; // index bắt đầu từ 0 không phải 1;
// độ rộng của mảng - 1 sẽ ra độ dài lớn nhất của mảng

// Array // lưu trữ 1 danh sách, list các object giống nhau
// vd điện thoại -> Contacts
var dog1 = {
    type: 'chó ta'
};
var dog2 = {
    type: 'Lạp xưởng'
};
var dog3 = {
    name: 'Đần',
    type: 'husky'   
};
var bunchOfDogs = [dog1, dog2, dog3];
console.log(bunchOfDogs[2].name);
// truy xuất phần tử trong mảng bằng chỉ số index

var dog4 = {
    type: 'Shiba'
};

bunchOfDogs[0] = dog4;
console.log(bunchOfDogs);

// Array // lưu trữ 1 danh sách, list các object giống nhau
// vd điện thoại -> Contacts
var contacts = [
    { name: 'Thắng', phone: '12345678' },
    { name: 'Hà', phone: '01234567' }
];

// bài tập: tạo danh sách lớp của mình
// dưới dạng 1 array các object
// danh sach nv

var emplyees = [
    { name: 'Tèo', phone: '0905345892', age: 23, gender: 'male', isAlone: true },
    { name: 'Tuấn', phone: '0905342004', age: 22, gender: 'female', isAlone: false },
    { name: 'Tam', phone: '0953345892', age: 25, gender: 'male', isAlone: false },
    { name: 'Tú', phone: '090535326', age: 19, gender: 'male', isAlone: false }
];

// console.log(emplyees);
// console.log(emplyees[2].isAlone);
// emplyees[2].isAlone = true;
// console.log(emplyees[2].isAlone);
console.log(emplyees[2].name);

//cách dùng object ['property'] không dùng được trong array ???

