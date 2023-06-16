class Executor {

    constructor (name) {
    
        this.name = name;
    
        if (typeof name === 'undefined') { this.name = "Невідомий виконавець"; }
    
    }
    
}
let executorList = new Array()
function find_Executor (name) {

    for (let id = 0; id < executorList.length; id++) {

        let executor = executorList[id];

        if (name === executor.name) { return executor; }

    }

    return -1;

}

function add_Executor (name) {

    let executor = new Executor(name);
    executorList.push(executor);

    return executor;

}

function remove_Executor (name) {

    let executor = find_Executor(name);

    if (executor === -1) { return -1; }

    let id = executorList.indexOf(executor);
    executorList.splice(id, 1);

    return 1;

}

function edit_Executor (name,new_name) {

    let executor = find_Executor(name);

    if (executor === -1) { return -1; }

    let id = executorList.indexOf(executor);
    
    executorList[id].name = new_name;

    return 1;

}

function get_Executor_List () {

    console.log("\n" + `Список усіх виконавців:`);

    for (let id = 0; id < executorList.length; id++) {

        let executor = executorList[id];
        console.log(`\n${id+1} Ім'я виконавця: ${executor.name}`);

    }

    console.log();

    return executorList;
}

exports.find_Executor      = find_Executor;
exports.add_Executor       = add_Executor;
exports.remove_Executor    = remove_Executor;
exports.edit_Executor      = edit_Executor;
exports.get_Executor_List  = get_Executor_List;