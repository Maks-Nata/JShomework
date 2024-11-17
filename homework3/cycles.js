// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<10;i++){
    document.write('<div><p>yes</p></div>')
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Hello world  ${i}</div>`);

}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

     let i = 0;
    while (i<20) {

         document.write('<h1>People</h1>');
i++}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let index=0
while (index<20){
    document.write(`<h1>Development ${index}</h1>`);
    index++
}
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

    // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

    document.write(`<ul> `)
for (const item of listOfItems) {
document.write(`<li>${item}</li>`)

}
document.write(`</ul>`)

// є масив

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (const user of users){
   if (user.status) {
       console.log(user)}


 }
for (const user of users){
    if (user.status===false) {
        console.log(user)}


}

   for (const user of users) {if(user.age>30){console.log(user)}}



