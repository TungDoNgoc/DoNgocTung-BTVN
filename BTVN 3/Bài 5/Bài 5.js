let a = prompt(`Nhập các số bạn muốn tính tổng:`);
let b = a.split(`,`);
console.log(b);
let c = 0
for (let d = 0; d < b.length; d++) {
    c = c + Number(b[d]);
}
console.log(`Tổng các số bạn nhập là ${c}`)