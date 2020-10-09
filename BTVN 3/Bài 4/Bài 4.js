let shop = [`Quần bò, Áo phông, Tất`];
let b = true
while(b) {
    let a = prompt(`Bạn muốn làm gì? (Mua, Đọc, Cập Nhật, Xóa )`);
    if (a === 'Đọc') {
        console.log(`Sản phẩm trong giỏ là:`)
        for (let i= 0; i < shop.length; i++) {
            console.log(shop[i]);
        }
            break;
    } 

    else if (a ==='Mua') {
        let c = prompt('Nhập sản phẩm bạn muốn mua:');
        shop.push(c);
        console.log(`Xong!`);
    } 
            
    else if ( a === 'Cập Nhật') {
        let d = Number(prompt(`Bạn muốn cập nhật vật phẩm số mấy?`));
        if (d >= shop.length){
            d = Number(prompt(`Số đó quá lớn, hãy nhập lại:`));
        }
        shop[d] = prompt(`Nhập vào sản phẩm mới:`);
    }
        
    else if (a === 'Xóa') {
        let e = Number(prompt(`Nhập số sản phẩm bạn muốn xóa`));
        shop.splice(e,1);
        console.log(`Xong!`);
    }
        
    else {
        console.log('Không có lệnh này.');
    }
        
}