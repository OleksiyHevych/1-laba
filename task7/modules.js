const executor   = require("./1executant");
const project    = require("./2project");
const customer   = require("./3customer");

exports.find_Executor      = executor.find_Executor;
exports.add_Executor       = executor.add_Executor;
exports.remove_Executor    = executor.remove_Executor;
exports.edit_Executor      = executor.edit_Executor;
exports.get_Executor_List  = executor.get_Executor_List;

exports.add_Project                 = project.add_Project;
exports.remove_Project              = project.remove_Project;
exports.edit_Project                = project.edit_Project;
exports.get_Projects_List           = project.get_Projects_List;
exports.get_Projects_List_CUSTOMER  = project.get_Projects_List_CUSTOMER;
exports.get_Projects_List_EXECUTOR  = project.get_Projects_List_EXECUTOR;

exports.find_Customer      = customer.find_Customer;
exports.add_Customer       = customer.add_Customer;
exports.remove_Customer    = customer.remove_Customer;
exports.edit_Customer      = customer.edit_Customer;
exports.get_Customer_List  = customer.get_Customer_List;