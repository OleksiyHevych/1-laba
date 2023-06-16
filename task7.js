const mod = require("./task7/modules");
// Додавання замовників
let c1 = mod.add_Customer("Назар");
let c2 = mod.add_Customer("Артур");
let c3 = mod.add_Customer();

// Список замовників
mod.get_Customer_List();

// Видалення замовників
console.log("Видалення замовника: Назар");
mod.remove_Customer("Назар");

// Список замовників
mod.get_Customer_List();

// Зміна замовників
console.log("Зміна замовника: Артур");
mod.edit_Customer("Артур","Новий замовник");

// Список замовників
mod.get_Customer_List();

// Пошук замовників
let custom1 = mod.find_Customer("Антон");
console.log(`Пошук замовника Антон: ${custom1 !== -1 ? "знайдено" : "не знайдено"}`);
let custom2 = mod.find_Customer("Новий замовник");
console.log(`Пошук замовника Новий замовник: ${custom2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////
// Додавання виконавців
mod.add_Executor("Євстахій");
mod.add_Executor("Карлсон");
mod.add_Executor("Галина");

// Список виконавців
mod.get_Executor_List();

// Видалення виконавців
console.log("Видалення виконавців: Карлсон");
mod.remove_Executor("Карлсон");

// Список виконавців
mod.get_Executor_List();

// Редагування виконавців
console.log("Редагування виконавців: Євстахій");
mod.edit_Executor("Євстахій","Світлана Миколаївна");

// Список виконавців
mod.get_Executor_List();

// Пошук виконавців
let exec1 = mod.find_Executor("Світлана Миколаївна");
console.log(`Пошук виконавця - Світлана Миколаївна: ${exec1 !== -1 ? "знайдено" : "не знайдено"}`);
let exec2 = mod.find_Executor("Костянтин Львович");
console.log(`Пошук виконавця - Костянтин Львович: ${exec2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////
//створення замовників
let customer1 = mod.add_Customer("Олег");
let customer2 = mod.add_Customer("Олександр");
//створення замовників
let executor1 = mod.add_Customer("Поле");
let executor2 = mod.add_Customer("Нива");
// Додавання проєктів
mod.add_Project("PC", customer1, executor1);
mod.add_Project("VHS", customer2, executor1);
mod.add_Project("DVD", customer2, executor2);

// Список проєктів
mod.get_Projects_List();
// Пошук проєктів замовника
mod.get_Projects_List_CUSTOMER(customer2)
// Пошук проєктів виконавця
mod.get_Projects_List_EXECUTOR(executor2)

// Видалення проєктів
console.log("Видалення проектів: VHS");
mod.remove_Project("VHS", customer2, executor1);

// Список проєктів
mod.get_Projects_List();

// Редагування проєктів
console.log("Редагування проєктів: PC");
mod.edit_Project("PC", customer1, executor1,"VHS", customer2, executor1);

// Список проєктів
mod.get_Projects_List();
