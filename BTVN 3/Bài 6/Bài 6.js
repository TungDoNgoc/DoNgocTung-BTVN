let a = prompt(`Nhập các số bạn muốn kiểm tra:`);
let b = a.split(`,`);
let c = Math.min(...b);
console.log(`Số nhỏ nhất trong các số bạn nhập là ${c}`)