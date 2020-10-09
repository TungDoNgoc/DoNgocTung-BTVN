let a = 1;
let b = 2;
let x = [a,b];
console.log(x);

x[0] = b;
x[1] = a;
console.log(x);

let a = 1;
let b = 2;
console.log(a, b);
[a,b] = [b,a];
console.log(a, b);