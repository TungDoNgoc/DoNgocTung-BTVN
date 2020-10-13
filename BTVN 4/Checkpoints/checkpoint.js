//Init

// let movie = {
//     name: `The Dark Knight Rise`,
//     year: 2012,
//     rate: 8.4,
// };

// console.log(movie);

//Read

// let movie = {
//     name: `The Dark Knight Rise`,
//     year: 2012,
//     rate: 8.4,
// };

// Cách 1
// console.log(movie.name);
// console.log(movie.year);
// console.log(movie.rate);
// console.log(movie.director);

//Cách 2
// let a = `name`;
// let b = `year`;
// let c = `rate`;

// console.log(movie[a]);

// console.log(movie[b]);

// console.log(movie[c]);

// let a = prompt(`Bạn muốn biết gì?`);
// if (a === `name`) {
//     console.log(movie.name);
// }
// else if (a === `year`) {
//     console.log(movie.year);
// }
// else if (a === `rate`) {
//     console.log(movie.rate);
// }
// else {
//     console.log(`${a} không có trong dữ liệu.`);
// }

// // Update
// let prop = `rate`;
// movie[prop] = 8.7;
// console.log(movie.rate);

// console.log(Number(movie.rate)+0.5);

// // let update = {};
// let a = prompt(`Bạn muốn thay đổi gì?`);
// let b = prompt(`Bạn muốn đổi thành gì?`);
// // update[a] = b;
// if (a === `name`) {
//     movie.name = b;
//     console.log(movie);
// }
// else if (a === `year`) {
//     movie.year = b;
//     console.log(movie);
// }
// else if (a === `rate`) {
//     movie.rate = b;
//     console.log(movie);
// }
// else {
//     console.log(`${a} không có trong dữ liệu.`);
// }

// Create

// let a = prompt(`Bạn muốn biết gì?`);
// if (a === `name`) {
//     console.log(movie.name);
// }
// else if (a === `year`) {
//     console.log(movie.year);
// }
// else if (a === `rate`) {
//     console.log(movie.rate);
// }
// else {
//     alert(`${a} không có trong dữ liệu, bọn tôi sẽ thêm.`);
//     movie[a] = prompt(`Hãy nhập thông tin:`);
//     console.log(movie);
// }

// Array of Objects

// let movies = [];

// let movie1 = {
//     title: `Star Wars`,
//     year: 1999,
//     rate: 6.5,
// };
// let movie2 = {
//     title: `The Incredibles`,
//     year: 2004,
//     rate: 8,
// };
// let movie3 = {
//     title: `The Avengers`,
//     year: 2012,
//     rate: 8,
// };

// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);

// console.log(movies[0]);
// console.log(movies[2].title);

// for (let i = 0; i < movies.length; i++) {
//     let p = movies[i];
//     console.log(p);
// }

// for (let i = 0; i < movies.length; i++) {
//     let p = movies[i];
//     console.log(`Title: ${p.title}`);
//     console.log(`Year: ${p.year}`);
//     console.log(`Rate: ${p.rate}`);
// }

// console.log(Number(movies[2].rate) + 0.7);

// Object containing Array

// let movie = {
//     title: `The Avengers`,
//     year: 2012,
//     rate: 8,
//     characters: [`Odin`, `Thor`, `Hulk`],
// };

// console.log(movie.title);
// console.log(`Year: ${movie.year}`);
// console.log(`Rate: ${movie.rate}`);
// console.log(`Casts: ${movie.characters}`);

// movie.characters.push(`Iron Man`);
// console.log(`Casts: ${movie.characters}`);

// Object and Array mix structure.

// let movies = [];

// let movie1 = {
//     title: `Star Wars`,
//     year: 1999,
//     rate: 6.5,
//     casts: [`Luke`, `Obiwan`, `Mace Windu`],
// };
// let movie2 = {
//     title: `The Incredibles`,
//     year: 2004,
//     rate: 8,
//     casts: [`Elastigirl`,`Violet`, `Dash`],
// };
// let movie3 = {
//     title: `The Avengers`,
//     year: 2012,
//     rate: 8,
//     casts: [`Odin`, `Thor`, `Hulk`],
// };

// movies.push(movie1);
// movies.push(movie2);
// movies.push(movie3);

// for (let i = 0; i < movies.length; i++) {
//     let p = movies[i];
//     console.log(`Title: ${p.title}`);
//     console.log(`Year: ${p.year}`);
//     console.log(`Rate: ${p.rate}`);
//     console.log(`Casts: ${p.casts}`);
// }