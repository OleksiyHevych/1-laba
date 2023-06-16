const mod = require("./task7/modules");
// Додавання замовників
let c1 = mod.add_Customer("Сергій");
let c2 = mod.add_Customer("Данило");
let c3 = mod.add_Customer();

// Список замовників
mod.get_Customer_List();

// Видалення замовників
console.log("Видалення замовника: Сергій");
mod.remove_Customer("Сергій");

// Список замовників
mod.get_Customer_List();

// Зміна замовників
console.log("Зміна замовника: Данило");
mod.edit_Customer("Данило","Новий замовник");

// Список замовників
mod.get_Customer_List();

// Пошук замовників
let custom1 = mod.find_Customer("Абоба");
console.log(`Пошук замовника Абоба: ${custom1 !== -1 ? "знайдено" : "не знайдено"}`);
let custom2 = mod.find_Customer("Новий замовник");
console.log(`Пошук замовника Новий замовник: ${custom2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////
// Додавання виконавців
mod.add_Executor("ВАлодя");
mod.add_Executor("Сєрий");
mod.add_Executor("Петросянич");

// Список виконавців
mod.get_Executor_List();

// Видалення виконавців
console.log("Видалення виконавців: Сєрий");
mod.remove_Executor("Сєрий");

// Список виконавців
mod.get_Executor_List();

// Редагування виконавців
console.log("Редагування виконавців: ВАлодя");
mod.edit_Executor("ВАлодя","Марта петрівна");

// Список виконавців
mod.get_Executor_List();

// Пошук виконавців
let exec1 = mod.find_Executor("Марта петрівна");
console.log(`Пошук виконавця - Марта петрівна: ${exec1 !== -1 ? "знайдено" : "не знайдено"}`);
let exec2 = mod.find_Executor("Костянтин львович");
console.log(`Пошук виконавця - Костянтин львович: ${exec2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////
//створення замовників
let customer1 = mod.add_Customer("Петро");
let customer2 = mod.add_Customer("Іван");
//створення замовників
let executor2 = mod.add_Customer("Поле");
let executor3 = mod.add_Customer("Нива");
// Додавання проєктів
mod.add_Project("Garena", customer1, executor2);
mod.add_Project("FreFire", customer2, executor2);
mod.add_Project("BottleRoyal", customer2, executor3);

// Список проєктів
mod.get_Projects_List();
// Пошук проєктів замовника
mod.get_Projects_List_CUSTOMER(customer2)
// Пошук проєктів виконавця
mod.get_Projects_List_EXECUTOR(executor2)

// Видалення проєктів
console.log("Видалення проектів: FreFire");
mod.remove_Project("FreFire", customer2, executor2);

// Список проєктів
mod.get_Projects_List();

// Редагування проєктів
console.log("Редагування проєктів: BottleRoyal");
mod.edit_Project("BottleRoyal", customer2, executor3,"FreFire", customer2, executor2);

// Список проєктів
mod.get_Projects_List();
