// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function AreaOfTheRectangle(a,b) {
    return a*b;

}
console.log(AreaOfTheRectangle(23,4));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// #Mbiz5K4yFe7
function AreaOfTheRound(r) {
    return Math.PI*r*r;
}
console.log(AreaOfTheRound(4));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function AreaOfTheCylinder(radius,height) {
    return 2*Math.PI*radius*height;

}
console.log(AreaOfTheCylinder(34,56));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function filterArray(Array){
    for (const arrayElement of Array) {
        console.log(arrayElement);
    }
}
let arr=[23,45,65];
filterArray(arr);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writer(text) {
    document.write(`<p>${text}</p>`);
}
writer('Okten');
// #hOL6126
//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function enterList(list) {

    document.write(`<ul><li>${list}</li> <li>${list}</li> <li>${list}</li></ul>`);
}
enterList('proba');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function list(text1,counter) {
 document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
       document.write(`<li>${text1}</li>`);

    }
    document.write(`</ul>`);
}
list('understood',13);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function ArrayBuildList(Array){
    document.write(`<ul>`)
    for (const item of Array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
let array=[1,2,3,"okten","study",true,false];
ArrayBuildList(array)
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function ArrayOfObjectsFilterKey(ArrayOfObjects) {
    for (const item of ArrayOfObjects) {
document.write(`<div>${item.id}  ${item.name}  ${item.age}</div>`)
    }
}
let users=[
    {id:1,name:'Vasy',age:21},
    {id:2,name:'Maks',age:27},
    {id:3,name:'Mark',age:27},
    {id:4,name:'Nata',age:27}
]
ArrayOfObjectsFilterKey(users)
//#pghbnSB - створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }

    return min;
}

console.log(arrayMinValue([99,-11, -12, 22, 33, -44]));
function arrayMaxValue(arrayNumbers) {
 let max=arrayNumbers[0]
    for (let i = 1; i < arrayNumbers.length; i++) {
        let arrayNumber = arrayNumbers[i];
        if(arrayNumber > max){
            arrayNumber = max
        }

    }
    return max
}
console.log(arrayMaxValue([99,-11, -12, 22, 33, -44]));
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let basket = 0;
    for (const item of arr) {
        basket = basket + item;
        
    }
    return basket
}
console.log(sum([1,2,10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function  swap(arr,index1,index2) {
    if (index1<arr.length && index2<arr.length){
        let temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
        return arr
    }
  return "stop"
}
console.log( swap([11,22,33,44],0,1))
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency) {
let chosenCurrency;
    for (const item of currencyValues) {
if (item.currency===exchangeCurrency){
    chosenCurrency = item
}
    }
     return sumUAH/chosenCurrency.value
   }
   console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))