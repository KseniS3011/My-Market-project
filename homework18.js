"use strict";

//Exercise #1

let a = '100px';
let b = '323px';

let result1 = a+b;

console.log(result1); 


//Exercise #2

let result2 = Math.max (10, -45, 102, 36, 12, 0, -1);

console.log(result2);


//Exercise #3

let c = 123.3399; 
let c1 = (Math.round(c));

console.log(c1);

let d = 0.111;
let d1 = Math.trunc(0.111*10);

console.log(d1);

let e = 45.333333;
let e1 = (+e.toFixed(1));

console.log(e1);

let f = 3;
let f1 = (f**5);

console.log(f1);

let g = 400000000000000;

console.log(4e14);

let h = '1' == 1;

console.log(h);

//console.log(0.1 + 0.2 === 0.3); 
//Странное поведение обусловлено тем, что дроби, такие как 0.1, 0.2, 
//которые выглядят довольно просто в десятичной системе счисления, 
//на самом деле являются бесконечной дробью в двоичной форме. 
//На самом деле сумма 0.1 и 0.2 в Java Script равна 0.30000000000000004, 
//а это не равно 0.3. Решить это можно, используя округление  toFixed(n)

let sum = 0.1 + 0.2;

console.log(+sum.toFixed(1) === 0.3);








