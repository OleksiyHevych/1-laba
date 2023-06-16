
class Project {

    constructor(name, customer, executor) {

        this.name = name;
        this.customer = customer;
        this.executor = executor;

        if (typeof name === 'undefined') { this.name = "Невідомий проєкт"; }

    }

}

let global_projects_list = new Array();

function add_Project(name, customer, executor) {

    let project = new Project(name, customer, executor);
    global_projects_list.push(project);

    return project;

}

function remove_Project(name, customer, executor) {

    for (let id = 0; id < global_projects_list.length; id++) {

        let project = global_projects_list[id];

        if (project.name === name &&
            project.customer === customer &&
            project.executor === executor) {
                global_projects_list.splice(id, 1);
            return 1;
        }

    }

    return -1;

}

function edit_Project(name, customer, executor, newname, newcustomer, newexecutor) {

    for (let id = 0; id < global_projects_list.length; id++) {

        let project = global_projects_list[id];

        if (project.name === name &&
            project.customer === customer &&
            project.executor === executor) {
                global_projects_list[id].name = newname;
                global_projects_list[id].customer = newcustomer;
                global_projects_list[id].address = newexecutor;
                return 1;
            }

    }

    return -1;

}

function get_Projects_List() {

    console.log("\n" + "Список усіх проєктів:");

    for (let id = 0; id < global_projects_list.length; id++) {

        let proj = global_projects_list[id];
        console.log(`Назва проєкту: ${proj.name}, замовник: ${proj.customer.name}, виконавець:${proj.executor.name}`);

    }

    console.log();

    return global_projects_list;

}
function get_Projects_List_CUSTOMER(customer) {

    console.log("\n" + "Список усіх проєктів даного замовника:");
    customer_projects = new Array();
    for (let id = 0; id < global_projects_list.length; id++) {

        let proj = global_projects_list[id];
        if(proj.customer===customer) {
            console.log(`Назва проєкту: ${proj.name}, замовник: ${proj.customer.name}, виконавець:${proj.executor.name}`);
            customer_projects.push(proj);
        }

    }

    if(customer_projects.length===0)console.log('У даного замовника не зареєстровано проєктів');
    console.log();

    return customer_projects;
}

function get_Projects_List_EXECUTOR(executor) {

    console.log("\n" + "Список усіх проєктів даного виконавця:");
    executor_projects = new Array();
    for (let id = 0; id < global_projects_list.length; id++) {

        let proj = global_projects_list[id];
        if(proj.executor===executor) {
            console.log(`Назва проєкту: ${proj.name}, замовник: ${proj.customer.name}, виконавець:${proj.executor.name}`);
            executor_projects.push(proj);
        }

    }

    if(executor_projects.length===0)console.log('У даного виконавця не зареєстровано проєктів');
    console.log();

    return executor_projects;
}

exports.add_Project                 = add_Project;
exports.remove_Project              = remove_Project;
exports.edit_Project                = edit_Project;
exports.get_Projects_List           = get_Projects_List;
exports.get_Projects_List_CUSTOMER  = get_Projects_List_CUSTOMER;
exports.get_Projects_List_EXECUTOR  = get_Projects_List_EXECUTOR;