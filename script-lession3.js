// destructering - phân giã
//rest
// spread
//cách lấy giá trị của từng phần tử

const arr = [7, 8, 9];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a, b, c);

//Sử dụng với array
var [a, b, c] = arr;
console.log(a, b, c);

//Toán tử rest - phần còn lại
var array = ['Javascript', 'PHP', 'Ruby', 'React Native'];
var [a, b, ...rest] = array;
console.log(a, b);
console.log(rest);

//Sử dụng với object
var course = {
  name: 'Javascript',
  price: 1000,
  image: 'image-address',
  children: {
    name: 'React JS',
  },
  description: 'this is description',
}; //course.name
//spread
var { name, price } = course;
console.log(name, price);

var { name, ...rest } = course;
console.log(name);
console.log(rest);

var { name, ...newObject } = course;
console.log(newObject);

//Đặt tên cho key của object khi có giá trị trùng nhau
var {
  name: parentName,
  children: { name: childrenName },
} = course;
console.log(parentName);
console.log(childrenName);

//Lấy giá trị không có trong object
var { name, description = 'default description' } = course;
console.log(description);

//Sử dụng spread với function
//Viết function
//1. Sử dụng keyword function
//2. Khai báo thông qua biến
//3. Narrow function
//hàm thông thường
function logger1(a, b, c) {
  console.log(a, b, c);
}

//spread
function logger(...params) {
  console.log(params);
}
console.log(logger(1, 2, 5, 9, 'abcd', 'xyz'));

//sử dụng spread để nối 2 mảng array
var array1 = ['react native', 'javascript', 'electry', 'pizza'];
var array2 = ['php', 'java programming', 'tomato', 'apple'];

var array3 = [...array2, ...array1];
console.log(array2);

var [a, ...restArray1] = array1;
console.log(restArray1);

var [a, ...restArray2] = array2;
console.log(restArray2);
var array4 = [...restArray1, ...restArray2];
console.log(array4);

var defaulConfig = {
  fullName: 'Anh Nguyen',
  order: 'order',
  level: 5,
  studentID: 'PH1234',
};

//thay đổi student ID
var changeConfig = {
  ...defaulConfig, //spread
  studentID: 'PH0000',
};
console.log(changeConfig);

//short circuting trong javascript
//falsy value: undefined   NaN   ""  null false  0
// (true || whatever) => true
// (false && whatever) => false
console.log(null || 'dog');
console.log('cat' || 'dog');
console.log(0 || null);

//circuting &&
let age = 20;
age > 18 && console.log('Ban da du tuoi!');

if (age > 18) {
  console.log('Ban da du tuoi!');
}

//for of loop lấy ra những phần tử của 1 mảng, từng chữ cái trong 1 chuỗi

//dùng với array
var lanague = ['java', 'php', 'c'];
for (var value of lanague) {
  console.log(value);
}

//dùng với object
var myInfo = {
  name: ' Nguyen Van A',
  age: 18,
};

console.log(Object.keys(myInfo)); //lấy key của object
for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]); //lấy value theo key của object
}

console.log(Object.values(myInfo));
for (var value of Object.values(myInfo)) {
  console.log(value);
}
