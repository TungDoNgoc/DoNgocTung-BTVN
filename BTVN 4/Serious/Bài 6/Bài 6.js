let task = [];

let t1 = {
    name: `HTML`,
    completion: `false`,
}

let t2 = {
    name: `CSS`,
    completion: `false`,
}

let t3 = {
    name: `Basics of JavaScript`,
    completion: `false`
}

let t4 = {
    name: `Node Package Manager (npm)`,
    completion: `false`
}

let t5 = {
    name: `Git`,
    completion: `false`,
}

task.push(t1,t2,t3,t4,t5);

console.log(task);

// 6.1)
// for (let i = 0; i < task.length; i++){
//         console.log(`${i+1}. ${task[i].name}`);
//         console.log(`Completion: ${task[i].completion}`);
// }

// 6.2)
let a = prompt(`Bạn muốn làm gì (New, Delete, Update, Completion)`);
if (a == `new`) {
    let b = prompt(`Hãy nhập task mới:`);
    let t6 = {
        name: b,
        completion: `false`,
    }
    task.push(t6);
        for (let i = 0; i < task.length; i++){
            console.log(`${i+1}. ${task[i].name}`);
            console.log(`Completion: ${task[i].completion}`);
    }
}

//6.3)
if (a == `update`) {
    let c = Number(prompt(`Hãy nhập vị trí:`));
    let d = prompt(`Hãy nhập tên task mới`);
    task[c-1].name = d;
        for (let i = 0; i < task.length; i++) {
            console.log(`${i+1}. ${task[i].name}`);
            console.log(`Completion: ${task[i].completion}`);
        }
}

//6.4)
if (a == `complete`) {
    let e = Number(prompt(`Hãy nhập vị trí:`));
    task[e-1].completion = `Completion`;
        for (let i = 0; i < task.length; i++) {
            console.log(`${i+1}. ${task[i].name}`);
            console.log(`Completion: ${task[i].completion}`);
        }
}

//6.5)
if (a == 'delete') {
    let f = Number(prompt(`Hãy nhập vị trí:`));
    task.splice(f-1, 1);
    for (let i = 0; i < task.length; i++) {
        console.log(`${i+1}. ${task[i].name}`);
        console.log(`Completion: ${task[i].completion}`);
    }
}

else {
    alert(`Không có lệnh này`);
}