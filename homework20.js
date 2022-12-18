"use strict";

//Exercise #1


for(let a=0 ;a <= 20; a+=2) {

   console.log(a); 
}


//Exercise #2

let sum = 0;

for (let i = 0; i < 3; i++) {

    let number = +prompt("Введите число");

    if (isNaN(number)) {
        alert('Ошибка. Вы ввели не число');
        break;
    }
        sum += number; 
}

    alert("Сумма: " + sum);



//Exercise #3


function getNameOfMonth(month) {
  
    if (month===0) {
        return 'Январь';
    } else if (month===1) {
        return 'Февраль';
    } else if (month===2) {
        return 'Март';
    } else if (month===3) {
        return 'Апрель';
    } else if (month===4) {;
        return 'Май';
    } else if (month===5) {
        return 'Июнь';
    } else if (month===6) {
        return 'Июль';
    } else if (month===7) {
        return 'Август';
    } else if (month===8) {
        return 'Сентябрь';
    } else if (month===9) {
        return 'Октябрь';
    } else if (month===10) {
        return 'Ноябрь';
    } else if (month===11) {
        return 'Декабрь';
    } else {
       return 'Не введен верный номер месяца' 
    }
}

let i = +prompt("Введите номер месяца от 1 до 11", "");

   let result = getNameOfMonth(i);
   alert(result);

for (let g=0; g<12; g++) {
    if (g===9) {
        continue;
    }
    console.log (getNameOfMonth(g));
}









