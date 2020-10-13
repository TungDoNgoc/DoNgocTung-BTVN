let products = [];

let sp1 = {
    name: `Xiaomi portable charger 20000mah`,
    brand: `Xiaomi`,
    price: 428,
    color: `White`,
    category: `Charger`,
}

let sp2 = {
    name: `VSmart Active 1`,
    brand: `Vsmart`,
    price: 5487,
    color: `Black`,
    category: `Phone`,
}

let sp3 = {
    name: `Iphone X`,
    brand: `Apple`,
    price: 21490,
    color: `Gray`,
    category: `Phone`,
}

let sp4 = {
    name: `Samsung Galaxy A9`,
    brand: `Samsung`,
    price: 8490,
    color: `Blue`,
    category: `Phone`,
}

products.push(sp1);
products.push(sp2);
products.push(sp3);
products.push(sp4);

// 5.1)
// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
//     console.log(`---------------------`);
// }

// for (let i = 0; i < products.length; i++) {
// console.log(`#${i+1}. ${products[i].name}\nPrice: ${products[i].price}`);
// }

// 5.2)
// let a = prompt(`Hãy nhập số của sản phẩm:`);
// if ( a - 1 <= products.length) {
//     console.log(`Name: ${products[a-1].name}`);
//     console.log(`Brand: ${products[a-1].brand}`);
//     console.log(`Price: ${products[a-1].price}`);
//     console.log(`Color: ${products[a-1].color}`);
//     console.log(`Category: ${products[a-1].category}`);
// }
// else {
//     alert(`Số bạn nhập quá lớn`);
// }

// 5.3)
// let b = prompt(`Bạn muốn mua gì`);
// for (let i = 0; i < products.length; i++) {
//     if (b == products[i].category) {
//         console.log(`Name: ${products[i].name}`);
//         console.log(`Price: ${products[i].price}`);
//         console.log(`---------------------`);
//     }
// }

//5.4)

// products[0].provider = [`Phukienzero`, `Dientuccc`];
// products[1].provider = [`Tgdd`, `Ddghn`, `VhStore`];
// products[2].provider = [`Tgdd`];
// products[3].provider = [`Tgdd`];

// for (let i = 0; i < products.length; i++) {
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
//     console.log(`Providers: ${products[i].provider}`);
//     console.log(`---------------------`);
// }

//5.5)

// let c = prompt(`Bạn muốn mua của cửa hàng nào:`);
// for (let e = 0; e < products.length; e++) {
//     if (c == products[e].provider) {
//         console.log(`Name: ${products[e].name}`);
//         console.log(`Brand: ${products[e].brand}`);
//         console.log(`Price: ${products[e].price}`);
//         console.log(`Color: ${products[e].color}`);
//         console.log(`Category: ${products[e].category}`);
//         console.log(`Providers: ${products[e].provider}`;
//         console.log(`---------------------`);
//     }
// }