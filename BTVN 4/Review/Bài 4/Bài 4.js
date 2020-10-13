let dictionary = {
    debug: `The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, the only thing you have to do is to wait for
users to use it (no additional codes or actions needed)`,
    defect: `The formal word for 'error'`,
    pm: `The short version of Project Manager, the person in charge of the final
result of a project`,
    uiux: `UI means User Interface, UX mean User Experience, are the process
to define how your products looks and feels`,
};

alert(`Chào mừng đến với từ điển`);
while (true) {
    let a = prompt(`Hãy nhập từ muốn tra:`);
        for (let b in dictionary) {
            if (a === b) {
                alert(`${b}\n${dictionary[b]}`);
                    break;
            }
            
            else if (a !== b) {
                dictionary[a] = prompt(`Từ ${a} không có trong từ điển, hãy thêm giải thích của bạn:`);
                alert(`Xong`);
                let c = prompt(`Hãy nhập từ muốn tra:`)
                alert(`${c}\n${dictionary[c]}`);
                break;
            }
        }
}