let a = [16, 7, 98, 19, 8, 99];
let b = Number(prompt(`Nhập số bạn muốn kiểm tra`));
let d;
for (let c = 0; c <a.length; c++) {
    if (b === a[c]) {
        d = true;
        console.log(`Số đó có trong dãy.`);
        break;
    }
    else {
        console.log(`Số đó không có trong dãy`);
    }
}