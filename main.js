// Homework:Task1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let text='hello';
console.log(text);
let text1='owu';
console.log(text1);
let text2='com';
console.log(text2);
let text3='ua';
console.log(text3);
let number=1;
console.log(number);
let number1=10;
console.log(number1);
let negativeNumber=-999;
console.log(negativeNumber);
const number2=123;
console.log(number2);

const PI=3.14;
console.log(PI);
let floatNumber= 2.7;
console.log(floatNumber);
const number3=16;
console.log(number3)
let tr=true;
console.log(tr)
let f=false
console.log(f);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let  firstName='Natalia';
let middleName='Mykolaivna';
let lastName='Fishchenko'
let name=firstName+' '+middleName+' '+lastName
console.log(name)
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a)
let b = '100';
console.log(typeof b)
let c = true;
console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName=prompt("Введіть сво ім'я");
console.log("Ім'я користувача",userName);
let userMiddleName=prompt("Введіть своє по батькові");
console.log("По батькові кориристувача",userMiddleName);
let userAge=prompt("Введіть свій вік");
console.log("Вік користувача",+ userAge)