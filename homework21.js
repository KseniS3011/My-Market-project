"use strict";

//Exercise #1

// #1

/**
 * Проверяет наличие свойств у объекта 
 * @param {Object} obj Проверяемый объект
 * @returns {boolean} Возвращает true, при отсутствии свойств у 
                      объекта, и false, при наличии свойств у объекта
 */

function isEmpty(obj) {

    for (let key in obj) {
        return false;
    }
    return true;
}


//Exercise #3

let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};

/**
 * Увеличивает каждое свойство объекта на указанный процент
 * @param {Object} salaries Объект, содержащий имена и зарплаты сотрудников
 * @param {number} perzent Процент, на который увеличивается salaries[key] 
 */

function raiseSalary(perzent) {
    for (let key in salaries) {
        salaries[key] = Math.floor(salaries[key] + salaries[key] * (perzent / 100));
    }
}

let x = 10;
raiseSalary(x);
let sum = 0;

for (let key in salaries) {

    sum += salaries[key];
}

console.log(sum);


