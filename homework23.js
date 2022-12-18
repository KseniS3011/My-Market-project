"use strict"

//Exercise #1

//#1

let count = + (prompt('Введите число')) + 1;

if (isNaN(count)) {

    console.log('Вы ввели не число');

} else {

    let intervalId = setInterval(() => {

        count = count - 1;
        console.log('Осталось ' + count);

        if (count === 0) {

            clearInterval(intervalId);
            console.log('Время вышло!');
        }
    }, 1000);
};


//Exercise #2

console.time('Время выполнения запроса');

let promise = fetch("https://reqres.in/api/users");

promise

    .then(function (response) {

        return response.json();
    })

    .then(function (result) {

        console.log(result);

        let newArray = result.data;

        console.log('Получили пользователей: ' + newArray.length);

        newArray.forEach((value) => {
            let newArray1 = Object.values(value);

            console.log(`— ${newArray1[2]} (${newArray1[1]})`);

        });
    })

    .catch(function () {
        console.log("Кажется бэкенд сломался :(");
    });

console.timeEnd('Время выполнения запроса');









