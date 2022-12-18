"use strict";

//Exercise #1

let arr1 = [1, 2, 10, 5];
let arr2 = ["a", {}, 'v', 3, -2];
let sum = 0;

function getSum(arr) {

    arr.forEach((value) => {

        if (!isNaN(value)) {
            sum += value;
        }
    });

    console.log(sum);

}

getSum(arr2);


//Exercise #3

let arr3 = [1, 8, 10, 3];
let arr4 = [1, 3, 5, 6];

function cartAdd(currentCart, goodsForAdd) {

    let itemsForAdd = goodsForAdd.filter(item => !currentCart.includes(item));

    itemsForAdd.forEach(item => currentCart.push(item));

    console.log(currentCart);
};

cartAdd(arr3, arr4);

function cartDel(currentCart, goodsForDel) {
    
    let d = currentCart.indexOf(goodsForDel);

    currentCart.splice(d, 1);

    console.log(currentCart);

};

let arr5 = ['Яблоко', 'Груша', 'Апельсин', 'Банан'];
cartDel(arr5, 'Груша');




