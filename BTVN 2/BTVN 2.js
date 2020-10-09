// 1)	Boolean là loại dữ liệu logic chỉ có giá trị true hoặc false, thường sử dụng để quyết định đoạn mã nào được thực thi (như trong lệnh if) hay lặp lại (trong vòng lặp for). VD: +if ( 1 == 1 ) {console.log(`helo world`);}
//                   +if ( a == 1 ) {console.log(`helo world`);}
//                   else if (a != 1 ) {console.log(`bye world`);}
//                    +for(a = 0; a > 1; a++) {console.log(`helo world`);}
// 2)	Flowchart(Lưu đồ thuật toán) là công cụ dùng để biểu diễn thuật toán, mô tả nhập (input), dữ liệu xuất (output) và luồng xữ lý thông qua các ký hiệu hình học.
// Flowchart của dòng code là:
// 3)	Nested conditionals là điều kiện có nhiều nhiều hướng, vd như:
// let loop = true;
// while (loop) {
// let a = Number(prompt(`Số bạn đoán là:`));
// if (a < 10) {
// console.log(`Thấp rồi!`);
// } else if (a > 10) {
// console.log(`Cao rồi!`);
//     		} else {
//         		console.log(`BINGO!`);
//         		break;
// }

// Bài turtle:
// hình 1: lt(30); fd(50); rt(60); fd(50); rt(120); fd(50); rt(60); fd(50);
//         lt(60); fd(50); lt(120); fd(50); lt(60); fd(50);
//         rt(90); fd(50); rt(60); fd(50); rt(120); fd(50); rt(60); fd(50);
//         lt(60); fd(50); lt(120); fd(50); lt(60); fd(50);
// hình 2: lt(30); fd(50); rt(60); fd(50); rt(60); fd(50); rt(60); fd(50); rt(60); fd(50); rt(60); fd(50);
//         rt(72); fd(50); rt(72); fd(50); rt(72); fd(50); rt(72); fd(50);
//         rt(162); fd(50); lt(90); fd(50); lt(90); fd(50);
//         lt(150); fd(50); rt(120); fd(50);


// Bài BMI:
// let a = Number(prompt(`Nhập cân nặng:`));
// console.log(`Bạn nặng ${a} kg.`);
// let b = Number(prompt(`Nhập chiều cao:`));
// console.log(`Bạn cao ${b} cm.`);
// let c = b/100
// let d = a/(c*c);
// if (d < 16) {
//     console.log(`Bạn thiếu cân trầm trọng.`);
// } else if (d >= 16 && d < 18.5) {
//     console.log(`Bạn thiếu cân.`);
// } else if (d >= 18.5 && d < 25) {
//     console.log(`Bạn đủ cân.`);
// } else if (d >= 25 && d < 30) {
//     console.log(`Bạn thừa cân`);
// } else {
//     console.log(`Bạn béo phì`);
// }

// // Bài nhân:
let a = Number(prompt("nhập số A:"));
let b = 1;
for(let c = 1; c <= a; c++){
    b = b * c;
}
console.log(`Tích các số từ 1 đến ${a} là ${b}.`);