//Khởi tạo biến
var age1 = 18;
const age2 = 20;
let age3 = 25;

console.log(age1, age2, age3);
//coding challege 1
// Tính chỉ số BMI của Hồng và Na

const weightHong = 68;
const heightHong = 1.69;
const weightNa = 70;
const heightNa = 1.89; //chiều cao của Na
//tính chỉ số BMI = cân nặng / chiều cao * chiều cao

// const BMIHong = weightHong / heightHong ** 2; // bình phương
// const BMINA = weightNa / (heightNa * heightNa);

// console.log("BMI Hong " + BMIHong, "BMI NA" + BMINA);
console.log(
  `BMI của Hồng là ${weightHong / heightHong ** 2}, của Na là ${
    weightNa / (heightNa * heightNa)
  }`
); //template literals

//Tính tuổi được phép
const age4 = 15;
if (age4 > 18) {
  console.log(`Bạn đã ${age4} nên đủ tuổi`);
} else {
  console.log(`Bạn không đủ tuổi!`);
}

//Các kiểu dữ liệu trong javascript (7 kiểu)
//Number, string, boolean (T/F), Undefined, Null, Symbol , BigInt
//Đặt tên biến:
/*
- Đặt theo camelcase (kiểu lạc đà)
- không được bắt đầu bằng số
- Không đặc trùng với keyword của javascript
*/
const year = 1990;
console.log(typeof year);
const myName = "Hồng Hoa";
console.log(typeof myName);

//Ép kiểu dữ liệu không tường minh
console.log("23" - "10" - 9);
console.log("Tôi là Hồng Hoa" + 15 + " tuổi");
console.log("10" + "15");
console.log(Number(myName)); //NaN not a number
//Ép kiểu tường minh
const myAge = "40";
console.log(typeof myAge);
console.log(typeof Number(myAge));

// 2 + 3 + 4 + '5'  = 95
// '10' - '4' - '3' - 2 + '5' = 15

//Hàm
// 3 cách khai báo hàm
//declaration  dùng keyword function
function myInfo(birthYear) {
  return 2023 - birthYear;
}
const myCurrentAge = myInfo(1990);
console.log(myCurrentAge);
// dạng biểu thức
const myCurrentlAge2 = function (birthYear) {
  return 2023 - birthYear;
};
console.log(myCurrentlAge2(1988));
//narrow function
const myCurrentAge3 = (birthYear) => 2023 - birthYear;
console.log(myCurrentAge3(1989));
// so sánh == và ===
// ==  '23' vs 23 -> true
// ===  '23' vs 23 -> false  >= <= ==
// 4 8 16 32 64 128 ..
// 2^2  2^3  2^4 ...
